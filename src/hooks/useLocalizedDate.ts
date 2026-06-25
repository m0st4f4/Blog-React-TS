import { formatUserDate } from "@/lib/formatDate.ts";
import i18n from "i18next";

export const useLocalizedDate = () => {
  const currentLanguage = i18n.language;
  const calendar =
    i18n.getDataByLanguage(currentLanguage)?.calendar || "persian";
  const locale = i18n.getDataByLanguage(currentLanguage).locale || "fa-IR";

  const formatDate = (
    date: Date | string | number,
    dateStyle: "full" | "long" | "medium" | "short",
  ) => {
    return formatUserDate(date, { locale, calendar, dateStyle });
  };
  return { formatDate };
};
