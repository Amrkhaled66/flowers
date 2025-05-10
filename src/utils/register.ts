const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim()) return "Email is required";
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return "";
};

const validatePassword = (password: string) => {
  if (!password.trim()) return "Password is required";
  if (password.length < 6) return "Password must be at least 8 characters";
  if (!/(?=.*[A-Z])/.test(password))
    return "Password must contain at least one uppercase letter";
  if (!/(?=.*\d)/.test(password))
    return "Password must contain at least one number";
  return "";
};

const validatePhoneNumber = (phoneNumber: string) => {
  const regex = /^971(50|52|54|55|56)\d{7}$/;
  if (!phoneNumber.trim()) return "Phone number is required";
  if (!regex.test(phoneNumber.replace(/\s+/g, "")))
    return "Please enter a valid phone number";
  return "";
};

export { validateEmail, validatePassword, validatePhoneNumber };
