import type { ReactNode } from "react";

import { Link } from "react-router";

import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

export const NotFoundPage = (): ReactNode => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-auto">
      <h1 className="text-6xl">404</h1>
      <h2 className="text-4xl">{t("notFoundPage.heading")}</h2>
      <p className="text-base">{t("notFoundPage.description")}</p>
      <Button asChild>
        <Link to="/">{t("notFoundPage.backToHome")}</Link>
      </Button>
    </div>
  );
};
