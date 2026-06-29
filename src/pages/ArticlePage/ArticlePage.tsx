import { type ReactNode } from "react";

import { useParams } from "react-router";

import { ArticleDetails } from "@/components/ArticleDetails/ArticleDetails.tsx";

import { useGetArticle } from "@/hooks/useGetArticle.ts";

export const ArticlePage = (): ReactNode => {
  const { id } = useParams<{ id: string }>();
  const { data, isPending, isError } = useGetArticle(id);

  if (isPending)
    return <div className="text-center p-5">در حال بارگذاری مقاله...</div>;
  if (isError)
    return (
      <div className="text-red-500 text-center p-5">خطا در دریافت مقاله</div>
    );
  if (!data) return <div className="text-center p-5">مقاله‌ای یافت نشد.</div>;
  return <ArticleDetails item={data} />;
};
