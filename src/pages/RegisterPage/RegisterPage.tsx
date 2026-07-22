import { type ReactNode } from "react";

import { Link } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { RegisterForm } from "@/forms/RegisterForm/RegisterForm.tsx";
import { RegisterSchema } from "@/schema/register-schema.ts";

import { Button } from "@/components/ui/button.tsx";

import { useRegisterUser } from "@/hooks/useRegisterUser.ts";

type Values = z.infer<typeof RegisterSchema>;

export const RegisterPage = (): ReactNode => {
  const { mutate, isPending, isSuccess, data, isError, error } =
    useRegisterUser();

  const form = useForm<Values>({
    defaultValues: { username: "", email: "", password: "" },
    resolver: zodResolver(RegisterSchema),
  });
  const handleFormSubmit: SubmitHandler<Values> = (values: Values) => {
    mutate(values);
  };

  return (
    <>
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
      <div className="w-fit flex flex-col">
        <Button variant="link" asChild>
          <Link to="/login">Login to your account</Link>
        </Button>
        <Button variant="link" asChild>
          <Link to="/rest-pass">Reset your password</Link>
        </Button>
      </div>
    </>
  );
};
