import CheckboxList from "src/components/FilterPage/FilterBar/CheckboxList";
import ColorSelector from "src/components/FilterPage/FilterBar/ColorSelector";
import PriceRange from "src/components/FilterPage/FilterBar/PriceRange";
import BarSection from "src/components/FilterPage/FilterBar/BarSection";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import useScrollLock from "src/hooks/ui/useScrollLock";

import { Icon } from "@iconify/react/dist/iconify.js";

type SidebarProps = {
  sidebarOpen: boolean;
  closeSidebar: () => void;
  categories: any[];
  occasions: any[];
  onOptionChange: (key: string, value: number) => void;
  handlePriceRangeChange: (value: number[]) => void;
  onSubmit: () => void;
  options: {
    category_ids: number[];
    occasion_ids: number[];
    color_ids: number[];
    price_range: number[];
  };
  loading: boolean;
  colors: { id: number; name: string; code: string }[];
};

const FilterBar = ({
  sidebarOpen,
  closeSidebar,
  categories,
  occasions,
  colors,
  onOptionChange,
  handlePriceRangeChange,
  onSubmit,
  options,
  loading,
}: SidebarProps) => {
  const { t } = useTranslation("filter");
  const [openSections, setOpenSections] = useState<string[]>([
    "category",
    "occasion",
    "color",
  ]);
  useScrollLock(sidebarOpen);
  const handleToggle = (section: string) => {
    if (openSections.includes(section)) {
      setOpenSections(openSections.filter((item) => item !== section));
    } else {
      setOpenSections([...openSections, section]);
    }
  };

  return (
    <div
      className={`lg:bg-main-50 fixed top-0 z-90 h-screen w-[314px] bg-white px-4 py-[50px] transition-all duration-300 lg:!relative lg:end-0 lg:z-40 lg:h-auto lg:w-[25%] lg:rounded-xl lg:p-0 ${
        sidebarOpen ? "end-0" : "end-[-150%]"
      } lg:!translate-x-0`}
    >
      <button
        className="text-main-900 bg-main absolute end-1 top-1 flex h-[36px] w-[36px] items-center justify-center rounded-xl text-2xl text-white lg:hidden"
        onClick={closeSidebar}
      >
        <Icon icon="ic:outline-close" width="20" height="20" />
      </button>

      {/* Scrollable container */}
      <div className="h-full overflow-y-auto lg:h-auto">
        {loading ? (
          <Skeleton className="!h-screen" />
        ) : (
          <div className="bg-main-50 space-y-6 rounded-xl p-4">
            <div className="space-y-4">
              <BarSection
                onClick={() => handleToggle("category")}
                isOpen={openSections.includes("category")}
                className="border-b-stroke border-b pb-4"
                title={t("category")}
              >
                <CheckboxList
                  onOptionChange={onOptionChange}
                  field={"category_ids"}
                  items={categories}
                  selectedValues={options.category_ids}
                />
              </BarSection>

              <PriceRange handlePriceRangeChange={handlePriceRangeChange} />
            </div>

            <BarSection
              onClick={() => handleToggle("occasion")}
              isOpen={openSections.includes("occasion")}
              title={t("occasion")}
            >
              <CheckboxList
                onOptionChange={onOptionChange}
                field={"occasion_ids"}
                items={occasions}
                selectedValues={options.occasion_ids}
              />
            </BarSection>

            <BarSection
              onClick={() => handleToggle("color")}
              isOpen={openSections.includes("color")}
              title={t("color")}
            >
              <ColorSelector
                appliedColors={options.color_ids}
                onOptionChange={onOptionChange}
                colors={colors}
              />
            </BarSection>

            <button
              onClick={onSubmit}
              className="bg-main animate hover:bg-main-300 h-[43px] w-full rounded-xl text-lg font-semibold text-white lg:h-[60px]"
            >
              {t("apply")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
