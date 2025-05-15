import { ReactNode } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import applePay from "src/assets/paymentWays/applePay.svg";
import { useTranslation } from "react-i18next";
const PaymentWay = ({ icon }: { icon: ReactNode }) => {
  return (
    <div className="border-stroke flex items-center rounded-sm border-2 bg-white px-2 lg:px-4">
      {icon}
    </div>
  );
};

const Bottom = () => {
  const year = new Date().getFullYear();
  const { t } = useTranslation("layout");
  return (
    <div className="flex flex-col-reverse items-start justify-between gap-y-7 border-t border-white pt-7 text-white lg:flex-row lg:items-center lg:pt-4">
      <p>{t("footer.copyright")} &copy; {year} Floward - V 4.3.10</p>
      <div className="order-first flex items-center gap-x-1 lg:order-none">
        <span>{t("footer.terms")}</span>
        <div className="h-2 w-2 rounded-full bg-white"></div>
        <span>{t("footer.privacy")}</span>
      </div>
      <div className="flex gap-x-4">
        <PaymentWay
          icon={
            <Icon
              icon="logos:visaelectron"
              className="h-[19px] w-[35px] lg:w-[35px]"
            />
          }
        />
        <PaymentWay
          icon={
            <Icon
              icon="logos:mastercard"
              className="h-[19px] w-[35px] lg:w-[35px]"
            />
          }
        />
        <PaymentWay
          icon={<img className="h-[50px] w-[50px]" src={applePay} />}
        />
        <PaymentWay
          icon={<Icon icon="logos:google-pay" width="40" height="40" />}
        />
      </div>
    </div>
  );
};

export default Bottom;
