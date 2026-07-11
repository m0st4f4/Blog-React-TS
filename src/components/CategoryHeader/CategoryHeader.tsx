import { type ReactNode } from "react";

import { cn } from "@/lib/utils.ts";
import { useTranslation } from "react-i18next";

import { Skeleton } from "@/components/ui/skeleton.tsx";

import type { CategoryType } from "@/types/article.types.ts";

type Props = {
  className?: string;
  data?: CategoryType;
  isPending?: boolean;
};

export const CategoryHeader = ({
  className = "",
  data,
  isPending,
}: Props): ReactNode => {
  const { t } = useTranslation();
  if (isPending) {
    return (
      <div className={className}>
        <Skeleton className="w-full h-48 object-cover rounded-lg" />
        <Skeleton className="w-1/4 h-4 my-4" />
        <Skeleton className="w-1/2 h-4" />
      </div>
    );
  }
  if (!data) {
    return (
      <p className={cn("text-center", className)}>
        {t("CategoryHeader.noResult")}
      </p>
    );
  }

  return (
    <div className={className}>
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={data.image}
        alt={data.name}
      />
      <h1 className="text-2xl font-bold my-4">{data.name}</h1>
      <p className="text-base">{data.description}</p>
    </div>
  );
};
