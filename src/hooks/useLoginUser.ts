import { useContext } from "react";

import { useMutation } from "@tanstack/react-query";

import { LoginUser, type LoginUserType } from "@/services/userService.ts";

import { AuthContext } from "@/context/auth-context.ts";

export const useLoginUser = () => {
  const { login } = useContext(AuthContext);
  const { isPending, isSuccess, data, isError, error, reset, mutateAsync } =
    useMutation({
      mutationFn: (data: LoginUserType) => LoginUser(data),
      onSuccess: (data) => {
        login(data);
      },
    });
  return {
    isPending,
    isSuccess,
    data,
    isError,
    error,
    reset,
    mutateAsync,
  };
};
