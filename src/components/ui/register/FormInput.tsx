import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

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
}: FormInputProps<T>) {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <div className="flex w-full flex-col items-start gap-y-3">
      <label htmlFor={name} className="text-text-main font-bold">
        {label} {required && <span className="text-[#D00]">*</span>}
      </label>
      <div className="w-full space-y-2">
        <input
          dir={language === "ar" ? "rtl" : "ltr"}
          onBlur={onBlur}
          min={min}
          required={required}
          type={type}
          name={name}
          id={name}
          value={String(value)}
          onChange={onChange}
          placeholder={placeholder || label}
          pattern={pattern}
          className={` ${error ? "border-[#D00]" : "border-stroke focus:border-main"} ${bgColor} animate w-full rounded-xl border p-2.5 !text-start`}
        />
        {error && <p className="text-start text-xs text-[#D00]">{error}</p>}
      </div>
    </div>
  );
}

export default FormInput;
