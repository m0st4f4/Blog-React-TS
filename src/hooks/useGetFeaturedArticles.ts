import { useQuery } from "@tanstack/react-query";

import { fetchFeaturedArticles } from "@/services/articleService.ts";

export const useGetFeaturedArticles = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["articles", "featured"],
    queryFn: () => fetchFeaturedArticles(),
  });

  return { data, isPending, isError };
};
