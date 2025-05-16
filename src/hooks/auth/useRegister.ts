import {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
} from "src/utils/register";

import { useState, ChangeEvent, FormEvent } from "react";
import useRegisterMutation from "./useRegisterMutation";
import { useNavigate } from "react-router";
import { UserRegister } from "src/types/auth/User";
import { useAuth } from "src/context/authCtx";
import { useTranslation } from "react-i18next";

import Alert from "src/components/ui/Alert";
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
  });

  const [errors, setErrors] = useState<UserRegister>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    birth_date: "",
    gender: "",
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
        return validateEmail(value,t);
      case "password":
        return validatePassword(value,t);
      case "confirm_password":
        if (!value.trim()) return t("register.confirmPassword");
        if (value !== formData.password) return t("register.passwordMismatch");
        return "";
      case "phone_number":
        return validatePhoneNumber(value,t);
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
          value !== formData.confirm_password ? t("register.passwordMismatch") : "",
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {} as UserRegister;
    let isValid = true;

    // Validate all fields
    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof UserRegister;
      const error = validateField(fieldName, formData[fieldName]);
      newErrors[fieldName] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    mutate(formData, {
      onSuccess: (data) => {
        login(data.user, data.token);
        Alert({
          title: "Success",
          text: "Account created successfully",
          icon: "success",
          confirmButtonText: "Okay",
        }).then(() => {
          navigate("/");
        });
      },
      onError: (err: any) => {
        if (err.response.status === 400)
          setErrors((prev) => ({
            ...prev,
            email: t("register.emailExists"),
          }));
        return;
      },
    });
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isPending,
  };
}
