import { type ReactNode } from "react";

import { socialNavigation } from "@/config/navigation.ts";
import { useTranslation } from "react-i18next";

type Props = {
  className?: string;
};

export const FooterAbout = ({ className = "" }: Props): ReactNode => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <div className="pt-4">
        <p>{t("footer.about")}</p>
      </div>
      <div className="flex gap-4 mt-4">
        {socialNavigation.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.titleKey}
              title={t(item.titleKey)}
              href={item.href}
              className="border rounded-full p-1 hover:text-accent hover:border-accent"
            >
              {IconComponent && <IconComponent className="w-6 h-6" />}
            </a>
          );
        })}
      </div>
    </div>
  );
};
