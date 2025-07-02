import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const storedLang = localStorage.getItem("language") || "en";

import {
  HomeEn,
  LayoutEn,
  SignInEn,
  SignUpEn,
  errorsEn,
  forgetPasswordEn,
  profileEn,
  sharedEn,
  filterEn,
  successOrderEn,
  trackOrderEn,
  shippingBagEn,
  sharedCartEn,
  DeliveryInfoEn,
  ProductPageEn,
  ToastMessagesEn,
  AddedToCartModelEn,
  profileBreadcrumbsEn,
} from "src/locales/en";

import {
  HomeAr,
  LayoutAr,
  SignInAr,
  SignUpAr,
  errorsAr,
  forgetPasswordAr,
  profileAr,
  sharedAr,
  filterAr,
  successOrderAr,
  trackOrderAr,
  shippingBagAr,
  sharedCartAr,
  DeliveryInfoAr,
  ProductPageAr,
  ToastMessagesAr,
  AddedToCartModelAr,
  profileBreadcrumbsAr,
} from "src/locales/ar";

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
    sharedCart: sharedCartEn,
    deliveryInfo: DeliveryInfoEn,
    productPage: ProductPageEn,
    toast: ToastMessagesEn,
    addedToCartModel: AddedToCartModelEn,
    profileBreadcrumbs: profileBreadcrumbsEn,
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
    sharedCart: sharedCartAr,
    deliveryInfo: DeliveryInfoAr,
    productPage: ProductPageAr,
    toast: ToastMessagesAr,
    addedToCartModel: AddedToCartModelAr,
    profileBreadcrumbs: profileBreadcrumbsAr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
