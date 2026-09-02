import { type ReactNode } from "react";

import { Navigate, Outlet, useLocation } from "react-router";

import { useAuth } from "@/hooks/useAuth.ts";

import type { RoleType } from "@/types/user.types.ts";

type Props = {
  allowedRoles?: RoleType[];
  redirectPath?: string;
};

export const ProtectedRoute = ({
  allowedRoles,
  redirectPath = "/login",
}: Props): ReactNode => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
