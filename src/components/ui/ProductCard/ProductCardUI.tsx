import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getLocalizedName } from "src/utils/getLocalizedName";

import { useAddToCartLogic } from "src/hooks/cart/useAddToCartLogic";
import { useTranslation } from "react-i18next";

import Product from "src/types/product";
import priceFormatter from "src/utils/priceFormatter";
import { useCart } from "src/context/user/cartCtx";

const ProductCardUI = ({
  product,
  // isFavorite = false,
  // isFilterCard = false,
  children,
}: {
  product: Product;
  isFavorite?: boolean;
  isFilterCard?: boolean;
  children?: React.ReactNode;
}) => {
  const {
    i18n: { language },
    t,
  } = useTranslation("shared");
  const { AddToCart, isLoading } = useAddToCartLogic();
  const { isProductInCart, cart } = useCart();

  const isOutOfStock = product.stock <= 0;

  const handleAdd = () => {
    const res = isProductInCart(product.id);
    if (!res) return AddToCart(product.id, 1);
    const qnt =
      cart.find((item) => item.product.id === product.id)?.quantity || 0;
    AddToCart(product.id, qnt + 1);
  };

  return (
    <div className="border-stroke animate flex w-full flex-col justify-between overflow-hidden rounded-2xl border bg-white drop-shadow-sm hover:drop-shadow-xl">
      {children}

      <Link to={`/product/${product.id}`} className="z-0">
        <img
          src={product.images ? product.images[0] : product.firstImage}
          alt="img"
          loading="lazy"
          className="animate w-full object-cover"
        />
        <div className="space-y-3 p-2 sm:p-3 lg:p-4">
          <p className="text-text-main line-clamp-4 text-start text-xs font-bold sm:text-xl lg:w-[90%] lg:text-base">
            {getLocalizedName(product, language)}
          </p>
        </div>
      </Link>

      {isOutOfStock ? (
        <div className="mx-auto mb-4 w-[90%] rounded-xl bg-red-600 p-2">
          <p className="text-xs text-white sm:text-base">{t("outOfStock")}</p>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between px-2 pb-2 sm:px-3 lg:px-4">
          <div className="flex w-full justify-start">
            {product.afterDiscount !== product.beforeDiscount ? (
              <div className="flex flex-col items-start">
                <p className="text-text-main font-bold">
                  {priceFormatter(product.afterDiscount)}
                </p>
                <p className="text-sm font-bold text-red-600 line-through">
                  {priceFormatter(product.beforeDiscount)}
                </p>
              </div>
            ) : (
              <p className="text-text-main font-bold">
                {priceFormatter(product.afterDiscount)}
              </p>
            )}
          </div>

          <button
            disabled={isLoading}
            onClick={handleAdd}
            className={`bg-main hover:bg-main-700 focus:bg-main-900 flex items-center rounded-full p-2 text-white transition disabled:cursor-not-allowed sm:p-3 lg:p-4 ${
              isLoading && "!animate-pulse"
            }`}
          >
            <Icon
              icon="material-symbols:shopping-cart-outline-rounded"
              width="24"
              height="24"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCardUI;
