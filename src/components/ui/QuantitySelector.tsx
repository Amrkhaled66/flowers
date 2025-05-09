import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
const QuantitySelector = ({
  isCartMenu,
  currentQuantity = 1,
}: {
  isCartMenu?: boolean;
  currentQuantity?: number;
}) => {
  const [quantity, setQuantity] = useState(currentQuantity);
  return (
    <div className="rounded-xl">
      {!isCartMenu && (
        <p className="text-text-main font-main font-bold">Amount</p>
      )}
      <div
        className={`border-main flex h-[28px] w-fit items-center overflow-hidden rounded-lg border lg:h-[40px] lg:rounded-xl`}
      >
        <button
          style={{
            background: `${isCartMenu ? "transparent" : "#fff"}`,
          }}
          className="flex h-full w-full items-center justify-center px-1"
          onClick={() => setQuantity((prev) => (prev - 1) % 1)}
        >
          <Icon
            icon="ic:outline-minus"
            className="text-text-main h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]"
          />
        </button>
        <input
          type="text"
          value={quantity}
          defaultValue={quantity}
          className={`bg-main-100 text-text-main h-full w-[28px] text-center text-sm font-bold sm:w-[34px] lg:w-[46px] lg:text-xl`}
        />
        <button
          style={{
            background: `${isCartMenu ? "transparent" : "#fff"}`,
          }}
          className="flex h-full w-full items-center justify-center px-1"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <Icon
            icon="ic:round-plus"
            className="text-text-main h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]"
          />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
