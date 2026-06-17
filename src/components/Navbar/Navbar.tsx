import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {NavLink} from "react-router";
import type {TopNavigation} from "@/types/navigation.types.ts";
import {useTranslation} from "react-i18next";

type Props = {
    menuItems: TopNavigation[];
}
export const Navbar = ({menuItems}: Props) => {
    const {t} = useTranslation();
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {menuItems.map((item) => (
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <NavLink to={item.href} className={({isActive}) =>
                                    isActive ? " text-accent " : ""
                                }>
                                    {t(item.titleKey)}
                                </NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
};