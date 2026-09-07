import { type PropsWithChildren, type ReactNode, useState } from "react";

import type { ResponseUserType } from "@/services/userService";

import { AuthContext } from "@/context/auth-context.ts";

import type { UserType } from "@/types/user.types.ts";

type Props = PropsWithChildren;
export const AuthProvider = ({ children }: Props): ReactNode => {
  const [user, setUser] = useState<UserType | null>(
    JSON.parse(localStorage.getItem("user") || "null"),
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("isAuthenticated") === "true",
  );

  const login = (data: ResponseUserType) => {
    setUser(data.user);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return (
    <AuthContext value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext>
  );
};
