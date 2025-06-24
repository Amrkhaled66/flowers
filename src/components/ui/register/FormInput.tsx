import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

import ueaFlag from "src/assets/ueaFlag.png";
interface FormInputProps<T> {
  label: string;
  type?: string;
  name: string;
  value: T;
  error?: string;
  required?: boolean;
  bgColor?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  min?: string;
  placeholder?: string;
  pattern?: string;
  inputmode?: "text" | "numeric" | "tel" | "email";
}

function FormInput<T>({
  label,
  type,
  name,
  value,
  error,
  onChange,
  required = false,
  bgColor = "bg-white",
  min,
  placeholder,
  onBlur,
  pattern,
  inputmode,
}: FormInputProps<T>) {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <div className="flex w-full flex-col items-start gap-y-3">
      <label htmlFor={name} className="text-text-main font-bold">
        {label} {required && <span className="text-red">*</span>}
      </label>
      <div className="w-full space-y-2">
        {type === "tel" ? (
          <div className="animate flex items-center gap-x-3 rounded-xl">
            {/* 🇦🇪 UAE Flag */}
            <div className="border-stroke flex items-center rounded-xl border bg-white p-2.5">
              <span className="text-xl">
                <img className="size-7" src={ueaFlag} alt="" />
              </span>
              <span className="text-sm text-gray-600">+971</span>
            </div>
            <input
              dir={language === "ar" ? "rtl" : "ltr"}
              onBlur={onBlur}
              required={required}
              type="tel"
              name={name}
              id={name}
              value={String(value || "")}
              onChange={onChange}
              placeholder={placeholder || "5xxxxxxxx"}
              inputMode={inputmode || "tel"}
              className={`border-stroke focus:border-main animate flex-1 rounded-xl border bg-white p-2.5`}
            />
          </div>
        ) : (
          <input
            dir={language === "ar" ? "rtl" : "ltr"}
            onBlur={onBlur}
            min={min}
            required={required}
            type={type}
            name={name}
            id={name}
            value={String(value || "")}
            onChange={onChange}
            placeholder={placeholder || label}
            pattern={pattern}
            inputMode={inputmode || "text"}
            className={` ${error ? "border-red" : "border-stroke focus:border-main"} ${bgColor} animate w-full rounded-xl border p-2.5 text-start`}
          />
        )}
        {error && <p className="text-red text-start text-xs">{error}</p>}
      </div>
    </div>
  );
}

export default FormInput;
