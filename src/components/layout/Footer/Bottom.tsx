import { ReactNode } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import applePay from "src/assets/paymentWays/applePay.svg";
import tabby from "src/assets/paymentWays/tabby.png";
import { useTranslation } from "react-i18next";
const PaymentWay = ({ icon }: { icon: ReactNode }) => {
  return (
    <div className="border-stroke flex items-center rounded-sm bg-white p-1 px-2">
      {icon}
    </div>
  );
};

const Bottom = () => {
  const { t } = useTranslation("layout");

  return (
    <div className="flex flex-col-reverse items-start justify-between gap-y-7 border-t border-white pt-7 text-white lg:flex-row lg:items-center lg:pt-4">
      <a className="hover:underline" target="_blank" href="https://mainflare.com/">
        {t("footer.poweredBy")} MainFlare
      </a>
      <div className="order-first flex items-center gap-x-1 lg:order-none">
        <span>{t("footer.terms")}</span>
        <div className="h-2 w-2 rounded-full bg-main"></div>
        <span>{t("footer.privacy")}</span>
      </div>
      <div className="flex gap-x-4">
        <PaymentWay
          icon={<Icon icon="logos:mastercard" className="h-[30px] w-[35px]" />}
        />
        <PaymentWay
          icon={<img className="h-[30px] w-[35px]" src={applePay} />}
        />

        <PaymentWay icon={<img className="aspect-auto w-full" src={tabby} />} />
      </div>
    </div>
  );
};

export default Bottom;
