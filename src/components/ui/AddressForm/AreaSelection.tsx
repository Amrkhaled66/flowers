import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  ComboboxButton,
  Label,
  Field,
} from "@headlessui/react";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import areas from "src/data/UAEAreas";
import Area from "src/types/UserInfo/Area";

import { useTranslation } from "react-i18next";
interface AreaSelectionProps {
  bgColor?: string;
  onAreaSelected: (area: string) => void;
  defaultValue?: string;
  error?: string;
  isAddressForm?: boolean;
}

function AreaSelection({
  bgColor = "bg-white",
  onAreaSelected,
  defaultValue,
  error,
  isAddressForm,
}: AreaSelectionProps) {
  const {
    i18n: { language },
  } = useTranslation();
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filteredAreas =
    query === ""
      ? areas
      : areas.filter((area: Area) => {
          return area.name.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    if (selectedArea) {
      onAreaSelected(selectedArea);
    }
  }, [selectedArea]);

  useEffect(() => {
    if (defaultValue) {
      setSelectedArea(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className={`w-full`}>
      <Field className="relative flex w-full flex-col space-y-3">
        <Label className="text-text-main font-bold">
          {language === "ar" ? "المنطقة" : "Area"} :{" "}
          <span className="text-[#D00]">*</span>
        </Label>
        <Combobox
          as="div"
          className="relative w-full"
          value={selectedArea}
          onChange={setSelectedArea}
          onClose={() => setQuery("")}
        >
          <div className="flex flex-col gap-y-1">
            <div
              className={`flex ${isAddressForm ? "bg-white" : "bg-main-50"} lg:${bgColor} relative gap-2 rounded-xl`}
            >
              <ComboboxInput
                placeholder={language === "ar" ? "اختر المنطقة" : "Select Area"}
                className={`focus:border-main ${error && "!border-red"} animate w-full rounded-xl border border-transparent p-2`}
                aria-label="Area"
                displayValue={(area: string) => area || ""}
                onChange={(event) => setQuery(event.target.value)}
              />
              <ComboboxButton className="absolute flex h-full w-full items-center justify-end rounded px-3">
                <Icon icon="iconamoon:arrow-down-2" width="24" height="24" />
              </ComboboxButton>
            </div>
            <p className="text-red px-2 text-xs">{error}</p>
          </div>
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-white shadow-lg">
            {filteredAreas.map((area) => (
              <ComboboxOption
                key={area.id}
                value={area.name}
                className="ui-active:bg-blue-100 hover:bg-main-100 w-full cursor-pointer px-4 py-2"
              >
                {area.name}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </Field>
    </div>
  );
}

export default AreaSelection;
