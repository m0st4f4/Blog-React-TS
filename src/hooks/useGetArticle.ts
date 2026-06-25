import { useQuery } from "@tanstack/react-query";

import { fetchArticleById } from "@/services/articleService.ts";

export const useGetArticle = (id: string | undefined) => {
  const { data, isPending, isError } = useQuery({
    enabled: Boolean(id),
    queryKey: ["article", id],
    queryFn: () => {
      if (!id) return;
      return fetchArticleById(id);
    },
  });

  return { data, isPending, isError };
};
