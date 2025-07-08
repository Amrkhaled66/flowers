import {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
} from "src/utils/register";
import formatPhoneNumber from "src/utils/formatPhoneNumber";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRegister as useRegisterMutation } from "./useRegisterMutation";
import { useNavigate } from "react-router";
import { UserRegister, UserRegisterErrors } from "src/types/auth/User";
import { useAuth } from "src/context/authCtx";
import { useTranslation } from "react-i18next";

// import Alert from "src/components/ui/Alert";
export default function useRegister() {
  const [formData, setFormData] = useState<UserRegister>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    birth_date: "",
    gender: "",
    verified: 0,
    balance: "",
  });

  const [errors, setErrors] = useState<UserRegisterErrors>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    birth_date: "",
    gender: "",
    verified: "",
    balance: "",
  });

  const { login } = useAuth();
  const { mutate, isPending } = useRegisterMutation();
  const navigate = useNavigate();
  const { t } = useTranslation("errors");

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "first_name":
        return value.trim() ? "" : t("register.requiredFirstName");
      case "last_name":
        return value.trim() ? "" : t("register.requiredLastName");
      case "email":
        return validateEmail(value, t);
      case "password":
        return !value.trim()
          ? t("register.requiredPassword")
          : validatePassword(value, t);
      case "confirm_password":
        if (!value.trim()) return t("register.confirmPassword");
        if (value !== formData.password) return t("register.passwordMismatch");
        return "";
      case "phone_number":
        return validatePhoneNumber(value, t);
      case "gender":
        return value ? "" : t("register.requiredGender");
      default:
        return "";
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });

    // Special case for confirmPassword when password changes
    if (name === "password" && formData.confirm_password) {
      setErrors({
        ...errors,
        [name]: validateField(name, value),
        confirm_password:
          value !== formData.confirm_password
            ? t("register.passwordMismatch")
            : "",
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {} as UserRegisterErrors;
    let isValid = true;

    // Validate all fields
    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof UserRegister;
      const error = validateField(fieldName, String(formData[fieldName]));
      newErrors[fieldName] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    mutate(
      { ...formData, phone_number: formatPhoneNumber(formData.phone_number) },
      {
        onSuccess: (data) => {
          login(data.user, data.token);
          navigate("/")
          // navigate("/verify-account");
          // Alert({
          //   title: "Success",
          //   text: "Account created successfully",
          //   icon: "success",
          //   confirmButtonText: "Okay",
          // }).then(() => {
          //  ;
          //   // navigate("/");
          // });
        },

        onError: (err: any) => {
          const formattedErrors: { [key: string]: string } = {};

          Object.entries(err.response.data.errors).forEach(
            ([field, messages]) => {
              formattedErrors[field] = (messages as string[])[0];
            },
          );
          if (err.response.status === 400)
            setErrors((prev) => ({
              ...prev,
              ...formattedErrors,
            }));
          return;
        },
      },
    );
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isPending,
  };
}
