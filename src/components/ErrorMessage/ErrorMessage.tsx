import { type ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";

type Props = {
  className?: string;
  message?: string;
  onRetry?: () => void;
};

export const ErrorMessage = ({
  className = "",
  message,
  onRetry,
}: Props): ReactNode => {
  const { t } = useTranslation();
  return (
    <div className={cn(className, "flex flex-col items-center gap-2")}>
      <p className="text-center text-secondary-foreground  p-2">{message ?? t("error.message")}</p>
      <Button variant="secondary" onClick={onRetry} className="w-fit">
        {t("error.action.retry")}
      </Button>
    </div>
  );
};
