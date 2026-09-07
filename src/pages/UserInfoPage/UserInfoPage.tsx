import { type ReactNode } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";

import { UserInfoForm } from "@/forms/UserInfoForm/UserInfoForm.tsx";
import { type UserInfoType, UserSchema } from "@/schema/user-schema.ts";
import { toast } from "sonner";

import { useAuth } from "@/hooks/useAuth.ts";
import { useChangeUserInfo } from "@/hooks/useChangeUserInfo.ts";

type Props = {
  className?: string;
};

export const UserInfoPage = ({ className = "" }: Props): ReactNode => {
  const { user } = useAuth();
  const { isError, error, mutateAsync, isPending } = useChangeUserInfo();
  const form = useForm<UserInfoType>({
    values: user ?? undefined,
    resolver: zodResolver(UserSchema),
  });
  const {
    formState: { dirtyFields },
  } = form;
  const HandleFormSubmit: SubmitHandler<UserInfoType> = async (
    values: UserInfoType,
  ) => {
    if (!user) {
      return;
    }

    const changedValues = (
      Object.keys(dirtyFields) as Array<keyof UserInfoType>
    ).reduce<Partial<UserInfoType>>((acc, key) => {
      acc[key] = values[key];
      return acc;
    }, {});

    if (Object.keys(changedValues).length === 0) {
      toast.info("No changes to save");
      return;
    }

    const info = {
      data: changedValues,
      userId: user.id,
    };
    await mutateAsync(info);
    toast.success("Successfully updated user");
  };
  return (
    <div className={className}>
      {isError && (
        <div className="mt-4">
          <p className="p-2 w-fit text-destructive">{error.message}</p>
        </div>
      )}
      <UserInfoForm
        form={form}
        isPending={isPending}
        onSubmit={form.handleSubmit(HandleFormSubmit)}
      />
    </div>
  );
};
