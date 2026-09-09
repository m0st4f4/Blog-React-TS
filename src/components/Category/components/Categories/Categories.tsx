import { type ReactNode } from "react";

import { cn } from "@/lib/utils.ts";

import { CategoryCardTopImgSkeleton } from "@/components/Category/components/CategoryCardTopImg/CategoryCardTopImgSkeleton.tsx";
import { CategoryList } from "@/components/Category/components/CategoryList/CategoryList.tsx";
import { useGetCategories } from "@/components/Category/hooks/useGetCategories.ts";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";

type Props = {
  className?: string;
};

export const Categories = ({ className = "" }: Props): ReactNode => {
  const { data, isPending, isError, error, refetch } = useGetCategories();
  if (isPending) {
    return (
      <div className={cn("grid gap-4 grid-cols-1  md:grid-cols-3", className)}>
        {Array.from({ length: 3 }).map((_, index) => (
          <CategoryCardTopImgSkeleton key={index} />
        ))}
      </div>
    );
  }
  if (isError) {
    return <ErrorMessage onRetry={refetch} message={error.message} />;
  }

  return <CategoryList data={data} className={className} />;
};
