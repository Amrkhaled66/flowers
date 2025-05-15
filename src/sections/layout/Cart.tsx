import Summary from "src/components/layout/Cart/Summary";
import Head from "src/components/layout/Cart/Head";
import { Icon } from "@iconify/react/dist/iconify.js";
import CartMenuCard from "src/components/ui/CartCard";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";
import { products1 } from "src/data/products";

const Cart = () => {
  const { openCart, toggleCart } = useNavBarToggleBtns();
  return (
    <div
      className={`text-text-main menu-bar fixed end-0 top-0 z-[80] flex h-screen flex-col justify-between gap-y-6 overflow-y-scroll bg-white px-4 py-[50px] transition-all duration-300 sm:w-[375px] lg:w-[446px] lg:px-8 ${
        openCart ? "end-0" : "end-[-150%]"
      } `}
    >
      <button
        onClick={toggleCart}
        className="bg-main absolute end-0 top-0 flex h-[44px] w-[44px] items-center justify-center rounded-es-xl text-white"
      >
        <Icon icon="ic:outline-close" width="20" height="20" />
      </button>
      <Head />
      <div className="flex flex-1 flex-col">
        <div className="cart-menu flex-1 space-y-6">
          {products1.slice(0, 5).map((product, index) => (
            <CartMenuCard
              key={index}
              img={product.img}
              name={product.name}
              price={product.price}
              quantity={2}
            />
          ))}
        </div>
        <Summary />
      </div>
    </div>
  );
};

export default Cart;
