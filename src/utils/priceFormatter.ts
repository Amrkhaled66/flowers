import i18next from "i18next";

function priceFormatter(amount: any): string {
  const lang = i18next.language || "en";
  return new Intl.NumberFormat(`${lang}-AE`, {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(parseFloat(amount));
}

export default priceFormatter;
