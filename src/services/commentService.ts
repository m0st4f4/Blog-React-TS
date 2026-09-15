import apiInstance from "@/services/api.ts";
import { type AxiosResponse } from "axios";



import type { CommentType } from "@/types/comment.type.ts";
import type { UserType } from "@/types/user.types.ts";























export type CommentParams = Partial<
  Pick<CommentType, "id" | "articleId" | "userId" | "parentId" | "status"> & {
    q: string;
    _sort: string;
    _order: "desc" | "asc";
    _embed: string[];
    _expand: string[];
    _page: number;
    _limit: number;
  }
>;

export type CommentResponse = CommentType & {
  user?: UserType;
};

export const getComments = async (
  inputParams?: CommentParams,
  signal?: AbortSignal,
): Promise<CommentResponse[]> => {
  const defaultParams: CommentParams = {
    _sort: "id",
    _order: "desc",
    _expand: [],
    _page: 1,
    _limit: 5,
  };

  const outputParams: CommentParams = { ...defaultParams, ...inputParams };

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

  const response: AxiosResponse<CommentResponse[]> = await apiInstance.get(
    `/comments`,
    { params, signal },
  );
  return response.data;
};
