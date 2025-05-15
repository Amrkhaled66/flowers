import OrderCardType from "src/types/UserInfo/OrderCard";
import priceFormatter from "src/utils/priceFormatter";
import DateFormatter from "src/utils/DateFormatter";
import { Icon } from "@iconify/react/dist/iconify.js";
const OrderCard = ({ order }: { order: OrderCardType }) => {
  const { id, img, shippingStatus, title, price, date } = order;
  return (
    <div className="space-y-2.5 rounded-xl bg-white p-4">
      <button className="flex w-full items-center justify-between">
        <p className="text-xs font-bold">Order ID {id}</p>
        <Icon icon="weui:arrow-filled" width="24" height="24" />
      </button>
      <div className="flex gap-x-3">
        <div className="h-[48px] w-[48px] overflow-hidden rounded-2xl lg:h-[54px] lg:w-[54px]">
          <img
            className="size-full object-cover object-center"
            src={img}
            alt={title}
          />
        </div>
        <div className="flex w-full flex-1 flex-col gap-y-1">
          <div className="flex w-full items-center justify-between text-xs lg:text-sm">
            <p className="font-semibold">{title}</p>
            <p className="font-semibold">{priceFormatter(price)}</p>
          </div>
          <p className="text-xs font-bold text-blue-600 lg:text-sm">
            {shippingStatus}
          </p>
          <p className="text-xs lg:text-sm">{DateFormatter(date)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
