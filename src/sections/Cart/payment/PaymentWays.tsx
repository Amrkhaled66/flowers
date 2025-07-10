// import applePay from "src/assets/paymentWays/applePay.svg";
import tabby from "src/assets/paymentWays/tabby.png";
import creditImg from "src/assets/paymentWays/credit.svg";
import PaymentWay from "src/components/Cart/payment/PaymentWay";
import { useOrder } from "src/context/orderCtx";
// import { useTranslation } from "react-i18next";
const PaymentWays = () => {
  const {
    order: { paymentMethod },
    updateOrder,
  } = useOrder();
  // const {
  //   i18n: { language },
  // } = useTranslation();

  const handleChangeMethod = (name: string) => {
    updateOrder({ paymentMethod: name });
  };
  
  return (
    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
      <PaymentWay
        onClick={() => handleChangeMethod("Tabby")}
        name="Tabby"
        isActive={paymentMethod === "Tabby"}
        icon={tabby}
        isSoon
      />

      <PaymentWay
        isActive={paymentMethod === "stripe"}
        onClick={() => handleChangeMethod("stripe")}
        name="Credit Card"
        icon={creditImg}
      />

      {/* <PaymentWay
        onClick={() => handleChangeMethod("cod")}
        name={language === "en" ? "Cash on Delivery" : "الدفع عند الاستلام"}
        isActive={paymentMethod === "cod"}
      /> */}
    </div>
  );
};

export default PaymentWays;
