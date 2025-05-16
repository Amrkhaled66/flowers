import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

interface RadioInputProps {
  label: string;
  name: string;
  options: { value: string; labelEn: string; labelAr: string }[];
  selectedValue: string;
  required?: boolean;
  error: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const GenderButton = ({
  label,
  name,
  options,
  selectedValue,
  required = false,
  error,
  onChange,
}: RadioInputProps) => {
  const {
    i18n: { language },
  } = useTranslation();

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
              {language === "en" ? option.labelEn : option.labelAr}
            </label>
          </div>
        ))}
      </div>
      {error && <p className="text-left text-xs text-[#D00]">{error}</p>}
    </div>
  );
};

export default GenderButton;
