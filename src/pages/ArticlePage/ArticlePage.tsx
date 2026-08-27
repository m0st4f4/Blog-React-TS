import { type ReactNode } from "react";

import { useParams } from "react-router";

import { useTranslation } from "react-i18next";

import { ArticleDetails } from "@/components/ArticleDetails/ArticleDetails.tsx";
import { ArticleDetailsSkeleton } from "@/components/ArticleDetails/ArticleDetailsSkeleton.tsx";

import { useGetArticle } from "@/hooks/useGetArticle.ts";

export const ArticlePage = (): ReactNode => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { data, isPending, isError, error } = useGetArticle(id);

  if (isPending) {
    return <ArticleDetailsSkeleton />;
  }

  if (isError) {
    if (error?.response?.status === 404) {
      return (
        <div className="text-lg text-center p-5">
          <p>{t("page.article.notfound")}</p>
        </div>
      );
    }
    return (
      <div className="text-lg text-center p-5">
        <p>{t("page.article.articleError")}</p>
        <p>{error?.message}</p>
      </div>
    );
  }

  if (!data) {
    return;
  }
  return <ArticleDetails item={data} />;
};
