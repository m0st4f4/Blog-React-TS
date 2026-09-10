import type { ApiError } from "@/types/api.types.ts";

export const getApiErrorMessage = (
  error: ApiError,
  fallback = "Somethings went wrong",
): string => {
  return error?.response?.data?.message ?? error?.message ?? fallback;
};
