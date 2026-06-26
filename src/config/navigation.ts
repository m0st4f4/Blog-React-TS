import MingcuteGithub2Fill from "@/icons/MingcuteGithub2Fill.tsx";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill.tsx";

import type {
  SocialNavigationType,
  TopNavigation,
} from "@/types/navigation.types.ts";

export const topNavigation: TopNavigation[] = [
  {
    titleKey: "topnav.home",
    href: "/",
  },
];

export const socialNavigation: SocialNavigationType[] = [
  {
    titleKey: "socialnav.linkedin",
    href: "https://www.linkedin.com/in/seyyed-mostafa-hosseini/",
    icon: MingcuteLinkedinFill,
  },
  {
    titleKey: "socialnav.github",
    href: "https://github.com/m0st4f4",
    icon: MingcuteGithub2Fill,
  },
];
