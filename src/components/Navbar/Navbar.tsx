import { NavLink } from "react-router";

import { useTranslation } from "react-i18next";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import type { TopNavigation } from "@/types/navigation.types.ts";

type Props = {
  menuItems: TopNavigation[];
};
export const Navbar = ({ menuItems }: Props) => {
  const { t } = useTranslation();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) => (isActive ? " text-accent " : "")}
              >
                {t(item.titleKey)}
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
