import { useQuery } from "@tanstack/react-query";

import { fetchFilteredArticles } from "@/services/articleService.ts";

export const useGetFeaturedArticles = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["articles", "featured"],
    queryFn: () =>
      fetchFilteredArticles({
        isFeatured: true,
        _sort: "id",
        _order: "desc",
        status: "published",
        _expand: ["category"],
        _page: 1,
        _limit: 5,
      }),
  });

  return { data, isPending, isError };
};
