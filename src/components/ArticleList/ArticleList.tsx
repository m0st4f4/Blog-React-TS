import { type ReactNode } from "react";

import { Link } from "react-router";

import { cn } from "@/lib/utils.ts";
import { useTranslation } from "react-i18next";

import { PostCardTopImg } from "@/components/PostCardTopImg/PostCardTopImg.tsx";
import { PostCardTopImgSkeleton } from "@/components/PostCardTopImg/PostCardTopImgSkeleton.tsx";

import type { ArticleType } from "@/types/article.types.ts";

type Props = {
  className?: string;
  data?: ArticleType[];
  isPending: boolean;
};

export const ArticleList = ({
  className = "",
  data,
  isPending,
}: Props): ReactNode => {
  const { t } = useTranslation();

  if (isPending) {
    return (
      <div className={cn("grid gap-4 grid-cols-1  md:grid-cols-3", className)}>
        {Array.from({ length: 3 }).map((_, index) => (
          <PostCardTopImgSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (data?.length === 0) {
    return (
      <p className={cn("text-center", className)}>{t("SearchPage.noResult")}</p>
    );
  }

  return (
    <div className={cn("grid gap-4 grid-cols-1  md:grid-cols-3", className)}>
      {data?.map((item) => (
        <Link key={item.id} to={`/article/${item.id}`}>
          <PostCardTopImg item={item} />
        </Link>
      ))}
    </div>
  );
};
