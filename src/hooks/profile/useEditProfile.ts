import { validateEmail, validatePhoneNumber } from "src/utils/register";
import { useState, ChangeEvent, FormEvent } from "react";

import { FormDataType, FormErrors } from "src/types/UserInfo/EditProfileForm";

const useEditProfile = () => {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "firstName":
        return value.trim() ? "" : "First name is required";
      case "lastName":
        return value.trim() ? "" : "Last name is required";
      case "email":
        return validateEmail(value);

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
  };

  const validateForm = (): boolean => {
    const newErrors = {} as FormErrors;
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
      console.log("Form submitted successfully:", formData);
      // Submit to your API here
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
  };
};

export default useEditProfile;
