import { Range } from "react-range";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useDebounce from "src/hooks/shared/useDebounce";
const PriceRange = ({
  handlePriceRangeChange,
}: {
  handlePriceRangeChange: (value: number[]) => void;
}) => {
  const { t } = useTranslation("filter");
  const [priceRange, setPriceRange] = useState<number[]>([0, 9999]);

  const depouncedChange = useDebounce(
    () => handlePriceRangeChange(priceRange),
    1000,
  );
  const handleChange = (value: number[]) => {
    setPriceRange(value);
    depouncedChange();
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-x-2 text-sm">
        {t("price")}
        <span className="mr-l text-main block font-semibold">
          ${priceRange[0]} - ${priceRange[1]}
        </span>
      </div>

      <Range
        step={1}
        min={0}
        max={9999}
        values={priceRange}
        onChange={handleChange}
        renderTrack={({ props, children }) => {
          const [minVal, maxVal] = priceRange;
          const percentageLeft = (minVal / 9999) * 100;
          const percentageRight = (maxVal / 9999) * 100;

          return (
            <div
              dir="ltr"
              {...props}
              className="relative h-2 w-full rounded"
              style={{
                background: `linear-gradient(
                to right,
                #ccc 0%, 
                #ccc ${percentageLeft}%,
                #534457 ${percentageLeft}%, 
                #534457 ${percentageRight}%,
                #ccc ${percentageRight}%, 
                #ccc 100%
                )`,
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => {
          return (<div
            {...props}
            key={props.key}
            className="h-4 w-4 cursor-pointer rounded-full bg-main"
          />)
        }}
      />
    </div>
  );
};

export default PriceRange;
