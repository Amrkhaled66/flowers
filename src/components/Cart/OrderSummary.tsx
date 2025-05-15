import priceFormatter from "src/utils/priceFormatter";
import Button from "../ui/Button";

import { useOrderSummary } from "src/context/OrderSummaryContext";
import { useNavigate } from "react-router";
import { Icon } from "@iconify/react/dist/iconify.js";
const OrderSummary = () => {
  const { config } = useOrderSummary();
  const navigate = useNavigate();
  const handleClick = () => {
    if (config.onClick) {
      config.onClick();
    } else if (config.pathName) {
      navigate(config.pathName);
    }
  };
  return (
    <div className="text-text-main  space-y-4 lg:space-y-[28px] bg-main-50 rounded-xl p-4 text-sm lg:text-base">
      <div className="flex items-center gap-x-2">
        <Icon icon="basil:invoice-outline" width="24" height="24" />
        <p className=" text-sm lg:text-xl font-bold">Order Summary</p>
      </div>
      <div className="space-y-4">
        <div className="border-b-stroke flex justify-between border-b pb-4">
          <p>Subtotal</p>
          <p>{priceFormatter(50)}</p>
        </div>
        <div className="border-b-stroke space-y-2.5 border-b pb-4">
          <div className="flex justify-between">
            <p>Delivery charges</p>
            <p>{priceFormatter(1000)}</p>
          </div>
          <p className="text-subTitle">
            Please note that specific regions and express delivery may incur
            extra delivery fees
          </p>
        </div>
        <div className="border-b-stroke flex justify-between border-b pb-4 font-bold">
          <p>Total</p>
          <p>{priceFormatter(50)}</p>
        </div>
        <div className="pt-4">
          <Button
            onClick={handleClick}
            text={config.buttonText || ""}
            className="animate w-full !py-3 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
