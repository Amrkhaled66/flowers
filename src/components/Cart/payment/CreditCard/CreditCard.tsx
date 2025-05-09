import PaymentWay from "src/components/Cart/payment/PaymentWay";
import creditImg from "src/assets/paymentWays/credit.svg";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import {  useEffect } from "react";
import CreditCardForm from "./CreditCardForm";

import { useOrderSummary } from "src/context/OrderSummaryContext";
type CreditCardProps = {
  isActive: boolean;
  onClick?: () => void;
};

const CreditCard = ({ isActive, onClick }: CreditCardProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const { setConfig } = useOrderSummary();

  useEffect(() => { 
    if (isActive) {
      setConfig({ buttonText: "Continue to Checkout",onClick:handleSubmit });
    }
  },[isActive])

  const handleSubmit = async () => {

    if (!stripe || !elements) return;

    console.log("submit");
    // const  paymentIntent = await stripe.createPaymentIntent()

    // const { error } = await stripe.confirmCardPayment(paymentIntent, {
    //   payment_method: {
    //     card: elements.getElement(CardNumberElement)!,
    // billing_details:{
    // name: "Ayman Elhadary",
    // }
    //   },
    // });

    // if (error) console.log(error);
  };

  return (
    <div>
      <PaymentWay
        onClick={onClick}
        isActive={isActive}
        name="Credit Card"
        icon={creditImg}
      />
      <CreditCardForm isActive={isActive} />
    </div>
  );
};

export default CreditCard;
