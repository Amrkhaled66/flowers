import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useUpdateCart } from "src/hooks/cart/useCartMutations";
import { useTranslation } from "react-i18next";

interface QuantitySelectorProps {
  id: number;
  isCartMenu?: boolean;
  currentQuantity?: number;
}

const QuantitySelector = ({
  id,
  isCartMenu = false,
  currentQuantity = 1,
}: QuantitySelectorProps) => {
  const [quantity, setQuantity] = useState(currentQuantity);
  const [inputValue, setInputValue] = useState(currentQuantity.toString());
  const { mutate } = useUpdateCart();
  const { t } = useTranslation("shared");

  const handleUpdate = (newQuantity: number) => {
    setQuantity(newQuantity);
    mutate({ id, quantity: newQuantity });
  };

  const handleBlur = () => {
    const parsed = parseInt(inputValue, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed !== quantity) {
      handleUpdate(parsed);
    } else {
      setInputValue(quantity.toString());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setInputValue(newQty.toString());
      handleUpdate(newQty);
    }
  };

  const increase = () => {
    const newQty = quantity + 1;
    setInputValue(newQty.toString());
    handleUpdate(newQty);
  };

  const buttonClass =
    "flex h-full w-full items-center justify-center px-1.5 disabled:cursor-not-allowed";
  const iconClass =
    "text-text-main h-[18px] w-[18px] lg:h-[24px] lg:w-[24px]";
  const wrapperClass =
    "border-main flex h-[28px] w-fit items-center overflow-hidden rounded-lg border lg:h-[40px] lg:rounded-xl";
  const inputClass =
    "bg-main-100 text-text-main h-full w-[28px] text-center text-sm font-bold sm:w-[34px] lg:w-[46px] lg:text-xl";

  return (
    <div className="space-y-3 rounded-xl">
      {!isCartMenu && (
        <p className="text-text-main font-bold">{t("quantity")}</p>
      )}
      <div className={wrapperClass}>
        <button
          onClick={decrease}
          disabled={quantity <= 1}
          style={{ background: isCartMenu ? "transparent" : "#fff" }}
          className={buttonClass}
        >
          <Icon icon="ic:outline-minus" className={iconClass} />
        </button>

        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className={inputClass}
        />

        <button
          onClick={increase}
          style={{ background: isCartMenu ? "transparent" : "#fff" }}
          className={buttonClass}
        >
          <Icon icon="ic:round-plus" className={iconClass} />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
