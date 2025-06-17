import OrderSummary from "src/components/TrackOrderPage/OrderTrackingDetails/OrderSummary";
import Skeleton from "react-loading-skeleton";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react/dist/iconify.js";
import { forwardRef } from "react";
import { ReceivedOrder } from "src/types/ReceivedOrder";
import DateFormatter from "src/utils/DateFormatter";
interface OrderTrackingDetailsProps {
  isLoading: boolean;
  order: ReceivedOrder | undefined
}

const OrderTrackingDetails = forwardRef<HTMLDivElement, OrderTrackingDetailsProps>(({ isLoading, order }, ref) => {
  const { t, i18n: { language } } = useTranslation("trackOrder");
  return (
    isLoading ?
      <Skeleton className="!h-[400px]" containerClassName="w-full" />
      :
      <div ref={ref} className="flex printable flex-col-reverse gap-4 lg:flex-col lg:gap-6">
        <OrderSummary subTotal={order?.subtotal || null} shipping={order?.shippingCost || null} total={order?.total || null} products={order?.products || null} />
        {/* orderDetails */}
        <div className="bg-main-50 space-y-4 rounded-xl p-4">
          <h2 className="font-bold">{t("orderDetails.title")}</h2>
          <div className="space-y-2">
            <p className="flex justify-between">
              <span>{t("orderDetails.expectedDeliveryDate")}</span>
              <span className="font-bold">{order?.deliveryDate && DateFormatter(new Date(order.deliveryDate), language)}</span>
            </p>
            <p className="flex justify-between">
              <span>{t("orderDetails.trackingId")}</span>
              <span className="font-bold">{order?.id}</span>
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
                <span>{order?.fullAddress}</span>
              </p>
            </div>
            <div className="flex gap-x-2">
              <Icon icon="solar:user-outline" width="24" height="24" />
              <p className="flex flex-col gap-y-1">
                <span className="font-bold">{t("deliveryInfo.userInfo")}</span>
                <span>{order?.recipientName}</span>
                <span>{order?.phoneNumber}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
});

export default OrderTrackingDetails;
