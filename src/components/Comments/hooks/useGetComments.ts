import { useQuery } from "@tanstack/react-query";

import {
  type CommentParams,
  type CommentResponse,
  getComments,
} from "@/services/commentService.ts";

import type { ApiError } from "@/types/api.types.ts";

export const useGetComments = (params?: CommentParams) => {
  return useQuery<CommentResponse[], ApiError>({
    queryKey: ["comments", params ?? ""],
    queryFn: ({ signal }) => getComments(params, signal),
  });
};
