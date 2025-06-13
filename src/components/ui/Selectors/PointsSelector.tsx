import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useOrder } from "src/context/orderCtx";
import QuantitySelectorView from "./SelectorView";
import priceFormatter from "src/utils/priceFormatter";
import Button from "../Button";
import { useAuth } from "src/context/authCtx";
import { toast } from "react-toastify";
interface PointsSelectorProps {
  isCartMenu?: boolean;
  currentQuantity?: number;
}

const PointsSelector = ({
  isCartMenu = false,
  currentQuantity = 0,
}: PointsSelectorProps) => {
  const { t } = useTranslation("shared");
  const { authData: { user } } = useAuth();
  const [quantity, setQuantity] = useState(currentQuantity);
  const [inputValue, setInputValue] = useState(currentQuantity.toString());
  const { updateOrder } = useOrder();
  const userPoints = 6
  const handleUpdate = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleBlur = () => {
    const parsed = parseInt(inputValue, 10);
    if (parsed > userPoints) {
      toast("You Don't Have Enough Points", {
        type: "error"
      })
      return setInputValue(quantity.toString())
    }
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
    if (newQty > userPoints) return toast("You Don't Have Enough Points", {
      type: "error"
    })
    setInputValue(newQty.toString());
    handleUpdate(newQty);
  };

  const handleApply = () => {
    updateOrder({ points_used: quantity })
    toast("Points applied successfully", { type: "success" });
  }

  const price = 0.5;
  console.log(user?.points, userPoints)
  return (
    <div className="bg-main-50 space-y-6 rounded-xl p-4 text-sm lg:text-base">
      <div className="space-y-4 lg:space-y-5">
        <div className="flex items-end justify-between">
          <QuantitySelectorView
            title={t("balloraPoints")}
            isCartMenu={isCartMenu}
            quantity={quantity}
            inputValue={inputValue}
            onIncrease={increase}
            onDecrease={decrease}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <strong>{priceFormatter(price)}</strong>
        </div>
        <p>
          <Trans ns={"sharedCart"} values={{ points: userPoints, price: priceFormatter(price * Number(userPoints)) }}
            components={{ strong: <strong /> }} i18nKey={"sharedCart:pointsNotice"} />
        </p>
      </div>
      <Button onClick={handleApply} className="w-full !py-4 text-white" text={t("apply")} />
    </div>
  );
};

export default PointsSelector;
