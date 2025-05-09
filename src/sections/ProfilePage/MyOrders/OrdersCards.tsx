import img1 from "src/assets/products/1.webp";
import OrderCard from "src/components/ProfilePage/MyOrders/OrdersCards/OrderCard";
import OrderCardType from "src/types/UserInfo/OrderCard";
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
    <div className="space-y-4">
      {Orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrdersCards;
