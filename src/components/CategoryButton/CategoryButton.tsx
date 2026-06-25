import type { ReactNode } from "react";

import { Link } from "react-router";

import { cn } from "@/lib/utils.ts";

import { Skeleton } from "@/components/ui/skeleton";

import { useGetCategory } from "@/hooks/useGetCategory.ts";

type Props = {
  id: string;
};
export const CategoryButton = ({ id }: Props): ReactNode => {
  const { data, isPending, isError } = useGetCategory(id);
  if (!data) {
    return <p>Can't find category</p>;
  }
  if (isPending) {
    return <Skeleton className="rounded h-4 w-8" />;
  }
  if (isError) {
    return <p>Error</p>;
  }

  return (
    <Link
      to={`/category/${data.id}`}
      style={{ backgroundColor: data.color }}
      className={cn("rounded py-1 px-4 bg-primary")}
    >
      {data.name}
    </Link>
  );
};
