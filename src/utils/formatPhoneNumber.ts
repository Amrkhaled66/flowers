function formatPhoneNumber(localPhone: string, prefix = "971") {
  if (localPhone.startsWith("2")) return localPhone;
  return `${prefix}${localPhone.trim().replace(/^0+/, "")}`;
}
export default formatPhoneNumber;
