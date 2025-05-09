import i18next from "i18next";

export const getLocalizedName = (item: {
  name_en: string;
  name_ar: string;
}): string => {
  const lang = i18next.language;
  return lang === "ar" ? item.name_ar : item.name_en;
};
