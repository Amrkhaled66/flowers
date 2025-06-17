import OrderOverViewBar from "src/sections/TrackOrderPage/OrderOverViewBar";
import OrderTimeLine from "src/sections/TrackOrderPage/OrderTimeLine";
import OrderTrackingDetails from "src/sections/TrackOrderPage/OrderTrackingDetails";

import { useParams } from "react-router";
import { useGetOrderById } from "src/hooks/order/useOrderMutation";
const TrackOrderPage = () => {

  const { id } = useParams();

  const { data: order, isLoading } = useGetOrderById(Number(id));

  return (
    <div className="h-auto min-h-dvh py-6 lg:py-10">
      <div className="container space-y-4 lg:space-y-10">
        <OrderOverViewBar barInfo={
          { orderId: order?.id, paymentMethode: (order?.paymentMethod ?? "unPaid"), deliveryDate: order?.deliveryDate }
        } isLoading={isLoading} />
        <div className="flex flex-col gap-x-6 gap-y-4 lg:flex-row">
          <OrderTimeLine track={order?.tracking} isLoading={isLoading} />
          <OrderTrackingDetails order={order || undefined} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default TrackOrderPage;
