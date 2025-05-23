import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import HomeEn from "src/locales/en/HomePage.json";
import LayoutEn from "src/locales/en/Layout.json";
import SignInEn from "src/locales/en/signin.json";
import SignUpEn from "src/locales/en/signup.json";
import errorsEn from "src/locales/en/errors.json";
import forgetPasswordEn from "src/locales/en/forgetPassword.json";
import profileEn from "src/locales/en/profile.json";
import sharedEn from "src/locales/en/shared.json";
import filterEn from "src/locales/en/filter.json";
import successOrderEn from "src/locales/en/successOrder.json";
import trackOrderEn from "src/locales/en/trackOrder.json";
import shippingBagEn from "src/locales/en/shippingBag.json";
import sharedCartEn from "src/locales/en/sharedCart.json";

import LayoutAr from "src/locales/ar/Layout.json";
import HomeAr from "src/locales/ar/HomePage.json";
import SignInAr from "src/locales/ar/signin.json";
import SignUpAr from "src/locales/ar/signup.json";
import errorsAr from "src/locales/ar/errors.json";
import forgetPasswordAr from "src/locales/ar/forgetPassword.json";
import profileAr from "src/locales/ar/profile.json";
import sharedAr from "src/locales/ar/shared.json";
import filterAr from "src/locales/ar/filter.json";
import successOrderAr from "src/locales/ar/successOrder.json";
import trackOrderAr from "src/locales/ar/trackOrder.json";
import shippingBagAr from "src/locales/ar/shippingBag.json";
import sharedCartAr from "src/locales/ar/sharedCart.json";

const resources = {
  en: {
    home: HomeEn,
    layout: LayoutEn,
    signIn: SignInEn,
    signUp: SignUpEn,
    errors: errorsEn,
    forgetPassword: forgetPasswordEn,
    profile: profileEn,
    shared: sharedEn,
    filter: filterEn,
    successOrder: successOrderEn,
    trackOrder: trackOrderEn,
    shippingBag: shippingBagEn,
    sharedCart: sharedCartEn
  },
  ar: {
    home: HomeAr,
    layout: LayoutAr,
    signIn: SignInAr,
    signUp: SignUpAr,
    errors: errorsAr,
    forgetPassword: forgetPasswordAr,
    profile: profileAr,
    shared: sharedAr,
    filter: filterAr,
    successOrder: successOrderAr,
    trackOrder: trackOrderAr,
    shippingBag: shippingBagAr,
    sharedCart: sharedCartAr
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
