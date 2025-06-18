// import applePay from "src/assets/paymentWays/applePay.svg";
import tabby from "src/assets/paymentWays/tabby.png";
import PaymentWay from "src/components/Cart/payment/PaymentWay";
// import CreditCard from "src/components/Cart/payment/CreditCard/CreditCard";
import { useOrder } from "src/context/orderCtx";
import { useTranslation } from "react-i18next";
const PaymentWays = () => {
  const {
    order: { paymentMethod },
    updateOrder,
  } = useOrder();
  const {
    i18n: { language },
  } = useTranslation();

  const handleChangeMethod = (name: string) => {
    updateOrder({ paymentMethod: name });
  };
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
        isActive={paymentMethod === "Tabby"}
        icon={tabby}
        isSoon
      />
      <PaymentWay
        onClick={() => handleChangeMethod("Cash On Delivery")}
        name={language === "en" ? "Cash on Delivery" : "الدفع عند الاستلام"}
        isActive={paymentMethod === "Cash On Delivery"}
      />
    </div>
  );
};

export default PaymentWays;
