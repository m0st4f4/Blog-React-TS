import apiInstance from "@/services/api.ts";
import type { AxiosResponse } from "axios";

import type { ArticleStatusType, ArticleType } from "@/types/article.types.ts";

export const fetchArticleById = async (
  id: string | number,
): Promise<ArticleType> => {
  const params = new URLSearchParams();
  params.append("_expand", "category");
  params.append("_expand", "user");
  params.append("_embed", "comments");

  const response: AxiosResponse<ArticleType> = await apiInstance.get(
    `/articles/${id}`,
    {
      params,
    },
  );
  return response.data;
};

type ParamsType = {
  categoryId?: string;
  isFeatured?: boolean;
  status?: ArticleStatusType;
  q?: string;
  _sort?: string;
  _order?: "desc" | "asc";
  _embed?: string[];
  _expand?: string[];
  _page?: number;
  _limit?: number;
};

export const fetchFilteredArticles = async (
  inputParams?: ParamsType,
): Promise<ArticleType[]> => {
  const defaultParams: ParamsType = {
    _sort: "id",
    _order: "desc",
    _expand: [],
    _page: 1,
    _limit: 5,
  };
  const outputParams: ParamsType = { ...defaultParams, ...inputParams };

  const params = new URLSearchParams();
  Object.entries(outputParams).forEach(([key, value]) => {
    if (key == "q" && typeof value === "string" && value.length > 0) {
      params.append(key, value.trim());
      return;
    }
    if (Array.isArray(value)) {
      value.forEach((item) => {
        params.append(key, String(item));
      });
      return;
    }
    params.append(key, String(value));
  });

  const response: AxiosResponse<ArticleType[]> = await apiInstance.get(
    "/articles",
    { params },
  );
  return response.data;
};
