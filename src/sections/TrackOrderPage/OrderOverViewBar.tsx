import Button from "src/components/ui/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const BarElement = ({
  title,
  content,
  className = "",
}: {
  title: string;
  content: string | number | undefined;
  className?: string;
}) => (
  <div
    className={`space-y-2 text-start text-xs sm:w-1/3 lg:text-base ${className} `}
  >
    <p className="text-subTitle">{title}</p>
    <p className="text-text-main font-bold">{content}</p>
  </div>
);

const OrderOverViewBar = ({ isLoading, barInfo }: { isLoading: boolean, barInfo: { orderId?: number, paymentMethode?: string, deliveryDate?: string } }) => {
  const { t } = useTranslation("trackOrder");
  return (
    isLoading ? (
      <Skeleton height={100} containerClassName="rounded-xl mb-4" />
    ) : (
      <div className="bg-main-100 flex flex-col gap-x-6 gap-y-6 rounded-xl px-3 py-4 lg:flex-row lg:px-4">
        <div className="flex flex-1 justify-between gap-x-2">
          <BarElement title={t("bar.orderId")} content={barInfo.orderId} />
          <BarElement
            className="border-x-stroke flex-1 border-x !text-center"
            title={t("bar.paymentMethode")}
            content={barInfo.paymentMethode}
          />
          <BarElement
            className="mr-0 sm:pl-5"
            title={t("bar.deliveryDate")}
            content={barInfo.deliveryDate}
          />
        </div>
        <Link to={"/invoice/" + barInfo.orderId}>
          <Button
            text={t("bar.viewInvoice")}
            className="bg-main animate w-full !py-3 text-white lg:w-[240px]"
          />
        </Link>
      </div>
    )
  );
};

export default OrderOverViewBar;
