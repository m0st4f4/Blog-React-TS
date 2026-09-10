import type { UserLoginType } from "@/schema/login-schema.ts";
import type { UserInfoType } from "@/schema/user-schema.ts";
import apiInstance from "@/services/api.ts";
import type { AxiosResponse } from "axios";

import type { UserType } from "@/types/user.types.ts";
import type { UserRegisterType } from "@/schema/register-schema.ts";

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

export const RegisterUser = async (
  userData: UserRegisterType,
): Promise<ResponseUserType> => {
  const response: AxiosResponse<ResponseUserType> = await apiInstance.post(
    `/auth/register`,
    userData,
  );

  return response.data;
};

export const LoginUser = async (
  userData: UserLoginType,
): Promise<ResponseUserType> => {
  const response: AxiosResponse<ResponseUserType> = await apiInstance.post(
    `/auth/login`,
    userData,
  );
  return response.data;
};

export type ChangeUserInfoParams = {
  data: UserInfoType;
  userId: string;
};
export const ChangeUserInfo = async ({
  data,
  userId,
}: ChangeUserInfoParams): Promise<UserType> => {
  const response: AxiosResponse<UserType> = await apiInstance.patch(
    `/users/${userId}`,
    data,
  );
  return response.data;
};
