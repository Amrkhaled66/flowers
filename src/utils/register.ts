import i18n from "i18next";

const validateEmail = (email: string, t: (key: string) => string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return t("register.requiredEmail");
  if (!emailRegex.test(email)) return t("register.emailFormat");
  return "";
};

const validatePassword = (password: string, t: (key: string) => string) => {
  if (password.length < 6) return t("register.passwordLength");
  if (!/(?=.*[A-Z])/.test(password)) return t("register.passwordUppercase");
  if (!/(?=.*\d)/.test(password)) return t("register.passwordNumber");
  return "";
};

const PhoneError = i18n.t("errors:register:phoneFormat");
const requiredPhone = i18n.t("errors:register:requiredPhone");
const validatePhoneNumber = (
  phoneNumber: string,
  t?: (key: string) => string,
) => {
// const regex = /^(?:0)?(50|51|52|54|55|56|58)\d{7}$/;
  const regex = /^(20|0)?1[0125][0-9]{8}$/;

  if (!phoneNumber.trim()) return t ? t("register.requiredPhone") : PhoneError;
  if (!regex.test(phoneNumber.replace(/\s+/g, "")))
    return t ? t("register.phoneFormat") : requiredPhone;
  return "";
};

export { validateEmail, validatePassword, validatePhoneNumber };
