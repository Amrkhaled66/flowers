import { Range } from "react-range";

const PriceRange = () => {
  let price = [6, 7];
  return (
    <div className="space-y-3">
      <div className="flex gap-x-2 text-sm">
        Price Range:
        <span className="mr-l text-main block font-semibold">
          ${0} - ${99999}
        </span>
      </div>

      <Range
        step={1}
        min={0}
        max={9999}
        values={price}
        onChange={() => {}}
        renderTrack={({ props, children }) => {
          const [minVal, maxVal] = price;
          const percentageLeft = (minVal / 9999) * 100;
          const percentageRight = (maxVal / 9999) * 100;

          return (
            <div
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
        renderThumb={({ props }) => (
          <div {...props} className="bg-main h-5 w-5 rounded-full" />
        )}
      />
    </div>
  );
};

export default PriceRange;
