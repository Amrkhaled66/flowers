import { validateEmail, validatePhoneNumber } from "src/utils/register";
import { useState, ChangeEvent, FormEvent } from "react";

import { FormDataType } from "src/types/UserInfo/EditProfileForm";
import { useTranslation } from "react-i18next";

import { useMutation } from "@tanstack/react-query";
import { updateProfileData } from "src/api/profile/profileData";
import { useAuth } from "src/context/authCtx";

import Alert from "src/components/ui/Alert";

const useEditProfile = () => {
  const { t: tErrors } = useTranslation("errors");
  const { t: tShared } = useTranslation("shared");
  const { t: tProfile } = useTranslation("profile");
  const { authData: { user } } = useAuth();
  const [formData, setFormData] = useState<FormDataType>({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    phone_number: user?.phone_number || "",
    birth_date: user?.birth_date || "",
    gender: user?.gender || "",
  });

  const [errors, setErrors] = useState<FormDataType>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    birth_date: "",
    gender: "",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () => updateProfileData(formData),
    onSuccess: () => {
      Alert({
        title: tShared("success"),
        text: tProfile("info.editForm.success"),
        icon: "success",
        confirmButtonText: "Okay",
      })
    },
    onError: (err: any) => {
      Alert({
        title: "Error",
        text: err.response.data.message,
        icon: "error",
        confirmButtonText: "Okay",
      })
    }
  })

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "first_name":
        return value.trim() ? "" : tErrors("register.requiredFirstName");
      case "last_name":
        return value.trim() ? "" : tErrors("register.requiredLastName");
      case "email":
        return validateEmail(value, tErrors);

      case "phone_number":
        return validatePhoneNumber(value, tErrors);
      case "gender":
        return value ? "" : tErrors("register.requiredGender");
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
  };

  const validateForm = (): boolean => {
    const newErrors = {} as FormDataType;
    let isValid = true;

    // Validate all fields
    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof FormDataType;
      const error = validateField(fieldName, formData[fieldName]);
      newErrors[fieldName] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      mutate();
    } else {
      console.log("Form has errors, please correct them");
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    FormData,
    isPending
  };
};

export default useEditProfile;
