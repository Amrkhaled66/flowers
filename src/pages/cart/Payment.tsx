import { Icon } from "@iconify/react/dist/iconify.js";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { Navigate } from "react-router";

import PaymentWays from "src/sections/Cart/payment/PaymentWays";
import { useTranslation } from "react-i18next";
import usePageTitle from "src/hooks/ui/useUpdatePageTitle";
import { useOrder } from "src/context/orderCtx";
import { useOrderSummary } from "src/context/OrderSummaryContext";
import { useEffect } from "react";
import { useSubmitOrder } from "src/hooks/order/useOrderMutation";
import transformKeysToSnakeCase from "src/utils/transformToSnakeCase";
import Alert from "src/components/ui/Alert";
const Payment = () => {
  usePageTitle("Payment");
  const { t } = useTranslation("sharedCart");
  const { order } = useOrder();
  const { setConfig } = useOrderSummary();
  const { mutate, isPending } = useSubmitOrder();
  useEffect(() => {
    setConfig({
      buttonText: t("orderSummary.placeOrder"),
      isLoading: isPending,
      onClick: () => {
        if (!order.paymentMethod)
          return Alert({
            title: "Error",
            text: "Please select a payment method",
            icon: "error",
            confirmButtonText: "Okay",
          });
        mutate(
          transformKeysToSnakeCase({
            ...order,
            deliveryTime: order.deliveryTime.toLowerCase().replace(/\s+/g, ""),
          }),
        );
      },
    });

    return () => {
      setConfig({});
    };
  }, [isPending, t, order]);
  if (
    !order.recipientName ||
    !order.fullAddress ||
    !order.deliveryDate ||
    !order.area ||
    !order.phoneNumber
  )
    return <Navigate replace to={"/cart/delivery-info"} />;

  return (
    <div className="lg:!bg-main-50 h-fit w-full space-y-3 rounded-xl bg-white lg:w-[62%] lg:p-4">
      <div className="flex items-center gap-x-2">
        <Icon icon="ic:round-payment" width="24" height="24" />
        <h1 className="text-xl font-bold">{t("payment.title")}</h1>
      </div>
      <p className="text-subTitle hidden lg:block">{t("payment.subTitle")}</p>
      {/* <Elements stripe={stripePromise}> */}
      <PaymentWays />
      {/* </Elements> */}
    </div>
  );
};

export default Payment;
