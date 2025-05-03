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

interface Area {
  id: number;
  name: string;
}

interface AreaSelectionProps {
  bgColor?: string;
  onAreaSelected: (area: Area) => void;
}

const areas = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

function AreaSelection({ bgColor = "bg-white", onAreaSelected }: AreaSelectionProps) {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [query, setQuery] = useState("");

  const filteredAreas =
    query === ""
      ? areas
      : areas.filter((area) => {
          return area.name.toLowerCase().includes(query.toLowerCase());
        });


  useEffect(() => {
    if (selectedArea) {
      onAreaSelected(selectedArea);
    }
  }, [selectedArea, onAreaSelected]);

  return (
    <div className={`w-full`}>
      <Field className="relative flex w-full flex-col space-y-3">
        <Label className="text-text-main font-bold">Area: <span className="text-[#D00]">*</span></Label>
        <Combobox
          as="div"
          className="relative w-full"
          value={selectedArea}
          onChange={setSelectedArea}
          onClose={() => setQuery("")}
        >
          <div
            className={`flex ${bgColor} focus:border-main animate gap-2 rounded-xl border border-transparent`}
          >
            <ComboboxInput
              placeholder="Select Area"
              className="w-full p-2"
              aria-label="Area"
              displayValue={(area: Area) => area?.name || ""}
              onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxButton className="absolute flex h-full w-full items-center justify-end rounded px-3">
              <Icon icon="iconamoon:arrow-down-2" width="24" height="24" />
            </ComboboxButton>
          </div>
          <ComboboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white shadow-lg z-10">
            {filteredAreas.map((area) => (
              <ComboboxOption
                key={area.id}
                value={area}
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