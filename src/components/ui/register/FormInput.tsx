import { ChangeEvent } from "react";

interface FormInputProps<T> {
  label: string;
  type: string;
  name: string;
  value: T;
  error: string;
  required?: boolean;
  bgColor?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  min?: string;
  placeholder?: string;
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
}: FormInputProps<T>) {
  return (
    <div className="flex flex-col items-start gap-y-3">
      <label htmlFor={name} className="text-text-main font-bold">
        {label} {required && <span className="text-[#D00]">*</span>}
      </label>
      <div className="w-full space-y-2">
        <input
          min={min}
          required={required}
          type={type}
          name={name}
          id={name}
          value={String(value)}
          onChange={onChange}
          placeholder={placeholder||label}
          className={` ${error ? "border-[#D00]" : "border-stroke focus:border-main"} ${bgColor} animate w-full rounded-xl border p-2.5`}
        />
        {error && <p className="text-left text-xs text-[#D00]">{error}</p>}
      </div>
    </div>
  );
}

export default FormInput;
