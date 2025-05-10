import {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
} from "src/utils/register";

import { useState, ChangeEvent, FormEvent } from "react";
import useRegisterMutation from "./useRegisterMutation";
import { useNavigate } from "react-router";

import { UserRegister } from "src/types/auth/User";
import Alert from "src/components/ui/Alert";
import { useAuth } from "src/context/authCtx";

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
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "firstName":
        return value.trim() ? "" : "First name is required";
      case "lastName":
        return value.trim() ? "" : "Last name is required";
      case "email":
        return validateEmail(value);
      case "password":
        return validatePassword(value);
      case "confirmPassword":
        if (!value.trim()) return "Please confirm your password";
        if (value !== formData.password) return "Passwords do not match";
        return "";
      case "phoneNumber":
        return validatePhoneNumber(value);
      case "gender":
        return value ? "" : "Please select your gender";
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
          value !== formData.confirm_password ? "Passwords do not match" : "",
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
            email: "Error in Email or Password",
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
