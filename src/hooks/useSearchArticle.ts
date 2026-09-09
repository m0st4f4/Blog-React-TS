import { useQuery } from "@tanstack/react-query";

import { fetchFilteredArticles } from "@/services/articleService.ts";

export const useSearchArticle = (query: string) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => {
      return fetchFilteredArticles({
        status: "published",
        _expand: ["user", "category"],
        q: query,
        _page:1,
        _limit:50,
        _sort:"id",
        _order: "desc",
      });
    },
  });
};
