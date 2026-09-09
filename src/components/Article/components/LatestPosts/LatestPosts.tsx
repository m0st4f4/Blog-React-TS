import { type ReactNode } from "react";

import { Link } from "react-router";

import { cn } from "@/lib/utils.ts";
import { useTranslation } from "react-i18next";

import { PostCardTopImg } from "@/components/PostCardTopImg/PostCardTopImg.tsx";
import { PostCardTopImgSkeleton } from "@/components/PostCardTopImg/PostCardTopImgSkeleton.tsx";

import { useGetLatestArticles } from "@/hooks/useGetLatestArticles.ts";

type Props = {
  className?: string;
};

export const LatestPosts = ({ className = "" }: Props): ReactNode => {
  const { data, isPending } = useGetLatestArticles();
  const { t } = useTranslation();
  if (!data) return;
  return (
    <div className={cn(className)}>
      <h2 className="text-2xl border-s-2 border-accent mbe-4 ps-4 font-bold">
        {t("latestArticle.heading")}
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {isPending
          ? Array.from({ length: 6 }).map((_, index) => (
              <PostCardTopImgSkeleton key={index} />
            ))
          : data.map((item) => {
              return (
                <Link to={`/article/${item.id}`}>
                  <PostCardTopImg item={item} />
                </Link>
              );
            })}
      </div>
    </div>
  );
};
