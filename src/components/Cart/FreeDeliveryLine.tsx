import { Icon } from "@iconify/react/dist/iconify.js";
import priceFormatter from "src/utils/priceFormatter";
const FreeDeliveryLine = ({ className }: { className?: string }) => {
  return (
    <div className={`bg-main-50 flex  gap-x-3 rounded-xl p-4 ${className}`}>
      <Icon icon="game-icons:city-car" width="40" height="40" />
      <div className="w-full space-y-2">
        <p className="text-text-main lg:text-base text-sm font-medium">
          Only 100 AED left to get free delivery!
        </p>
        <div className="flex w-full items-center justify-between gap-x-3 lg:gap-x-9">
          <div className="bg-stroke relative h-1 flex-1 rounded-xl">
            <div
              style={{
                width: `${(400 / 500) * 100}%`,
              }}
              className="bg-main animate absolute h-full rounded-xl"
            ></div>
          </div>
          <p className="text-xs lg:text-base">{priceFormatter(500)}</p>
        </div>
      </div>
    </div>
  );
};

export default FreeDeliveryLine;
