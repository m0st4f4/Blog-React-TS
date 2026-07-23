import { useMutation } from "@tanstack/react-query";

import { LoginUser, type LoginUserType } from "@/services/userService.ts";

export const useLoginUser = () => {
  const { mutate, isPending, isSuccess, data, isError, error, reset } =
    useMutation({
      mutationFn: (data: LoginUserType) => LoginUser(data),
    });
  return { mutate, isPending, isSuccess, data, isError, error, reset };
};
