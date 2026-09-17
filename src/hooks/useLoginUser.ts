import { useContext } from "react";

import { useMutation } from "@tanstack/react-query";

import { LoginUser } from "@/services/authService.ts";

import { AuthContext } from "@/context/auth-context.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { AuthResponseType, UserLoginType } from "@/types/auth.types.ts";

export const useLoginUser = () => {
  const { login } = useContext(AuthContext);
  return useMutation<AuthResponseType, ApiError, UserLoginType>({
    mutationFn: LoginUser,
    onSuccess: (data) => {
      login(data);
    },
  });
};
