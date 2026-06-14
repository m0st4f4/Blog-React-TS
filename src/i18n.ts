import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import locales from "@/locales";

export const languages: Record<string, { nativeName: string }> = {
    en: {nativeName: 'English'},
    fa: {nativeName: 'فارسی'},
    ar: {nativeName: 'العربية'}
};

const resources = {
    en: {
        translation: locales.en
    },
    fa: {
        translation: locales.fa
    },
    ar: {
        translation: locales.ar
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;