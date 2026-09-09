import { useQuery } from "@tanstack/react-query";

import { fetchFilteredArticles } from "@/services/articleService.ts";

export const useGetLatestArticles = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["articles", "latest"],
    queryFn: () =>
      fetchFilteredArticles({
        _sort: "id",
        _order: "desc",
        status: "published",
        _expand: ["category", "user"],
        _page: 1,
        _limit: 6,
      }),
  });
  return { data, isPending, isError, error };
};
