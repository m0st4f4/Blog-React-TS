import { useContext } from "react";

import { useMutation } from "@tanstack/react-query";

import type { UserLoginType } from "@/schema/login-schema.ts";
import { LoginUser, type ResponseUserType } from "@/services/userService.ts";

import { AuthContext } from "@/context/auth-context.ts";

import type { ApiError } from "@/types/api.types.ts";

export const useLoginUser = () => {
  const { login } = useContext(AuthContext);
  return useMutation<ResponseUserType, ApiError, UserLoginType>({
    mutationFn: LoginUser,
    onSuccess: (data) => {
      login(data);
    },
  });
};
