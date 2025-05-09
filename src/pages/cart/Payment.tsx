import { Icon } from "@iconify/react/dist/iconify.js";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import usePageTitle from "src/hooks/useUpdatePageTitle";

import PaymentWays from "src/sections/Cart/payment/PaymentWays";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

const Payment = () => {
  usePageTitle("Payment");
  return (
    <div className=" bg-white lg:!bg-main-50 font-main h-fit w-full lg:w-[63%] space-y-3 rounded-xl lg:p-4">
      <div className="flex items-center gap-x-2">
        <Icon icon="ic:round-payment" width="24" height="24" />
        <h1 className="text-xl font-bold">Payment Options</h1>
      </div>
      <p className="hidden lg:block text-subTitle">All transactions are secure and encrypted</p>
      <Elements stripe={stripePromise}>
        <PaymentWays />
      </Elements>
    </div>
  );
};

export default Payment;

{
  /* <div className="bg-main-50 font-main h-fit w-[63%] space-y-3 rounded-xl p-4">
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
