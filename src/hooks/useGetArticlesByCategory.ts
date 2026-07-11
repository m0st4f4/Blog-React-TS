import { useQuery } from "@tanstack/react-query";

import { fetchFilteredArticles } from "@/services/articleService.ts";

export const useGetArticlesByCategory = (categoryId: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["articlesByCategoryId", categoryId],
    queryFn: () => {
      return fetchFilteredArticles({
        categoryId: categoryId,
        status: "published",
        _expand: ["user", "category"],
        _page: 1,
        _limit: 50,
        _sort: "id",
        _order: "desc",
      });
    },
  });

  return { data, isPending, isError, error };
};
