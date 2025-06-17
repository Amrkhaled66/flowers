import { useState, ChangeEvent, FormEvent } from "react";
import { validatePassword } from "src/utils/register";
import { useTranslation } from "react-i18next";

import { useMutation } from "@tanstack/react-query";
import { changePassword } from "src/api/Auth";
import transformKeysToSnakeCase from "src/utils/transformToSnakeCase";
import Alert from "src/components/ui/Alert";
import { toast } from "react-toastify";
const useChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { t } = useTranslation("profile");
  const { t: tError } = useTranslation("errors");
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => {
      return await changePassword(transformKeysToSnakeCase(data));
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when typing
    setErrors({
      ...errors,
      [name]: "",
    });

    // Special case for confirmPassword
    if (name === "newPassword" && formData.confirmPassword) {
      validateConfirmPassword(value, formData.confirmPassword);
    }

    if (name === "confirmPassword") {
      validateConfirmPassword(formData.newPassword, value);
    }
  };

  const validateConfirmPassword = (
    newPassword: string,
    confirmPassword: string,
  ) => {
    if (newPassword !== confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    // Validate old password
    if (!formData.oldPassword.trim()) {
      newErrors.oldPassword = t("changePassword.formErros.requiredOldPassword");
      isValid = false;
    }

    // Validate new password
    if (!formData.newPassword.trim()) {
      newErrors.newPassword = t("changePassword.formErros.requiredNewPassword");
      isValid = false;
    } else if (validatePassword(formData.newPassword, t)) {
      newErrors.newPassword = validatePassword(formData.newPassword, tError);
      isValid = false;
    } else if (formData.newPassword === formData.oldPassword) {
      newErrors.newPassword = t("changePassword.formErros.passwordSameAsOld");
      isValid = false;
    }

    // Validate confirm password
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = t(
        "changePassword.formErros.requiredConfirmPassword",
      );
      isValid = false;
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = t(
        "changePassword.formErros.passwordMismatch",
      );
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const resetForm = () => {
    setFormData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setErrors({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;
    mutate(formData, {
      onSuccess: () => {
        resetForm();
        Alert({
          title: "Success",
          text: "Password Changed Successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
      },
      onError: (err: any) => {
        toast(err?.response?.data?.message, {
          type: "error",
        });
      },
    });
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isLoading: isPending,
  };
};

export default useChangePassword;
