import { Icon } from "@iconify/react/dist/iconify.js";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PaymentWays from "src/sections/Cart/payment/PaymentWays";

import { useTranslation } from "react-i18next";
import usePageTitle from "src/hooks/ui/useUpdatePageTitle";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

const Payment = () => {
  usePageTitle("Payment");
  const { t } = useTranslation("sharedCart");
  return (
    <div className="lg:!bg-main-50 h-fit w-full space-y-3 rounded-xl bg-white lg:w-[63%] lg:p-4">
      <div className="flex items-center gap-x-2">
        <Icon icon="ic:round-payment" width="24" height="24" />
        <h1 className="text-xl font-bold">{t("payment.title")}</h1>
      </div>
      <p className="text-subTitle hidden lg:block">
        {t("payment.subTitle")}
      </p>
      <Elements stripe={stripePromise}>
        <PaymentWays />
      </Elements>
    </div>
  );
};

export default Payment;

{
  /* <div className="bg-main-50  h-fit w-[63%] space-y-3 rounded-xl p-4">
        <div className="flex items-center gap-x-2">
          <Icon icon="ic:round-payment" width="24" height="24" />
          <h1 className="text-xl font-bold">Payment Options</h1>
        </div>
        <p className="text-subTitle">
          All transactions are secure and encrypted
        </p>
        <div>
          <div className="flex h-[80px] items-center gap-x-4 bg-white px-3">
            <div className="flex gap-x-3">
              <input type="radio" name="payment" id="" />
              <div className="h-[28px] w-[48px]">
                <img src={applePay} alt="" className="size-full" />
              </div>
            </div>
            <div className="font-medium">Apple Pay</div>
          </div>
        </div>
      </div> */
}
