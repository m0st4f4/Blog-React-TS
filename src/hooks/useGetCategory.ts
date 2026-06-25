import { useQuery } from "@tanstack/react-query";

import { fetchCategoryById } from "@/services/categoryService.ts";

export const useGetCategory = (id: string) => {
  const { data, isPending, isError } = useQuery({
    enabled: Boolean(id),
    queryKey: ["category", id],
    queryFn: () => {
      if (!id) {
        return;
      }
      return fetchCategoryById(id);
    },
  });
  return { data, isPending, isError };
};
