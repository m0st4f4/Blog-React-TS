import { useQuery } from "@tanstack/react-query";

import { fetchUserById } from "@/services/userService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { UserType } from "@/types/user.types.ts";

export const useGetUser = (id: string) => {
  return useQuery<UserType, ApiError>({
    enabled: Boolean(id),
    queryKey: ["user", id],
    queryFn: ({ signal }) => {
      return fetchUserById(id, signal);
    },
  });
};
