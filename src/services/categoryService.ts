import apiInstance from "@/services/api.ts";
import type { AxiosResponse } from "axios";

import type { CategoryType } from "@/types/article.types.ts";

export const fetchCategoryById = async (id: string): Promise<CategoryType> => {
  const response: AxiosResponse<CategoryType> = await apiInstance.get(
    `/categories/${id}`,
  );
  return response.data;
};
