import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import HomeEn from "src/locales/en/HomePage.json";
import LayoutEn from "src/locales/en/Layout.json";

import LayoutAr from "src/locales/ar/Layout.json";
import HomeAr from "src/locales/ar/HomePage.json";

const resources = {
  en: {
    home: HomeEn,
    layout: LayoutEn,
  },
  ar: {
    home: HomeAr,
    layout: LayoutAr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
