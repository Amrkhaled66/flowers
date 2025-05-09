import { useState, ChangeEvent, FormEvent } from "react";



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
      newErrors.oldPassword = "Old password is required";
      isValid = false;
    }

    // Validate new password
    if (!formData.newPassword.trim()) {
      newErrors.newPassword = "New password is required";
      isValid = false;
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
      isValid = false;
    } else if (formData.newPassword === formData.oldPassword) {
      newErrors.newPassword =
        "New password must be different from old password";
      isValid = false;
    }

    // Validate confirm password
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Password change form submitted:", formData);
      // Here you would typically call an API to update the password
      alert("Password changed successfully!");
      // Reset form
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useChangePassword;
