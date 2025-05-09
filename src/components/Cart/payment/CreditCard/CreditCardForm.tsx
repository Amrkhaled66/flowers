import { Icon } from "@iconify/react/dist/iconify.js";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { inputClass, labelClass, wrapperClass } from "./initialClasses";

const InputLabelWrapper = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className={wrapperClass}>
    <label className={labelClass}>{label}</label>
    {children}
  </div>
);

const IconInput = ({
  element,
  icon,
}: {
  element: React.ReactNode;
  icon: string;
}) => (
  <div className="relative">
    {element}
    <Icon
      icon={icon}
      className="absolute end-3 top-1/2 -translate-y-1/2"
      width="24"
      height="24"
    />
  </div>
);

const CreditCardForm = ({ isActive }: { isActive: boolean }) => {
  return (
    <div
      className={`origin-top overflow-hidden rounded-xl transition-all duration-500 ${
        isActive ? "border-main mt-4 max-h-300 border" : "max-h-0"
      }`}
    >
      <div className=" bg-main-50 space-y-4 p-4">
        <InputLabelWrapper label="Card Name">
          <input
            required
            className={inputClass}
            placeholder="Card Name"
            type="text"
          />
        </InputLabelWrapper>

        <InputLabelWrapper label="Card Number">
          <IconInput
            element={<CardNumberElement className={inputClass} />}
            icon="solar:card-outline"
          />
        </InputLabelWrapper>

        <div className="grid grid-cols-2 gap-6">
          <InputLabelWrapper label="Expiry Date">
            <IconInput
              element={<CardExpiryElement className={inputClass} />}
              icon="solar:calendar-outline"
            />
          </InputLabelWrapper>

          <InputLabelWrapper label="CVV">
            <IconInput
              element={<CardCvcElement className={inputClass} />}
              icon="f7:lock"
            />
          </InputLabelWrapper>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
