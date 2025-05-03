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
    <div className="space-y-3 rounded-xl">
      {!isCartMenu && (
        <p className="text-text-main font-main font-bold">Amount</p>
      )}
      <div
        className={`border-main flex h-[40px] w-fit items-center gap-x-1 rounded-xl border px-2 lg:gap-x-3`}
      >
        <button onClick={() => setQuantity((prev) => (prev - 1) % 1)}>
          <Icon
            icon="ic:outline-minus"
            width="24"
            height="24"
            className="text-text-main"
          />
        </button>
        <input
          type="text"
          value={quantity}
          defaultValue={quantity}
          className={`bg-main-100 text-text-main h-full w-[34px] text-center font-bold lg:w-[46px] lg:text-xl`}
        />
        <button onClick={() => setQuantity((prev) => prev + 1)}>
          <Icon
            icon="ic:round-plus"
            width="24"
            height="24"
            className="text-text-main"
          />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
