const validateEmail = (email: string, t: (key: string) => string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return t("register.requiredEmail");
  if (!emailRegex.test(email)) return t("register.emailFormat");
  return "";
};

const validatePassword = (password: string, t: (key: string) => string) => {
  if (!password.trim()) return t("register.requiredPassword");
  if (password.length < 6) return t("register.passwordLength");
  if (!/(?=.*[A-Z])/.test(password)) return t("register.passwordUppercase");
  if (!/(?=.*\d)/.test(password)) return t("register.passwordNumber");
  return "";
};

const validatePhoneNumber = (
  phoneNumber: string,
  t: (key: string) => string,
) => {
  const regex = /^971(50|52|54|55|56)\d{7}$/;
  if (!phoneNumber.trim()) return t("register.requiredPhone");
  if (!regex.test(phoneNumber.replace(/\s+/g, "")))
    return t("register.phoneFormat");
  return "";
};

export { validateEmail, validatePassword, validatePhoneNumber };
