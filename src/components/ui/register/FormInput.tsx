import { ChangeEvent } from "react";

const FormInput = ({
  label,
  type,
  name,
  value,
  error,
  onChange,
  required = false,
}: {
  label: string;
  type: string;
  name: string;
  value: string;
  error: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col items-start gap-y-3">
      <label htmlFor={name} className="text-text-main font-bold">
        {label} {required && <span className="text-[#D00]">*</span>}
      </label>
      <div className="w-full space-y-2">
        <input
          required={required}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={` ${error ? "border-[#D00]" : "border-stroke focus:border-main"} animate w-full rounded-sm border p-2.5`}
        />
        {error && <p className="text-left text-xs text-[#D00]">{error}</p>}
      </div>
    </div>
  );
};

export default FormInput;
