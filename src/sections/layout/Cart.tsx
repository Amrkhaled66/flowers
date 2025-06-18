import Summary from "src/components/layout/Cart/Summary";
import Head from "src/components/layout/Cart/Head";
import { Icon } from "@iconify/react/dist/iconify.js";
import CartMenuCard from "src/components/ui/CartCard";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";
import { useCart } from "src/context/user/cartCtx";
import { useTranslation } from "react-i18next";
import useScrollLock from "src/hooks/ui/useScrollLock";

const Cart = () => {
  const { openCart, toggleCart } = useNavBarToggleBtns();
  const { cart, cartLength } = useCart();
  const { t } = useTranslation("layout");

  useScrollLock(openCart);

  return (
    <div
      className={`animate fixed end-0 top-0 z-[80] flex h-full w-[85%] justify-end transition-all duration-300 sm:w-[375px] lg:!w-[446px] ${
        openCart ? "end-0" : "end-[-150%]"
      }`}
    >
      <div
        className={`animate relative top-0 flex h-full w-full flex-col gap-y-6 bg-white px-4 lg:px-8`}
      >
        <button
          onClick={toggleCart}
          className="bg-main animate absolute top-1 right-1 flex h-[44px] w-[44px] items-center justify-center rounded-xl text-white hover:drop-shadow-xl"
        >
          <Icon icon="ic:outline-close" width="20" height="20" />
        </button>

        {/* Header */}
        <div className="pt-[50px]">
          <Head cartLength={cartLength} />
        </div>

        {/* Scrollable content area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Cart items */}
          <div className="flex-1 overflow-y-auto py-6">
            {cart && cartLength && cartLength > 0 ? (
              <div className="space-y-6">
                {cart.map((product, index) => (
                  <CartMenuCard key={index} product={product} />
                ))}
              </div>
            ) : (
              <p className="font-main text-text-main flex h-full items-center justify-center text-center">
                {t("cart.empty")}
              </p>
            )}
          </div>

          {/* Fixed summary at bottom */}
          <div className="border-t-stroke flex-shrink-0 border-t pt-4 pb-7">
            <Summary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
