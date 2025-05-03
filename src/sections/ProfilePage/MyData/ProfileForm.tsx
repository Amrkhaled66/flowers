import { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "src/components/ui/register/FormInput";
import {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
} from "src/helpers/registerHelpers";

interface RadioInputProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  required?: boolean;
  error: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = ({
  label,
  name,
  options,
  selectedValue,
  required = false,
  error,
  onChange,
}: RadioInputProps) => {
  return (
    <div className="mb-4 flex flex-col items-start gap-y-3">
      <label className="text-text-main mb-1 font-bold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex gap-x-6">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
              required={required}
              className="accent-text-main mr-2"
            />
            <label
              htmlFor={`${name}-${option.value}`}
              className="text-text-main"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="text-left text-xs text-[#D00]">{error}</p>}
    </div>
  );
};

// export default RadioInput;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  gender: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  gender: string;
}

const ProfileForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if (name === "password" && formData.confirmPassword) {
      setErrors({
        ...errors,
        [name]: validateField(name, value),
        confirmPassword:
          value !== formData.confirmPassword ? "Passwords do not match" : "",
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {} as FormErrors;
    let isValid = true;

    // Validate all fields
    Object.keys(formData).forEach((key) => {
      const fieldName = key as keyof FormData;
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

  const formFields = [
    {
      layout: "block",
      fields: [{ label: "Email", type: "email", name: "email" }],
    },
    {
      layout: "inline",
      fields: [
        { label: "First Name", type: "text", name: "firstName" },
        { label: "Last Name", type: "text", name: "lastName" },
      ],
    },
    {
      layout: "block",
      fields: [{ label: "Password", type: "password", name: "password" }],
    },
    {
      layout: "block",
      fields: [
        {
          label: "Confirm Password",
          type: "password",
          name: "confirmPassword",
        },
      ],
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="!text-text-main space-y-5">
        {formFields.map((fieldGroup) => (
          <div className={`${fieldGroup.layout==="inline" ? "grid grid-cols-2 gap-x-4" : ""}`}>
            {fieldGroup.fields.map((field) => (
              <FormInput
                label={field.label}
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof FormData]}
                error={errors[field.name as keyof FormErrors]}
                onChange={handleChange}
              />
            ))}
          </div>
        ))}

        <RadioInput
          label="Gender"
          name="gender"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          selectedValue={formData.gender}
          error={errors.gender}
          onChange={handleChange}
        />
      </div>
      <div className="mt-8 flex flex-col justify-center gap-y-4">
        <button
          type="submit"
          className="bg-main hover:bg-main-300 text-white text-text-main w-full rounded-xl py-3 font-bold transition-colors"
        >
          Save changes
        </button>
    
      </div>
    </form>
  );
};

export default ProfileForm;
