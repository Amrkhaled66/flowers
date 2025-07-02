function formatPhoneNumber(localPhone: string, prefix = "20") {
  return `${prefix}${localPhone.trim().replace(/^0+/, "")}`;
}
export default formatPhoneNumber;