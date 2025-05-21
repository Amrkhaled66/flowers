import i18next from "i18next";

export const getLocalizedName = (
  item: {
    nameAr: string;
    nameEn: string;
  },
  language?: string,
): string => {
  const lang = language || i18next.language;
  return lang === "ar" ? item.nameAr : item.nameEn;
};
