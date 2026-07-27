import type { ReactNode } from "react";

import { topNavigation } from "@/config/navigation.ts";

import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher.tsx";
import { Navbar } from "@/components/Navbar/Navbar.tsx";
import { SearchForm } from "@/components/SearchForm/SearchForm.tsx";
import { SiteLogo } from "@/components/SiteLogo/SiteLogo.tsx";
import { SocialNavigation } from "@/components/SocialNavigation/SocialNavigation.tsx";

import { UserMenu } from "../UserMenu/UserMenu";

export const Header = (): ReactNode => {
  return (
    <header className="py-5">
      <div className="container pb-2.5 flex items-center justify-between">
        <SiteLogo />
        <div className="flex items-center justify-center gap-2">
          <SocialNavigation className="flex gap-2" iconClass="w-4 h-4" />
          <SearchForm />
          <LanguageSwitcher />
          <UserMenu />
        </div>
      </div>

      <div className="p-4 shadow-xs">
        <div className="container">
          <Navbar menuItems={topNavigation} />
        </div>
      </div>
    </header>
  );
};
