import { useState, useEffect } from "react";
import { useDebouncedUpdateCart } from "src/hooks/cart/useCartMutations";
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
  const { mutate } = useDebouncedUpdateCart();

  const handleUpdate = (newQuantity: number) => {
    mutate({ id, quantity: newQuantity }, {
      onSuccess: () => {
        setQuantity(newQuantity);

      },
      onError: () => {
        setInputValue(quantity.toString());
      }
    });
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
  useEffect(() => {
    setQuantity(currentQuantity);
    setInputValue(currentQuantity.toString());
  }, [currentQuantity]);
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
