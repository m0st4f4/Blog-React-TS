import { type ReactNode } from "react";

import { Link, useLocation, useNavigate } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import type z from "zod";

import { LoginForm } from "@/forms/LoginForm/LoginForm.tsx";
import { LoginSchema } from "@/schema/login-schema.ts";

import { Button } from "@/components/ui/button.tsx";

import { useLoginUser } from "@/hooks/useLoginUser.ts";

type Values = z.infer<typeof LoginSchema>;
type LocationState = {
  from?: { pathname: string };
};

export const LoginPage = (): ReactNode => {
  const { mutateAsync, isPending, isSuccess, data, isError, error } =
    useLoginUser();

  const navigate = useNavigate();
  const location = useLocation();
  const fromLocation =
    (location.state as LocationState)?.from?.pathname || "profile";

  const form = useForm<Values>({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(LoginSchema),
  });

  const handleFormSubmit: SubmitHandler<Values> = async (data: Values) => {
    await mutateAsync(data);
    navigate(fromLocation, { replace: true });
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
        <LoginForm
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
