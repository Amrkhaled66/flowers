import OrderSummary from "src/components/TrackOrderPage/OrderTrackingDetails/OrderSummary";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react/dist/iconify.js";
const OrderTrackingDetails = () => {
  const { t } = useTranslation("trackOrder");
  return (
    <div className="flex flex-col-reverse gap-4 lg:gap-6">
      <OrderSummary />
      {/* orderDetails */}
      <div className="bg-main-50 space-y-4 rounded-xl p-4">
        <h2 className="font-bold">{t("orderDetails.title")}</h2>
        <div className="space-y-2">
          <p className="flex justify-between">
            <span>{t("orderDetails.expectedDeliveryDate")}</span>
            <span className="font-bold">11 feb 2025</span>
          </p>
          <p className="flex justify-between">
            <span>{t("orderDetails.trackingId")}</span>
            <span className="font-bold">78ER02560Y52</span>
          </p>
        </div>
      </div>
      {/* deliveryInfo */}
      <div className="bg-main-50 space-y-4 rounded-xl p-4">
        <h2 className="font-bold">{t("deliveryInfo.title")}</h2>
        <div className="space-y-4">
          <div className="flex gap-x-2">
            <Icon icon="gridicons:location" width="24" height="24" />
            <p className="flex flex-col gap-y-2">
              <span className="font-bold">{t("deliveryInfo.address")}</span>
              <span>(Beit 5 October, Cairo)</span>
            </p>
          </div>
          <div className="flex gap-x-2">
            <Icon icon="solar:user-outline" width="24" height="24" />
            <p className="flex flex-col gap-y-1">
              <span className="font-bold">{t("deliveryInfo.userInfo")}</span>
              <span>Amr Khaled</span>
              <span>+20123456789</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingDetails;
