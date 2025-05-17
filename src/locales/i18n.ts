import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import HomeEn from "src/locales/en/HomePage.json";
import LayoutEn from "src/locales/en/Layout.json";
import SignInEn from "src/locales/en/signin.json";
import SignUpEn from "src/locales/en/signup.json";
import errorsEn from "src/locales/en/errors.json";
import forgetPasswordEn from "src/locales/en/forgetPassword.json";
import profileEn from "src/locales/en/profile.json"

import LayoutAr from "src/locales/ar/Layout.json";
import HomeAr from "src/locales/ar/HomePage.json";
import SignInAr from "src/locales/ar/signin.json";
import SignUpAr from "src/locales/ar/signup.json";
import errorsAr from "src/locales/ar/errors.json";
import forgetPasswordAr from "src/locales/ar/forgetPassword.json";
import profileAr from "src/locales/ar/profile.json"

const resources = {
  en: {
    home: HomeEn,
    layout: LayoutEn,
    signIn: SignInEn,
    signUp: SignUpEn,
    errors: errorsEn,
    forgetPassword: forgetPasswordEn,
    profile: profileEn
  },
  ar: {
    home: HomeAr,
    layout: LayoutAr,
    signIn: SignInAr,
    signUp: SignUpAr,
    errors: errorsAr,
    forgetPassword: forgetPasswordAr,
    profile: profileAr
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
