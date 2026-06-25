import locales from "@/locales";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const languages: Record<string, { nativeName: string }> = {
  en: { nativeName: "English" },
  fa: { nativeName: "فارسی" },
  ar: { nativeName: "العربية" },
};

const resources = {
  en: {
    translation: locales.en,
    locale: "en-US",
    calendar: "gregory",
  },
  fa: {
    translation: locales.fa,
    locale: "fa-IR",
    calendar: "persian",
  },
  ar: {
    translation: locales.ar,
    locale: "ar-SA",
    calendar: "islamic",
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
