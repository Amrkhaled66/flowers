import { Icon } from "@iconify/react/dist/iconify.js";
import QuantitySelector from "src/components/ui/QuantitySelector";
const CartMenuCard = ({
  img,
  name,
  price,
  quantity,
}: {
  img: string;
  name: string;
  price: number;
  quantity: number;
}) => {
  return (
    <div className="border-b-stroke font-main text-text-main flex gap-x-3 border-b pb-4">
      <div className="h-[100px] w-[100px] overflow-hidden rounded-xl bg-red-800">
        <img
          src={img}
          alt={name}
          className="size-full object-cover object-center"
        />
      </div>
      <div className="flex flex-1 flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <p className=" text-xs lg:text-sm ">{name}</p>
          <button>
            <Icon
              icon="fluent:delete-24-regular"
              width="24"
              height="24"
              className="text-[#FF0000]"
            />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-text-main space-x-1">
            <span className="text-xs">Egp</span>
            <span className="font-bold">{price}</span>
          </p>
          <QuantitySelector isCartMenu currentQuantity={quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartMenuCard;
