import applePay from "src/assets/paymentWays/applePay.svg";
import tabby from "src/assets/paymentWays/tabby.png";
import PaymentWay from "src/components/Cart/payment/PaymentWay";
import CreditCard from "src/components/Cart/payment/CreditCard/CreditCard";

import { useState } from "react";

const PaymentWays = () => {
  const [activeWay, setActiveWay] = useState(0);

  return (
    <div className=" space-y-2 sm:space-y-3 lg:space-y-4">
      <PaymentWay
        isActive={activeWay === 0}
        onClick={() => setActiveWay(0)}
        name="Apple Pay"
        icon={applePay}
      />
      <CreditCard onClick={() => setActiveWay(1)} isActive={activeWay === 1} />
      <PaymentWay
        onClick={() => setActiveWay(2)}
        name="Tabby"
        isActive={activeWay === 2}
        icon={tabby}
      />
    </div>
  );
};

export default PaymentWays;
