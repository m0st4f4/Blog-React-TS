import apiInstance from "@/services/api.ts";
import type { AxiosResponse } from "axios";

import type { UserType } from "@/types/user.types.ts";

export const fetchUserById = async (id: string | number): Promise<UserType> => {
  const response: AxiosResponse<UserType> = await apiInstance.get(
    `/users/${id}`,
  );
  return response.data;
};

type ResponseRegisterUserType = {
  accessToken: string;
  refreshToken: string;
  user: Pick<UserType, "email" | "username">;
};
export type RegisterUserType = Pick<
  UserType,
  "email" | "username" | "password"
>;
export const RegisterUser = async (
  userData: RegisterUserType,
): Promise<ResponseRegisterUserType> => {
  const response: AxiosResponse<ResponseRegisterUserType> =
    await apiInstance.post(`/auth/register`, userData);

  return response.data;
};
