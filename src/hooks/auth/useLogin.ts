import useLoginMutation from "src/hooks/auth/useLoginMutation";
import { useState, ChangeEvent, FormEvent } from "react";
import { useAuth } from "src/context/authCtx";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { validateEmail } from "src/utils/register";
import Login from "src/types/auth/Longin";
const useLogin = () => {
  const [formData, setFormData] = useState<Login>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const { mutate, isPending } = useLoginMutation();
  const { login } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation("errors");

  const validatePassword = (password: string) => {
    if (!password.trim()) return t("requiredPassword");
    return "";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Instant validation
    if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(value, t),
      });
    } else if (name === "password") {
      setErrors({
        ...errors,
        password: validatePassword(value),
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailError = validateEmail(formData.email, t);
    const passwordError = validatePassword(formData.password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (emailError || passwordError) return;

    mutate(formData, {
      onSuccess: (data) => {
        login(data.user, data.token);
        navigate("/");
      },
      onError: (err: any) => {
        if (err.response.status === 400)
          setErrors((prev) => ({
            ...prev,
            email: t("register.invalidLogin"),
          }));
        return;
      },
    });
  };

  return { formData, errors, handleChange, handleSubmit, isPending };
};

export default useLogin;
