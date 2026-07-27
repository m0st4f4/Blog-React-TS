import type { ReactNode } from "react";

import { Copyright } from "@/components/Footer/components/Copyright/Copyright.tsx";
import { FooterAbout } from "@/components/Footer/components/FooterAbout/FooterAbout.tsx";
import { FooterNavigationBar } from "@/components/Footer/components/FooterNavigationBar/FooterNavigationBar.tsx";
import { SiteLogo } from "@/components/SiteLogo/SiteLogo.tsx";

export const Footer = (): ReactNode => {
  return (
    <footer>
      <div className="container py-12 mt-4 border-t  border-t-border">
        <div className="flex gap-4 justify-between">
          <div className="basis-1/4">
            <SiteLogo />
            <FooterAbout />
          </div>
          <FooterNavigationBar className="basis-3/4 flex gap-4" />
        </div>
      </div>
      <Copyright className="container text-center mt-4 border-t border-t-border py-4 text-sm" />
    </footer>
  );
};
