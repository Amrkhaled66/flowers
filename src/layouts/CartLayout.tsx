import { Outlet } from "react-router";
import CartTimeline from "src/components/layout/CartPage/CartTimeLine";
const CartLayout = () => {
  return (
    <div className="container space-y-6 lg:space-y-9 !py-10">
      <CartTimeline />
      <Outlet />
    </div>
  );
};

export default CartLayout;
