import { Icon } from "@iconify/react/dist/iconify.js";
import QuantitySelector from "src/components/ui/QuantitySelector";

import priceFormatter from "src/utils/priceFormatter";
const CartMenuCard = ({
  img,
  name,
  price,
  quantity,
  isCartPage,
}: {
  img: string;
  name: string;
  price: number;
  quantity: number;
  isCartPage?: boolean;
}) => {
  return (
    <div
      className={` ${isCartPage && "bg-main-50 p-3 lg:p-4"} border-b-stroke font-main text-text-main flex gap-x-3 rounded-xl border-b pb-4`}
    >
      <div className="h-20 w-20 overflow-hidden rounded-xl bg-red-800 lg:h-25 lg:w-25">
        <img
          src={img}
          alt={name}
          className="size-full object-cover object-center"
        />
      </div>
      <div className="flex flex-1 w-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <p
            className={`text-xs line-clamp-1 max-w-[90%]  text-wrap lg:text-sm ${isCartPage && "lg:font-bold"}`}
          >
            {name} ddddddddddddddddddddddddddd
            dddddddddddddddd
          </p>
          <button>
            <Icon
              icon="fluent:delete-24-regular"
              width="24"
              height="24"
              className="text-[#FF0000]"
            />
          </button>
        </div>
        <div className="flex flex-row-reverse items-center justify-between">
          <p className="text-text-main space-x-1 font-bold">
            {priceFormatter(price)}
          </p>
          <QuantitySelector isCartMenu currentQuantity={quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartMenuCard;
