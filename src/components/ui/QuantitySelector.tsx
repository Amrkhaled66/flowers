import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import { useUpdateCart } from "src/hooks/cart/useCartMutations";
import { useTranslation } from "react-i18next";
import useDebounce from "src/hooks/shared/useDebounce";
import { useEffect } from "react";
const QuantitySelector = ({
  id,
  isCartMenu,
  currentQuantity = 1,
}: {
  id: number;
  isCartMenu?: boolean;
  currentQuantity?: number;
}) => {
  const [quantity, setQuantity] = useState(currentQuantity);
  const { mutate } = useUpdateCart();
  const { t } = useTranslation("shared");
  
  const handleCart = () => {
    mutate({ quantity, id });
  };

  return (
    <div className="rounded-xl">
      {!isCartMenu && (
        <p className="text-text-main font-bold">{t("quantity")}</p>
      )}
      <div
        className={`border-main flex h-[28px] w-fit items-center overflow-hidden rounded-lg border lg:h-[40px] lg:rounded-xl`}
      >
        <button
          style={{
            background: `${isCartMenu ? "transparent" : "#fff"}`,
          }}
          disabled={quantity <= 1}
          className="flex h-full w-full items-center justify-center px-1 disabled:cursor-not-allowed"
          onClick={() => {
            handleCart();
            setQuantity((prev) => prev - 1);
          }}
        >
          <Icon
            icon="ic:outline-minus"
            className="text-text-main h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]"
          />
        </button>
        <input
          type="text"
          value={quantity}
          readOnly
          className={`bg-main-100 text-text-main h-full w-[28px] text-center text-sm font-bold sm:w-[34px] lg:w-[46px] lg:text-xl`}
        />
        <button
          style={{
            background: `${isCartMenu ? "transparent" : "#fff"}`,
          }}
          className="flex h-full w-full items-center justify-center px-1"
          onClick={() => {
            handleCart();
            setQuantity((prev) => prev + 1);
          }}
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
