import { type ReactNode } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { RegisterForm } from "@/forms/RegisterForm/RegisterForm.tsx";
import { RegisterSchema } from "@/schema/register-schema.ts";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";

import { useRegisterUser } from "@/hooks/useRegisterUser.ts";

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  extraButtons?: ReactNode[];
};

type Values = z.infer<typeof RegisterSchema>;

export const RegisterDialog = ({
  isOpen,
  onOpenChange,
  extraButtons,
}: Props): ReactNode => {
  const { mutate, isPending, isSuccess, data, isError, error, reset } =
    useRegisterUser();

  const form = useForm<Values>({
    defaultValues: { username: "", email: "", password: "" },
    resolver: zodResolver(RegisterSchema),
  });
  const handleFormSubmit: SubmitHandler<Values> = (values: Values) => {
    mutate(values);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        reset();
        form.reset();
        onOpenChange(open);
      }}
    >
      <DialogTrigger />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Create Account</DialogTitle>
        </DialogHeader>
        {isError && (
          <div className="mt-4">
            <p className="p-2 w-fit text-destructive">{error?.message}</p>
          </div>
        )}
        {isSuccess ? (
          <div className="text-center flex flex-col items-center">
            <p className="p-2 w-full rounded-lg">
              <strong>{data?.user.username}</strong> , Your account has been
              created. Log in to your account from the link below
            </p>
          </div>
        ) : (
          <RegisterForm
            noValidate
            onSubmit={form.handleSubmit(handleFormSubmit)}
            form={form}
            isPending={isPending}
          />
        )}
        <div className="flex flex-col w-fit">
          {extraButtons?.map((button) => button)}
        </div>
      </DialogContent>
    </Dialog>
  );
};
