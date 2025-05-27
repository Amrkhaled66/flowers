import img1 from "src/assets/products/1.webp";
import OrderCard from "src/components/ProfilePage/MyOrders/OrdersCards/OrderCard";
import OrderCardType from "src/types/UserInfo/OrderCard";
import Skeleton from "react-loading-skeleton";

const Orders: OrderCardType[] = [
  {
    id: "NEGH2200221",
    img: img1,
    shippingStatus: "Shipping",
    title: "Atom Nespresso Premium Endy Roses Bouquet",
    price: 120,
    date: new Date(Date.now()),
  },
  {
    id: "NEGH2200221",
    img: img1,
    shippingStatus: "Shipping",
    title: "Atom Nespresso Premium Endy Roses Bouquet",
    price: 120,
    date: new Date(Date.now()),
  },
];

const OrdersCards = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {1 ? (
        <>
          <Skeleton containerClassName="!rounded-xl" height={120} />
          <Skeleton containerClassName="!rounded-xl" height={120} />
          <Skeleton containerClassName="!rounded-xl" height={120} />
        </>
      ) : (
        Orders.map((order) => <OrderCard key={order.id} order={order} />)
      )}
    </div>
  );
};

export default OrdersCards;
