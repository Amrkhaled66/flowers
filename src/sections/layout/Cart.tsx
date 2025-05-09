import Summary from "src/components/layout/Cart/Summary";
import Head from "src/components/layout/Cart/Head";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";
import CartMenuCard from "src/components/ui/CartCard";
import { products1 } from "src/data/products";
const Cart = () => {
  const { openCart, toggleCart } = useNavBarToggleBtns();
  return (
    <div
      className={`font-main text-text-main fixed top-0 right-0 z-[80] flex h-screen flex-col justify-between gap-y-6 overflow-y-scroll bg-white px-4 py-10 transition-all duration-300 sm:w-[375px] lg:w-[446px] lg:px-8 ${
        openCart ? "translate-x-0" : "translate-x-[100%]"
      } `}
    >
      <button
        onClick={toggleCart}
        className="bg-main absolute top-0 right-0 rounded-es-xl p-2.5 text-white"
      >
        <Icon icon="ic:outline-close" width="20" height="20" />
      </button>
      <Head />
      <div className="flex flex-1 flex-col">
        <div className="cart-menu flex-1 space-y-6">
          {products1.slice(0, 4).map((product, index) => (
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
