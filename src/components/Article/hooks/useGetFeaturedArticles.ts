import { useQuery } from "@tanstack/react-query";

import { fetchFilteredArticles } from "@/services/articleService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { ArticleType } from "@/types/article.types.ts";

export const useGetFeaturedArticles = () => {
  return useQuery<ArticleType[], ApiError>({
    queryKey: ["articles", "featured"],
    queryFn: ({ signal }) =>
      fetchFilteredArticles(
        {
          isFeatured: true,
          _sort: "id",
          _order: "desc",
          status: "published",
          _expand: ["category"],
          _page: 1,
          _limit: 5,
        },
        signal,
      ),
  });
};
