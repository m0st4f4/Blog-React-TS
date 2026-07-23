import { useMutation } from "@tanstack/react-query";

import { RegisterUser, type RegisterUserType } from "@/services/userService.ts";

export const useRegisterUser = () => {
  const { mutate, isPending, isSuccess, data, isError, error, reset } =
    useMutation({
      mutationFn: (data: RegisterUserType) => {
        return RegisterUser(data);
      },
    });

  return { mutate, isPending, isSuccess, data, isError, error, reset };
};
