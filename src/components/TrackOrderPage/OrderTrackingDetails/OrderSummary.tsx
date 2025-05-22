import { useTranslation } from "react-i18next";
import priceFormatter from "src/utils/priceFormatter";
const OrderSummary = () => {
  const { t } = useTranslation("trackOrder");
  return (
    <div className="bg-main-50 space-y-6 rounded-xl p-4">
      <div className="space-y-7">
        <h2 className="font-bold">{t("summary.title")}</h2>
        {/* products */}
      </div>
      <div className="border-b-stroke flex justify-between border-b pb-4">
        <p>{t("summary.subtotal")}</p>
        <p>{priceFormatter(3423)}</p>
      </div>
      <div className="border-b-stroke space-y-2 border-b pb-4">
        <p className="flex justify-between">
          <span>{t("summary.deliveryCharges")}</span>
          <span>{priceFormatter(3423)}</span>
        </p>
        <p className="lg:w-[80%]">
         {t("summary.chargeNote")}
        </p>
      </div>
      <p  className="flex justify-between font-bold">
        <span>{t("summary.total")}</span>
        <span>{priceFormatter(2342)}</span>
      </p>
    </div>
  );
};

export default OrderSummary;
