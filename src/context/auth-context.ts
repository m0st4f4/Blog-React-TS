import { createContext } from "react";

import type { ResponseUserType } from "@/services/userService.ts";

import type { UserType } from "@/types/user.types.ts";

type ContextValue = {
  isAuthenticated: boolean;
  user: UserType | null;
  login: (data: ResponseUserType) => void;
  logout: () => void;
};
export const AuthContext = createContext<ContextValue>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});
