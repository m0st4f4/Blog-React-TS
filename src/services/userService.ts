import apiInstance from "@/services/api.ts";
import type { AxiosResponse } from "axios";

import type { UserType } from "@/types/user.types.ts";

export const fetchUserById = async (id: string | number): Promise<UserType> => {
  const response: AxiosResponse<UserType> = await apiInstance.get(
    `/users/${id}`,
  );
  return response.data;
};
