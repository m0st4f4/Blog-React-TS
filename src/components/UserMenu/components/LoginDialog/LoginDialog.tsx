import { type ReactNode } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { LoginForm } from "@/forms/LoginForm/LoginForm.tsx";
import { LoginSchema } from "@/schema/login-schema.ts";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";

import { useLoginUser } from "@/hooks/useLoginUser.ts";

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  extraButtons?: ReactNode[];
};
type Values = z.infer<typeof LoginSchema>;
export const LoginDialog = ({
  isOpen,
  onOpenChange,
  extraButtons,
}: Props): ReactNode => {
  const { isPending, isError, error, reset, mutateAsync } = useLoginUser();
  const form = useForm<Values>({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(LoginSchema),
  });
  const handleFormSubmit: SubmitHandler<Values> = (values: Values) => {
    mutateAsync(values).then(() => {
      onOpenChange(false);
    });
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        reset();
        onOpenChange(open);
      }}
    >
      <DialogTrigger />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Login to Your Account</DialogTitle>
        </DialogHeader>
        {isError && (
          <div className="mt-4">
            <p className="p-2 w-fit text-destructive">{error?.message}</p>
          </div>
        )}
        <LoginForm
          noValidate
          onSubmit={form.handleSubmit(handleFormSubmit)}
          form={form}
          isPending={isPending}
        />
        <div className="flex flex-col w-fit">
          {extraButtons?.map((button) => button)}
        </div>
      </DialogContent>
    </Dialog>
  );
};
