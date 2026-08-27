import { type ReactNode } from "react";

import { Link } from "react-router";

import { useTranslation } from "react-i18next";

import { SidebarGroup } from "@/components/Sidebar/components/SidebarGroup/SidebarGroup.tsx";
import { Skeleton } from "@/components/ui/skeleton";

import { useGetCategories } from "@/hooks/useGetCategories.ts";

type Props = {
  className?: string;
};

export const SidebarCategories = ({ className }: Props): ReactNode => {
  const { data, isPending, isError } = useGetCategories();
  const { t } = useTranslation();

  if (isError) {
    return;
  }

  return (
    <SidebarGroup title={t("sidebar.category.title")} className={className}>
      <ul>
        {isPending
          ? Array.from({ length: 5 }).map((_, index) => {
              return (
                <Skeleton
                  key={index}
                  className={`h-3.5 mbe-2 last:mbe-0  w-2/3`}
                />
              );
            })
          : data?.map((category) => {
              return (
                <li
                  key={category.id}
                  className="mbe-2 last:mbe-0 text-sm hover:text-accent"
                >
                  <Link
                    to={{
                      pathname: `/category/${category.id}`,
                    }}
                  >
                    {category.name}
                  </Link>
                </li>
              );
            })}
      </ul>
    </SidebarGroup>
  );
};
