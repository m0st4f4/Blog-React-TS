import type { ReactNode } from "react";

import { useParams } from "react-router";

import { ArticleList } from "@/components/ArticleList/ArticleList.tsx";
import { CategoryHeader } from "@/components/CategoryHeader/CategoryHeader.tsx";

import { useGetArticlesByCategory } from "@/hooks/useGetArticlesByCategory.ts";
import { useGetCategory } from "@/hooks/useGetCategory.ts";

export const CategoryPage = (): ReactNode => {
  const categoryId = useParams<{ id: string }>().id || "";

  const { data: articleListData, isPending: articleIsPending } =
    useGetArticlesByCategory(categoryId);
  const { data: categoryData, isPending: categoryIsPending } =
    useGetCategory(categoryId);


  return (
    <div>
      <CategoryHeader
        className="mb-8"
        data={categoryData}
        isPending={categoryIsPending}
      />
      <ArticleList isPending={articleIsPending} data={articleListData} />
    </div>
  );
};
