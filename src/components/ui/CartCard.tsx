import { Icon } from "@iconify/react/dist/iconify.js";
import QuantitySelector from "src/components/ui/Selectors/QuantitySelector";
import { CartItem } from "src/types/cart";

import priceFormatter from "src/utils/priceFormatter";
import getMainPrice from "src/utils/getMainPrice";
import { getLocalizedName } from "src/utils/getLocalizedName";

import { useDeleteCart } from "src/hooks/cart/useCartMutations";
const CartMenuCard = ({
  product,
  isCartPage,
}: {
  product: CartItem;
  isCartPage?: boolean;
}) => {
  const cartProduct = product.product;

  const { mutate: deleteCart } = useDeleteCart();
  const handleDelete = () => deleteCart(product.id);
  return (
    <div
      className={` ${isCartPage && "bg-main-50 p-3 lg:p-4"} border-b-stroke text-text-main flex gap-x-3 rounded-xl border-b pb-4`}
    >
      <div className="h-20 w-20 overflow-hidden rounded-xl  lg:h-25 lg:w-25">
        <img
          src={cartProduct.firstImage}
          alt={cartProduct.nameEn}
          className="size-full object-cover object-center"
        />
      </div>
      <div className="flex w-full flex-1 flex-col justify-between">
        <div className="flex items-center justify-between">
          <p
            className={`line-clamp-1 max-w-[90%] text-xs text-wrap lg:text-sm ${isCartPage && "lg:font-bold"}`}
          >
            {getLocalizedName(cartProduct)}
          </p>
          <button onClick={handleDelete}>
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
            {priceFormatter(getMainPrice(cartProduct))}
          </p>
          <QuantitySelector id={product.id} isCartMenu currentQuantity={product.quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartMenuCard;
