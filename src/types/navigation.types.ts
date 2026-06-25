import type { ReactNode } from "react";

import type { Path } from "react-router";

type BaseNode = {
  titleKey: string;
  href: string | Partial<Path>;
  isExternal: false;
  description?: string;
  icon?: ReactNode;
};

export type TopNavigation = Pick<BaseNode, "titleKey" | "href">;
