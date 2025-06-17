import priceFormatter from "src/utils/priceFormatter";
import Button from "../ui/Button";

import { useOrderSummary } from "src/context/OrderSummaryContext";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useCart } from "src/context/user/cartCtx";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useConfig } from "src/context/configCtx";
import { useAuth } from "src/context/authCtx";
const OrderSummary = () => {
  const { t } = useTranslation("sharedCart");
  const { config } = useOrderSummary();
  const navigate = useNavigate();
  const { cartSubTotal, coupon, copounValue, isFreeDelivery, isBalanceUsed } = useCart();
  const { authData: { user } } = useAuth();
  const { config: { shipping } } = useConfig()
  const handleClick = () => {
    if (config.onClick) {
      config.onClick();
    } else if (config.pathName) {
      navigate(config.pathName);
    }
  };

  return (
    <div className="text-text-main bg-main-50 space-y-4 rounded-xl p-4 text-sm lg:space-y-[28px] lg:text-base">
      {/* Header */}
      <div className="flex items-center gap-x-2">
        <Icon icon="basil:invoice-outline" width="24" height="24" />
        <p className="text-sm font-bold lg:text-xl">
          {t("orderSummary.title")}
        </p>
      </div>

      <div className="space-y-4">
        {/* Subtotal */}
        <div className="border-b-stroke flex justify-between border-b pb-4">
          <p>{t("orderSummary.subtotal")}</p>
          <p>{priceFormatter(cartSubTotal)}</p>
        </div>
        {coupon && (
          <div className="border-b-stroke flex justify-between border-b pb-4">
            <p> {t("orderSummary.discount")}</p>
            <p className="text-green-500">{priceFormatter(copounValue)}</p>
          </div>
        )}
        {
          isBalanceUsed && (
            <div className="border-b-stroke flex justify-between border-b pb-4">
              <p>{t("orderSummary.usedBalance")}</p>
              <p className="text-green-500">-{priceFormatter(user?.balance)}</p>
            </div>
          )
        }

        {/* Delivery Charges */}
        <div className="border-b-stroke space-y-2.5 border-b pb-4">
          <div className="flex justify-between">
            <p>{t("orderSummary.deliveryCharges")}</p>
            {isFreeDelivery ? <p className="text-green-600">{t("orderSummary.free")}</p> : <p>{priceFormatter(shipping)}</p>}
          </div>
          <p className="text-subTitle">{t("orderSummary.deliveryNote")}</p>
        </div>

        {/* Total */}
        <div className="border-b-stroke flex justify-between border-b pb-4 font-bold">
          <p>{t("orderSummary.total")}</p>
          <p>{priceFormatter((cartSubTotal || 0) + (isFreeDelivery ? 0 : Number(shipping)))}</p>
        </div>

        {/* Button */}
        <div className="pt-4">
          <Button
            onClick={handleClick}
            loading={config.isLoading}
            text={config.buttonText||"Order Now"}
            className="animate w-full !py-3 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
