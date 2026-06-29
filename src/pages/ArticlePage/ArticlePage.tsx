import { type ReactNode } from "react";

import { useParams } from "react-router";

import { ArticleDetails } from "@/components/ArticleDetails/ArticleDetails.tsx";
import { Sidebar } from "@/components/Sidebar/Sidebar.tsx";

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
  return (
    <div className="container grid gap-4 pt-12 md:grid-cols-4">
      <div className="col-span-full md:col-span-3">
        <ArticleDetails item={data} />
      </div>
      <div className="col-span-full md:col-span-1 ">
        <Sidebar />
      </div>
    </div>
  );
};
