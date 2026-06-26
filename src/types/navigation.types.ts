import type { ComponentType } from "react";

type BaseNode = {
  titleKey: string;
  href: string;
  description?: string;
  icon?: ComponentType<{ className?: string }>;
};

export type TopNavigation = Pick<BaseNode, "titleKey" | "href">;
export type SocialNavigationType = Pick<BaseNode, "titleKey" | "href" | "icon">;
export type FooterNavigationType = {
  groupTitleKey: string;
  items: Pick<BaseNode, "titleKey" | "href">[];
};
