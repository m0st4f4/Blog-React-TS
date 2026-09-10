import { useMutation } from "@tanstack/react-query";

import type { UserRegisterType } from "@/schema/register-schema.ts";
import { RegisterUser, type ResponseUserType } from "@/services/userService.ts";

import type { ApiError } from "@/types/api.types.ts";

export const useRegisterUser = () => {
  return useMutation<ResponseUserType, ApiError, UserRegisterType>({
    mutationFn: RegisterUser,
  });
};
