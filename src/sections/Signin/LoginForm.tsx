import { useState, ChangeEvent, FormEvent } from "react";

import { Link } from "react-router-dom";
import FormInput from "src/components/ui/register/FormInput";

import { validateEmail } from "src/helpers/registerHelpers";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

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

    // Final validation before submission
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    setErrors({
      email: emailError,
      password: passwordError,
    });

    // If no errors, proceed with login
    if (!emailError && !passwordError) {
      console.log("Form submitted:", formData);
      // Submit logic would go here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="space-y-5">
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <div className="flex justify-between">
          <p className="text-main font-bold"> forgot password?</p>
        </div>
        <button
          type="submit"
          className="bg-main text-text-main animate hover:bg-main-600 mt-8 w-full rounded-sm py-3 text-lg font-bold"
        >
          Login
        </button>
        <div className="mt-4 flex w-full justify-center gap-x-2">
          <p className="text-text-main">Don't have an account?</p>
          <Link to="/signup">
            <p className="text-main font-bold">Create Account?</p>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
