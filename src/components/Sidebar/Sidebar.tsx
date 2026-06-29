import { type ReactNode } from "react";

import { cn } from "@/lib/utils.ts";

import { SidebarCategories } from "@/components/Sidebar/components/SidebarCategories/SidebarCategories.tsx";
import { SidebarSearch } from "@/components/Sidebar/components/SidebarSearch/SidebarSearch.tsx";

type Props = {
  className?: string;
};

export const Sidebar = ({ className = "" }: Props): ReactNode => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <SidebarSearch />
      <SidebarCategories />
    </div>
  );
};
