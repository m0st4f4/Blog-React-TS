import MingcuteGithub2Fill from "@/icons/MingcuteGithub2Fill.tsx";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill.tsx";

import type {
  FooterNavigationType,
  SocialNavigationType,
  TopNavigation,
} from "@/types/navigation.types.ts";

export const topNavigation: TopNavigation[] = [
  {
    titleKey: "nav.top.home",
    href: "/",
  },
  {
    titleKey: "nav.top.category",
    href: "/category",
  },
  {
    titleKey: "nav.top.aboutUs",
    href: "/aboutus",
  },
  {
    titleKey: "nav.top.contactUs",
    href: "/contactus",
  },
];

export const socialNavigation: SocialNavigationType[] = [
  {
    titleKey: "nav.social.linkedin",
    href: "https://www.linkedin.com/in/seyyed-mostafa-hosseini/",
    icon: MingcuteLinkedinFill,
  },
  {
    titleKey: "nav.social.github",
    href: "https://github.com/m0st4f4",
    icon: MingcuteGithub2Fill,
  },
];

export const FooterNavigation: FooterNavigationType[] = [
  {
    groupTitleKey: "nav.footer.technology" as const,
    items: [
      {
        titleKey: "nav.footer.ai" as const,
        href: "/category/ai",
      },
      {
        titleKey: "nav.footer.software" as const,
        href: "/category/software",
      },
      {
        titleKey: "nav.footer.game" as const,
        href: "/category/game",
      },
      {
        titleKey: "nav.footer.security" as const,
        href: "/category/security",
      },
    ],
  },
  {
    groupTitleKey: "nav.footer.tutorial" as const,
    items: [
      {
        titleKey: "nav.footer.reactTutorial" as const,
        href: "/category/react",
      },
      {
        titleKey: "nav.footer.aiTutorial" as const,
        href: "/category/ai",
      },
      {
        titleKey: "nav.footer.linuxTutorial" as const,
        href: "/category/linux",
      },
    ],
  },
  {
    groupTitleKey: "nav.footer.usefulLinks" as const,
    items: [
      {
        titleKey: "nav.footer.home" as const,
        href: "/",
      },
      {
        titleKey: "nav.footer.aboutUs" as const,
        href: "/aboutUs",
      },
      {
        titleKey: "nav.footer.contactUs" as const,
        href: "/contactUs",
      },
    ],
  },
];
