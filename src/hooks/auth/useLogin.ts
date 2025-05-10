import { useState, ChangeEvent, FormEvent } from "react";
import useLoginMutation from "src/hooks/auth/useLoginMutation";
import { useAuth } from "src/context/authCtx";
import { useNavigate } from "react-router-dom";

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

  const validatePassword = (password: string) => {
    if (!password.trim()) return "Password is required";
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
        email: validateEmail(value),
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

    const emailError = validateEmail(formData.email);
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
            email: "Error in Email or Password",
          }));
        return;
      },
    });
  };

  return { formData, errors, handleChange, handleSubmit, isPending };
};

export default useLogin;
