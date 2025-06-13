import { useState } from "react";
import { useUpdateCart } from "src/hooks/cart/useCartMutations";
import { useTranslation } from "react-i18next";
import QuantitySelectorView from "./SelectorView";

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
  const { t } = useTranslation("shared");
  const [quantity, setQuantity] = useState(currentQuantity);
  const [inputValue, setInputValue] = useState(currentQuantity.toString());
  const { mutate } = useUpdateCart();

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

  return (
    <QuantitySelectorView
      title={t("quantity")}
      isCartMenu={isCartMenu}
      quantity={quantity}
      inputValue={inputValue}
      onIncrease={increase}
      onDecrease={decrease}
      onChange={handleInputChange}
      onBlur={handleBlur}
    />
  );
};

export default QuantitySelector;
