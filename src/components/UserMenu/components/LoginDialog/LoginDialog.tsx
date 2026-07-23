import { type ReactNode } from "react";



import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";



import { LoginForm } from "@/forms/LoginForm/LoginForm.tsx";
import { LoginSchema } from "@/schema/login-schema.ts";



import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog.tsx";



import { useLoginUser } from "@/hooks/useLoginUser.ts";


















type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  RegisterButton: ReactNode;
  ResetButton: ReactNode;
};
type Values = z.infer<typeof LoginSchema>;
export const LoginDialog = ({
  isOpen,
  onOpenChange,
  ResetButton,
  RegisterButton,
}: Props): ReactNode => {
  const { mutate, isPending, isSuccess, data, isError, error, reset } =
    useLoginUser();
  const form = useForm<Values>({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(LoginSchema),
  });
  const handleFormSubmit: SubmitHandler<Values> = (data: Values) => {
    mutate(data);
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
        {isSuccess ? (
          <div className="text-center flex flex-col items-center">
            <p className="p-2 w-full rounded-lg">
              <strong>{data?.user.username}</strong> , You are logged in
              successfully
            </p>
          </div>
        ) : (
          <LoginForm
            noValidate
            onSubmit={form.handleSubmit(handleFormSubmit)}
            form={form}
            isPending={isPending}
          />
        )}
        <div className="flex flex-col w-fit">
          {RegisterButton}
          {ResetButton}
        </div>
      </DialogContent>
    </Dialog>
  );
};
