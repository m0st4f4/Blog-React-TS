import { type ReactNode } from "react";

import { Outlet } from "react-router";

import { Sidebar } from "@/components/Sidebar/Sidebar.tsx";

export const SidebarLayout = (): ReactNode => {
  return (
    <div className="container grid gap-4 pt-12 md:grid-cols-4">
      <div className="col-span-full md:col-span-3">
        <Outlet />
      </div>
      <div className="col-span-full md:col-span-1 ">
        <Sidebar />
      </div>
    </div>
  );
};
