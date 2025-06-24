import getPriceSlots from "src/utils/getPriceSlots";
import BarSection from "./BarSection";
import { useTranslation } from "react-i18next";
import priceFormatter from "src/utils/priceFormatter";
const PriceSelectors = ({
  handleToggle,
  openSections,
  maxPrice,
  onChange,
  selectedValues,
}: {
  handleToggle: (section: string) => void;
  openSections: string[];
  maxPrice: number;
  onChange: (min: number, max: number) => void;
  selectedValues?: number[];
}) => {
  const { t } = useTranslation("filter");
  const priceSlots = getPriceSlots(maxPrice);
  return (
    <BarSection
      onClick={() => handleToggle("color")}
      isOpen={openSections.includes("color")}
      title={t("price")}
    >
      <div className="flex flex-wrap gap-x-2 gap-y-4">
        {priceSlots.map((item, index) => {
          const isActive = selectedValues?.includes(item.min) && selectedValues?.includes(item.max);
          return (
            <button
              key={index}
              onClick={() => onChange(item.min, item.max)}
              className={`border-main text-main animate inline-flex items-center justify-between rounded-xl border px-2 py-1 text-sm ${isActive && "bg-main text-white"}`}
            >
              {priceFormatter(item.min)} - {item.max}
            </button>
          );
        })}
      </div>
    </BarSection>
  );
};

export default PriceSelectors;
