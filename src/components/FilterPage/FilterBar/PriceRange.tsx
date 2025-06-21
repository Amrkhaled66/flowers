import { Range } from "react-range";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useDebounce from "src/hooks/shared/useDebounce";
const PriceRange = ({
  handlePriceRangeChange,
  prices,
}: {
  handlePriceRangeChange: (value: number[]) => void;
  prices: { maxPrice: string; minPrice: string };
}) => {
  const { t } = useTranslation("filter");
  const { minPrice, maxPrice } = prices;
  const [priceRange, setPriceRange] = useState<number[]>([
    Number(minPrice),
    Number(maxPrice),
  ]);

  const depouncedChange = useDebounce(
    () => handlePriceRangeChange(priceRange),
    1000,
  );
  const handleChange = (value: number[]) => {
    setPriceRange(value);
    depouncedChange();
  };

  if (minPrice === maxPrice) return null;
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
        min={Number(minPrice)}
        max={Number(maxPrice)}
        values={priceRange}
        onChange={handleChange}
        renderTrack={({ props, children }) => {
          const [minVal, maxVal] = priceRange;
          const min = Number(minPrice);
          const max = Number(maxPrice);
          const range = max - min;
          const percentageLeft = ((minVal - min) / range) * 100;
          const percentageRight = ((maxVal - min) / range) * 100;

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
          return (
            <div
              {...props}
              key={props.key}
              className="bg-main h-4 w-4 cursor-pointer rounded-full"
            />
          );
        }}
      />
    </div>
  );
};

export default PriceRange;
