import OrderSummary from "src/components/Cart/OrderSummary";
import FreeDeliveryLine from "src/components/Cart/FreeDeliveryLine";
import CoponBtn from "src/components/Cart/CoponBtn";
import { Outlet } from "react-router";

import CartList from "src/components/Cart/CartList";

import { useLocation } from "react-router";
const CartSubLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="!h-fit">
      <div className="flex flex-col space-y-4 gap-x-[40px] lg:flex-row">
        <Outlet />
        <div
          className={`flex flex-1 flex-col gap-y-4 sm:gap-y-5 lg:gap-y-6 ${pathname === "/cart/delivery-info" && "hidden lg:block"} `}
        >
          <FreeDeliveryLine />
          <CartList />
          <CoponBtn />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CartSubLayout;
