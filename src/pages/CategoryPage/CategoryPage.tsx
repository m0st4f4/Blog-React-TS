import type { ReactNode } from "react";

import { useParams } from "react-router";

import { CategoryDetails } from "@/components/Category/components/CategoryDetails/CategoryDetails.tsx";
import { Categories } from "@/components/Category/components/Categories/Categories.tsx";

export const CategoryPage = (): ReactNode => {
  const categoryId = useParams<{ id: string }>().id;
  if (!categoryId) {
    return <Categories />;
  }
  return <CategoryDetails id={categoryId} />;
};
