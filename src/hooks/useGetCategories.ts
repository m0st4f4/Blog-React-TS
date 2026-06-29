import { useQuery } from "@tanstack/react-query";

import { fetchCategories } from "@/services/categoryService.ts";

export const useGetCategories = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
  return { data, isPending, isError };
};
