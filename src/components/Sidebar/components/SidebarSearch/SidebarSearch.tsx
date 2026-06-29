import { type ReactNode } from "react";

import { SearchForm } from "@/components/SearchForm/SearchForm.tsx";
import { SidebarGroup } from "@/components/Sidebar/components/SidebarGroup/SidebarGroup.tsx";

type Props = {
  className?: string;
};

export const SidebarSearch = ({ className = "" }: Props): ReactNode => {
  return (
    <SidebarGroup className={className} title="search">
      <SearchForm />
    </SidebarGroup>
  );
};
