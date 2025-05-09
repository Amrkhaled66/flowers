import CartTable from "src/sections/Cart/ShippingBag/CartTable";
import MessageGift from "src/sections/Cart/ShippingBag/MessageGift";
import OrderSummary from "src/components/Cart/OrderSummary";
import FreeDeliveryLine from "src/components/Cart/FreeDeliveryLine";

import { useOrderSummary } from "src/context/OrderSummaryContext";
import { useEffect } from "react";
import usePageTitle from "src/hooks/useUpdatePageTitle";
import CartList from "src/components/Cart/CartList";
const ShippingBag = () => {
  usePageTitle("Shipping Bag");
  const { setConfig } = useOrderSummary();

  useEffect(() => {
    setConfig({
      buttonText: "Continue to Delivery",
      pathName: "/cart/delivery-info",
    });
  }, []);

  return (
    <div className="flex flex-col gap-x-[50px] gap-y-4 lg:flex-row">
      <FreeDeliveryLine className="block lg:hidden" />
      <div className="block lg:hidden">
        <CartList />
      </div>
      <CartTable />
      <div className="flex flex-1 flex-col gap-y-6">
        <FreeDeliveryLine className="hidden lg:block" />
        <MessageGift />
        <OrderSummary />
      </div>
    </div>
  );
};

export default ShippingBag;
