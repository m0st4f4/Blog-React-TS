import { useContext } from "react";

import { useMutation } from "@tanstack/react-query";

import { LoginUser, type LoginUserType } from "@/services/userService.ts";
import { toast } from "sonner";

import { AuthContext } from "@/context/auth-context.ts";

export const useLoginUser = () => {
  const { login } = useContext(AuthContext);
  const { isPending, isSuccess, data, isError, error, reset, mutateAsync } =
    useMutation({
      mutationFn: (data: LoginUserType) => LoginUser(data),
      onSuccess: (data) => {
        login(data);
        toast.success(
          `${data?.user.name} , You are logged in
              successfully`,
          { position: "bottom-right" },
        );
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
