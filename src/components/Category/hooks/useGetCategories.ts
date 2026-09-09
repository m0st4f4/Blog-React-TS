import { useQuery } from "@tanstack/react-query";

import { fetchCategories } from "@/services/categoryService.ts";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
};
