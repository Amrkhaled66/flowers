import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  ComboboxButton,
  Label,
  Field,
} from "@headlessui/react";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
interface ComboBoxProps {
  bgColor?: string;
  onSelected: (value: string) => void;
  options: any[];
  label?: string;
  name: string;
  value:string
}

function ComboBox({
  bgColor = "bg-white",
  onSelected,
  options,
  label,
  name,
  value,
}: ComboBoxProps) {
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className={`w-full`}>
      <Field className="relative flex w-full flex-col space-y-3">
        <Label className="text-text-main font-bold">
          {label}: <span className="text-[#D00]">*</span>
        </Label>
        <Combobox
          as="div"
          className="relative w-full"
          name={name}
          value={value}
          onChange={onSelected}
          onClose={() => setQuery("")}
        >
          <div
            className={`flex ${bgColor} focus:border-main animate gap-2 rounded-xl border border-transparent`}
          >
            <ComboboxInput
              placeholder="Select Area"
              className="border-stroke w-full rounded-xl border p-2"
              aria-label="Area"
              displayValue={(option: any) => option}
              onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxButton className="absolute flex h-full w-full items-center justify-end rounded px-3">
              <Icon icon="iconamoon:arrow-down-2" width="24" height="24" />
            </ComboboxButton>
          </div>
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-white shadow-lg">
            {filteredOptions.map((option,index) => (
              <ComboboxOption
                key={`option ${index}`}
                value={option}
                className="ui-active:bg-blue-100 hover:bg-main-100 w-full cursor-pointer px-4 py-2"
              >
                {option}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </Field>
    </div>
  );
}

export default ComboBox;
