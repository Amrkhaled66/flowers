// import applePay from "src/assets/paymentWays/applePay.svg";
import tabby from "src/assets/paymentWays/tabby.png";
import PaymentWay from "src/components/Cart/payment/PaymentWay";
// import CreditCard from "src/components/Cart/payment/CreditCard/CreditCard";

import { useOrder } from "src/context/orderCtx";
const PaymentWays = () => {
  const { order:{payment_method}, updateOrder } = useOrder();

  const handleChangeMethod = (name: string) => {
    updateOrder({ payment_method: name })
  }
  return (
    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
      {/* <PaymentWay
        isActive={activeWay === 0}
        onClick={() => setActiveWay(0)}
        name="Apple Pay"
        icon={applePay}
      /> */}
      {/* <CreditCard onClick={() => setActiveWay(1)} isActive={activeWay === 1} /> */}
      <PaymentWay
        onClick={() => handleChangeMethod("Tabby")}
        name="Tabby"
        isActive={payment_method === "Tabby"}
        icon={tabby}
      />
    </div>
  );
};

export default PaymentWays;
