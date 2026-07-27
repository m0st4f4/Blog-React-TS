import type { ReactNode } from "react";

import { Outlet } from "react-router";

import { Footer } from "@/components/Footer/Footer.tsx";
import { Header } from "@/components/Header/Header.tsx";

export const RootLayout = (): ReactNode => {
  return (
    <div>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
