import { useQuery } from "@tanstack/react-query";

import { fetchFilteredArticles } from "@/services/articleService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { ArticleType } from "@/types/article.types.ts";

export const useSearchArticle = (query: string) => {
  return useQuery<ArticleType[], ApiError>({
    queryKey: ["search", query],
    queryFn: ({ signal }) => {
      return fetchFilteredArticles(
        {
          status: "published",
          _expand: ["user", "category"],
          q: query,
          _page: 1,
          _limit: 50,
          _sort: "id",
          _order: "desc",
        },
        signal,
      );
    },
  });
};
