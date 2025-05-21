import { Icon } from "@iconify/react/dist/iconify.js";
import QuantitySelector from "src/components/ui/QuantitySelector";

import priceFormatter from "src/utils/priceFormatter";
import { getLocalizedName } from "src/utils/getLocalizedName";
import getMainPrice from "src/utils/getMainPrice";

import { CartItem } from "src/types/cart";
const CartTableCard = ({ product }: { product: CartItem }) => {
  const productInfo = product.product;
  const mainPrice = getMainPrice(productInfo);
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
          <img
            className="size-full object-cover"
            src={productInfo.img}
            alt="title"
          />
        </div>
        <p className="line-clamp-1 w-[50%]">{getLocalizedName(productInfo)}</p>
      </td>
      <td className="text-center font-semibold">{priceFormatter(mainPrice)}</td>
      <td className="text-center">
        <QuantitySelector
          id={productInfo.id}
          isCartMenu
          currentQuantity={product.quantity}
        />
      </td>
      <td className="text-center font-semibold">
        {priceFormatter(mainPrice * product.quantity)}
      </td>
    </tr>
  );
};

export default CartTableCard;
