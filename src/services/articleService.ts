import apiInstance from "@/services/api.ts";
import type { AxiosResponse } from "axios";

import type { ArticleType } from "@/types/article.types.ts";

export const fetchArticleById = async (
  id: string | number,
): Promise<ArticleType> => {
  const params = new URLSearchParams();
  params.append("_embed", "category");
  params.append("_embed", "user");
  params.append("_embed", "comments");

  const response: AxiosResponse<ArticleType> = await apiInstance.get(
    `/articles/${id}`,
    {
      params,
    },
  );
  return response.data;
};

type FeaturedArticleType = {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: ArticleType[];
};
export const fetchFeaturedArticles = async (): Promise<ArticleType[]> => {
  const params = new URLSearchParams();
  params.append("isFeatured", "true");
  params.append("status", "published");
  params.append("_embed", "category");
  params.append("_embed", "user");
  params.append("_sort", "-id");
  params.append("_page", "1");
  params.append("_per_page", "5");

  const response: AxiosResponse<FeaturedArticleType> = await apiInstance.get(
    "/articles",
    { params },
  );
  return response.data.data;
};
