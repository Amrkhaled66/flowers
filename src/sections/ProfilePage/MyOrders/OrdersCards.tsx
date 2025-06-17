import OrderCard from "src/components/ProfilePage/MyOrders/OrdersCards/OrderCard";
import Skeleton from "react-loading-skeleton";

import { useGetOrders } from "src/hooks/order/useOrderMutation";
import { ReceivedOrder } from "src/types/ReceivedOrder";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Button from "src/components/ui/Button";

const OrdersCards = () => {
  const { data: orders, isLoading } = useGetOrders();
  const navigate = useNavigate();
  const{t} =useTranslation("profile")
  return (
    <div className="flex flex-col gap-y-4">
      {isLoading ? (
        <>
          <Skeleton containerClassName="!rounded-xl" height={120} />
          <Skeleton containerClassName="!rounded-xl" height={120} />
          <Skeleton containerClassName="!rounded-xl" height={120} />
        </>
      ) : orders.length === 0 ? (
        <Button
          className="w-full !py-3 !text-white"
          onClick={() => navigate("/filter")}
          text={t("orders.placeFirstOrder")}
        />
      ) : (
        orders.map((order: ReceivedOrder) => (
          <OrderCard key={order.id} order={order} />
        ))
      )}
    </div>
  );
};

export default OrdersCards;
