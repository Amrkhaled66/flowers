import { Icon } from "@iconify/react/dist/iconify.js";
import priceFormatter from "src/utils/priceFormatter";
import { useTranslation } from "react-i18next";
import { useCart } from "src/context/user/cartCtx";
import { FREEDELIVERYBRECKDOWN } from "src/utils/defaultSettings";

const FreeDeliveryLine = ({ className }: { className?: string }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation("sharedCart");
  const { cartSubTotal, isFreeDelivery } = useCart();
  return (
    <div className={`bg-main-50 flex gap-x-3 rounded-xl p-4 ${className}`}>
      <Icon
        icon="game-icons:city-car"
        className={`text-main ${language === "ar" && "-scale-x-100"}`}
        width="40"
        height="40"
      />
      <div className="w-full space-y-2">
        <p className="text-text-main text-sm font-medium lg:text-base">
          {isFreeDelivery ? (
            t("freeDelivery.Unlock")
          ) : (
            <>
              {t("freeDelivery.only")}
              {priceFormatter(
                cartSubTotal && FREEDELIVERYBRECKDOWN - cartSubTotal,
              )}{" "}
              {t("freeDelivery.toGet")}
            </>
          )}
        </p>
        <div className="flex w-full items-center justify-between gap-x-3 lg:gap-x-9">
          <div className="bg-stroke relative h-1 flex-1 overflow-hidden rounded-xl">
            <div
              style={{
                width: `${isFreeDelivery ? "100" : ((cartSubTotal || 0) / FREEDELIVERYBRECKDOWN) * 100}%`,
              }}
              className={`!bg-main animate absolute h-full rounded-xl`}
            />
          </div>
          <p className="text-xs lg:text-base">
            {priceFormatter(FREEDELIVERYBRECKDOWN)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeDeliveryLine;
