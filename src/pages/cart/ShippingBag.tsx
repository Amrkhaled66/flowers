import CartTable from "src/sections/Cart/ShippingBag/CartTable";
import MessageGift from "src/sections/Cart/ShippingBag/MessageGift";
import OrderSummary from "src/components/Cart/OrderSummary";
import FreeDeliveryLine from "src/components/Cart/FreeDeliveryLine";

import { useOrderSummary } from "src/context/OrderSummaryContext";
import { useEffect } from "react";
import usePageTitle from "src/hooks/ui/useUpdatePageTitle";
import { useCart } from "src/context/user/cartCtx";
import { Navigate } from "react-router";
import CartList from "src/components/Cart/CartList";
import { useTranslation } from "react-i18next";
import { useGetCart } from "src/hooks/cart/useCartMutations";
const ShippingBag = () => {
  usePageTitle("Shipping Bag");
  const { setConfig } = useOrderSummary();
  const { cartLength } = useCart();
  const { t } = useTranslation("sharedCart");
  
  useEffect(() => {
    setConfig({
      buttonText: t("orderSummary.toCheckOut"),
      pathName: "/cart/delivery-info",
    });
  }, [t]);


  useGetCart();

  if (cartLength === 0) return <Navigate to="/" replace />;

  return (
    <div className="flex flex-col gap-x-[50px] gap-y-4 lg:flex-row">
      <FreeDeliveryLine className="flex lg:hidden" />
      <div className="block lg:hidden">
        <CartList />
      </div>
      <CartTable />
      <div className="flex flex-1 flex-col gap-y-6">
        <FreeDeliveryLine className="hidden lg:flex" />
        <MessageGift />
        <OrderSummary />
      </div>
    </div>
  );
};

export default ShippingBag;
