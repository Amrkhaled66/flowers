import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getLocalizedName } from "src/utils/getLocalizedName";

import { useAddToCart, useUpdateCart } from "src/hooks/cart/useCartMutations";
import { useCart } from "src/context/user/cartCtx";
import { useTranslation } from "react-i18next";
import { useAuthGuard } from "src/hooks/shared/useAuthGuard";

import Product from "src/types/product";
import priceFormatter from "src/utils/priceFormatter";

const ProductCardUI = ({
  product,
  isFavorite = false,
  isFilterCard = false,
  children,
}: {
  product: Product;
  isFavorite?: boolean;
  isFilterCard?: boolean;
  children?: React.ReactNode;
}) => {
  const { isProductInCart } = useCart();
  const { mutate: addToCart, isPending: isAddPending } = useAddToCart();
  const { mutate: updateCart, isPending: isUpdatePending } = useUpdateCart();
  const {
    i18n: { language },
  } = useTranslation();
  const { check } = useAuthGuard();

  const handelAddToCart = async() => {
    const isAuthenticated = await check();
    if(!isAuthenticated) return
    
    isProductInCart(product.id)
      ? updateCart({ quantity: 3, id: product.id })
      : addToCart(product.id);
  };

  return (
    <div className="border-stroke w-full overflow-hidden rounded-2xl border bg-white drop-shadow-sm">
      {children}
      <Link className="z-0" to={`/product/${product.id}`}>
        <div
          className={`bg-main ${isFilterCard && "lg:!h-[310px]"} ${
            (isFilterCard || isFavorite) && "sm:!h-[195px]"
          } ${isFavorite && "!h-[310px] lg:!h-[310px]"} group h-[140px] overflow-hidden sm:h-[310px] lg:h-[282px]`}
        >
          <img
            src={product.images && product.images[0]}
            loading="lazy"
            alt="img"
            className="animate size-full object-cover object-center group-hover:scale-110"
          />
        </div>
        <div className="space-y-3 p-2 sm:p-3 lg:p-4">
          <div>
            <p
              className={`text-text-main line-clamp-4 text-start text-xs font-bold sm:text-xl lg:w-[90%] lg:text-base`}
            >
              {getLocalizedName(product, language)}
            </p>
          </div>
        </div>
      </Link>

      <div className="flex flex-row items-center justify-between gap-y-3 px-2 pb-2 sm:px-3 lg:px-4">
        <div className="flex w-full justify-start">
          <p className="text-text-main font-bold">
            {priceFormatter(product.beforeDiscount)}
          </p>
          {/* {discountedPrice && discountedPrice > 0 && (
        <p className="text-text-main font-bold">{discountedPrice}</p>
      )} */}
        </div>
        <button
          disabled={isAddPending || isUpdatePending}
          onClick={handelAddToCart}
          className={`hover:bg-main-700 focus:bg-main-900 animate bg-main flex place-items-center rounded-full p-2 text-white disabled:cursor-not-allowed sm:p-3 lg:p-4 ${
            (isAddPending || isUpdatePending) && "!animate-pulse"
          }`}
        >
          <Icon
            icon="material-symbols:shopping-cart-outline-rounded"
            width="24"
            height="24"
          />
        </button>
      </div>
    </div>
  );
};
export default ProductCardUI;
