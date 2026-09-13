import type { UserLoginType } from "@/schema/login-schema.ts";
import type { UserRegisterType } from "@/schema/register-schema.ts";
import type { UserInfoType } from "@/schema/user-schema.ts";
import apiInstance from "@/services/api.ts";
import type { AxiosResponse } from "axios";

import type { UserType } from "@/types/user.types.ts";

export const fetchUserById = async (
  id: string | number,
  signal?: AbortSignal,
): Promise<UserType> => {
  const response: AxiosResponse<UserType> = await apiInstance.get(
    `/users/${id}`,
    { signal },
  );
  return response.data;
};

export type AuthResponseType = {
  accessToken: string;
  refreshToken: string;
  user: UserType;
};

export const RegisterUser = async (
  userData: UserRegisterType,
): Promise<AuthResponseType> => {
  const response: AxiosResponse<AuthResponseType> = await apiInstance.post(
    `/auth/register`,
    userData,
  );

  return response.data;
};

export const LoginUser = async (
  userData: UserLoginType,
): Promise<AuthResponseType> => {
  const response: AxiosResponse<AuthResponseType> = await apiInstance.post(
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
