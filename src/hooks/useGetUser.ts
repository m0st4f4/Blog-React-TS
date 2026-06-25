import { useQuery } from "@tanstack/react-query";

import { fetchUserById } from "@/services/userService.ts";

export const useGetUser = (id: string) => {
  const { data, isPending, isError } = useQuery({
    enabled: Boolean(id),
    queryKey: ["user", id],
    queryFn: () => {
      if (!id) {
        return;
      }
      return fetchUserById(id);
    },
  });
  return { data, isPending, isError };
};
