import apiInstance from "@/services/api.ts";
import type { AxiosResponse } from "axios";

import type { ArticleType } from "@/types/article.types.ts";

export const fetchArticleById = async (
  id: string | number,
): Promise<ArticleType> => {
  const response: AxiosResponse<ArticleType> = await apiInstance.get(
    `/articles/${id}`,
  );
  return response.data;
};
