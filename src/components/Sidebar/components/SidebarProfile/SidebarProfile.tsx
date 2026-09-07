import { type ReactNode } from "react";

import { NavLink } from "react-router";

import { cn } from "@/lib/utils.ts";
import { useTranslation } from "react-i18next";

import { SidebarGroup } from "@/components/Sidebar/components/SidebarGroup/SidebarGroup.tsx";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu.tsx";

type Props = {
  className?: string;
};

export const SidebarProfile = ({ className = "" }: Props): ReactNode => {
  const { t } = useTranslation();
  return (
    <SidebarGroup title={t("sidebar.profile.title")} className={className}>
      <NavLink
        to="/profile"
        className={({ isActive }) => {
          return cn(
            navigationMenuTriggerStyle(),
            isActive ? "text-secondary-foreground bg-secondary" : "",
            "w-full justify-start",
          );
        }}
      >
        {t("sidebar.profile.userInfo")}
      </NavLink>
    </SidebarGroup>
  );
};
