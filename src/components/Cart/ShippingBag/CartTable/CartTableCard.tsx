import CartEle from "src/types/CartEle";
import { Icon } from "@iconify/react/dist/iconify.js";
import priceFormatter from "src/utils/priceFormatter";
import QuantitySelector from "src/components/ui/QuantitySelector";
const CartTableCard = ({ ele }: { ele: CartEle }) => {
  const {  img, title, price, quantity } = ele;
  return (
    <tr className="border-b-stroke grid grid-cols-[3fr_1fr_1fr_1fr] items-center rounded-xl border-b py-4 pb-4">
      <td className="flex items-center gap-x-3 text-start">
        <button>
          <Icon
            className="text-red"
            icon="fluent:delete-24-regular"
            width="24"
            height="24"
          />
        </button>
        <div className="h-[100px] w-[100px] overflow-hidden rounded-xl">
          <img className="size-full object-cover" src={img} alt="title" />
        </div>
        <p className="line-clamp-1 w-[50%]">{title}</p>
      </td>
      <td className="text-center font-semibold">{priceFormatter(price)}</td>
      <td className="text-center">
        <QuantitySelector isCartMenu currentQuantity={quantity} />
      </td>
      <td className="text-center font-semibold">
        {priceFormatter(price * quantity)}
      </td>
    </tr>
  );
};

export default CartTableCard;
