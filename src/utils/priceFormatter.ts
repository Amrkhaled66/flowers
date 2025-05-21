function priceFormatter(amount: any): string {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    minimumFractionDigits: 0,
  }).format(parseFloat(amount));
}

export default priceFormatter;
