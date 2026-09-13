import { useQuery } from "@tanstack/react-query";

import { fetchFilteredArticles } from "@/services/articleService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { ArticleType } from "@/types/article.types.ts";

export const useGetLatestArticles = () => {
  return useQuery<ArticleType[], ApiError>({
    queryKey: ["articles", "latest"],
    queryFn: ({ signal }) =>
      fetchFilteredArticles(
        {
          _sort: "id",
          _order: "desc",
          status: "published",
          _expand: ["category", "user"],
          _page: 1,
          _limit: 6,
        },
        signal,
      ),
  });
};
