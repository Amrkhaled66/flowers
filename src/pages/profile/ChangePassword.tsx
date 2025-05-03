import { useState, ChangeEvent, FormEvent } from "react";
import Button from "src/components/ui/Button";
// Reusable Password Input Component
interface PasswordInputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({
  label,
  name,
  placeholder,
  error,
  onChange,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-y-3">
      <label htmlFor={name}>{label}</label>
      <div className="relative bg-white">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex h-full items-center ps-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16 10.4298V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V10.4298M16 10.4298C14.9876 10.1268 13.6753 10 12 10C10.3247 10 9.01243 10.1268 8 10.4298M16 10.4298C18.2226 11.0952 19 12.6104 19 15.5C19 19.7059 17.3529 21 12 21C6.64706 21 5 19.7059 5 15.5C5 12.6104 5.77744 11.0952 8 10.4298"
              stroke="
#616161"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input
          placeholder={placeholder}
          onChange={onChange}
          className="placeholder:text-subTitle border-stroke animate focus:border-main h-full w-full rounded-xl border py-2.5 ps-10"
          type={showPassword ? "text" : "password"}
          name={name}
        />
        <div
          className="g absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.76379 5.29519C10.4662 5.10724 11.2121 5 11.9997 5C15.7571 5 18.5637 7.4404 20.2324 9.43934C21.4845 10.9394 21.4844 13.0609 20.2322 14.5609C20.0403 14.7907 19.8334 15.0264 19.6117 15.2635M12.4998 9.04148C13.756 9.25224 14.7475 10.2437 14.9583 11.5M2.99976 3L20.9998 21M11.4998 14.9585C10.4156 14.7766 9.5286 14.0132 9.17047 13M4.3489 8.77822C4.14189 9.00124 3.94797 9.22274 3.76737 9.43907C2.51518 10.9391 2.51498 13.0606 3.76715 14.5607C5.4358 16.5596 8.24239 19 11.9998 19C12.8019 19 13.5606 18.8888 14.2742 18.6944"
                stroke="#616161"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                stroke="#616161"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                stroke="#616161"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

// Change Password Form Component
const ChangePassword = () => {
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

  return (
    <form onSubmit={handleSubmit} className="mx-auto p-6">
      <div className="space-y-6">
        <PasswordInput
          label="Old Password"
          name="oldPassword"
          placeholder="Enter old password"
          value={formData.oldPassword}
          error={errors.oldPassword}
          onChange={handleChange}
        />
        <div className="grid grid-cols-2 gap-5">
          <PasswordInput
            label="New Password"
            name="newPassword"
            placeholder="Enter new password"
            value={formData.newPassword}
            error={errors.newPassword}
            onChange={handleChange}
          />

          <PasswordInput
            label="Confirm New Password"
            name="confirmPassword"
            placeholder="Confirm new password"
            value={formData.confirmPassword}
            error={errors.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-8">
        <Button
          text=" Update Password"
          // type="submit"
          className="bg-main w-full !py-3 text-lg font-bold text-white transition-colors"
        ></Button>
      </div>
    </form>
  );
};

export default ChangePassword;
