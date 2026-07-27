import apiInstance from "@/services/api.ts";
import type { AxiosResponse } from "axios";

import type { UserType } from "@/types/user.types.ts";

export const fetchUserById = async (id: string | number): Promise<UserType> => {
  const response: AxiosResponse<UserType> = await apiInstance.get(
    `/users/${id}`,
  );
  return response.data;
};

export type ResponseUserType = {
  accessToken: string;
  refreshToken: string;
  user: UserType;
};

export type RegisterUserType = Required<
  Pick<UserType, "email" | "username" | "password">
>;
export const RegisterUser = async (
  userData: RegisterUserType,
): Promise<ResponseUserType> => {
  const response: AxiosResponse<ResponseUserType> = await apiInstance.post(
    `/auth/register`,
    userData,
  );

  return response.data;
};

export type LoginUserType = Required<Pick<UserType, "username" | "password">>;
export const LoginUser = async (
  userData: LoginUserType,
): Promise<ResponseUserType> => {
  const response: AxiosResponse<ResponseUserType> = await apiInstance.post(
    `/auth/login`,
    userData,
  );
  return response.data;
};
