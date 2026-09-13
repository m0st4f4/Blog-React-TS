import { createContext } from "react";

import type { AuthResponseType } from "@/services/userService.ts";

import type { UserType } from "@/types/user.types.ts";

type ContextValue = {
  isAuthenticated: boolean;
  user: UserType | null;
  login: (data: AuthResponseType) => void;
  logout: () => void;
};
export const AuthContext = createContext<ContextValue>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});
