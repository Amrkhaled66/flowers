import Button from "src/components/ui/Button";
import { useTranslation } from "react-i18next";
const BarElement = ({
  title,
  content,
  className = "",
}: {
  title: string;
  content: string;
  className?: string;
}) => (
  <div
    className={`space-y-2 text-start text-xs sm:w-1/3 lg:text-base ${className} `}
  >
    <p className="text-subTitle">{title}</p>
    <p className="text-text-main font-bold">{content}</p>
  </div>
);

const OrderOverViewBar = () => {
  const { t } = useTranslation("trackOrder");
  return (
    <div className="bg-main-100 flex flex-col gap-x-6 gap-y-6 rounded-xl px-3 py-4 lg:flex-row lg:px-4">
      <div className="flex flex-1 gap-x-2 justify-between">
        <BarElement title={t("bar.orderId")} content="123456" />
        <BarElement
          className="border-x-stroke flex-1  border-x !text-center"
          title={t("bar.paymentMethode")}
          content="123456"
        />
        <BarElement
          className="mr-0 sm:pl-5"
          title={t("bar.deliveryDate")}
          content="123456"
        />
      </div>
      <Button
        text={t("bar.downloadInvoice")}
        className="bg-main animate w-full text-white lg:w-[240px]"
      />
    </div>
  );
};

export default OrderOverViewBar;
