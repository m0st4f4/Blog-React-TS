import { useMutation } from "@tanstack/react-query";

import type { UserRegisterType } from "@/schema/register-schema.ts";
import { type AuthResponseType, RegisterUser } from "@/services/userService.ts";

import type { ApiError } from "@/types/api.types.ts";

export const useRegisterUser = () => {
  return useMutation<AuthResponseType, ApiError, UserRegisterType>({
    mutationFn: RegisterUser
  });
};
