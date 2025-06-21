import priceFormatter from "src/utils/priceFormatter";
import DateFormatter from "src/utils/DateFormatter";
import { getLocalizedName } from "src/utils/getLocalizedName";
import { ReceivedOrder } from "src/types/ReceivedOrder";
import { Icon } from "@iconify/react/dist/iconify.js";

import { useTranslation } from "react-i18next";

import { shippingStatusTextColor } from "src/utils/defaultSettings";

import { Link } from "react-router-dom";
const OrderCard = ({ order }: { order: ReceivedOrder }) => {
  const { id, createdAt, total, orderStatus, products } = order;
  const {
    t,
    i18n: { language },
  } = useTranslation("profile");
  return (
    <Link to={`/track-order/${id}`}>
      <div className="group cursor-pointer space-y-2.5 rounded-xl bg-white p-4">
        <button className="flex w-full items-center justify-between">
          <p className="text-xs font-bold">
            {t("orders.orderId")} {id}
          </p>
          <Icon
            icon="weui:arrow-filled"
            className="animate group-hover:translate-x-3"
            width="24"
            height="24"
          />
        </button>
        <div className="flex gap-x-3">
          <div className="h-[48px] w-[48px] overflow-hidden rounded-2xl lg:h-[54px] lg:w-[54px]">
            <img
              className="size-full object-cover overflow-hidden object-center"
              src={products.length > 0 ? products[0].firstImage : ""}
            />
          </div>
          <div className="flex w-full flex-1 flex-col gap-y-1">
            <div className="flex w-full items-center justify-between text-xs lg:text-sm">
              <p className="font-semibold">
                {products.length > 0 && getLocalizedName(products[0])}
              </p>
              <p className="font-semibold">{priceFormatter(total)}</p>
            </div>
            <p
              className={`text-xs font-bold text-blue-600 ${shippingStatusTextColor[orderStatus as keyof typeof shippingStatusTextColor]} lg:text-sm`}
            >
              {orderStatus}
            </p>
            <p className="text-xs lg:text-sm">
              {DateFormatter(new Date(createdAt), language)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderCard;
