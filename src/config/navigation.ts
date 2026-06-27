import MingcuteGithub2Fill from "@/icons/MingcuteGithub2Fill.tsx";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill.tsx";

import type {
  FooterNavigationType,
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

export const FooterNavigation: FooterNavigationType[] = [
  {
    groupTitleKey: "footerNav.technology",
    items: [
      {
        titleKey: "footerNav.ai",
        href: "/category/ai",
      },
      {
        titleKey: "footerNav.software",
        href: "/category/software",
      },
      {
        titleKey: "footerNav.game",
        href: "/category/game",
      },
      {
        titleKey: "footerNav.security",
        href: "/category/security",
      },
    ],
  },
  {
    groupTitleKey: "footerNav.tutorial",
    items: [
      {
        titleKey: "footerNav.reactTutorial",
        href: "/category/react",
      },
      {
        titleKey: "footerNav.aiTutorial",
        href: "/category/ai",
      },
      {
        titleKey: "footerNav.linuxTutorial",
        href: "/category/linux",
      },
    ],
  },
  {
    groupTitleKey: "footerNav.usefulLinks",
    items: [
      {
        titleKey: "footerNav.home",
        href: "/",
      },
      {
        titleKey: "footerNav.aboutUs",
        href: "/aboutUs",
      },
      {
        titleKey: "footerNav.contactUs",
        href: "/contactUs",
      },
    ],
  },
];
