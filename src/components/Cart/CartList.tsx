import CartCard from "src/components/ui/CartCard";
import { useCart } from "src/context/user/cartCtx";
const CartList = () => {
  const { cart } = useCart();
  return (
    <div className="space-y-4">
      {cart &&
        cart.map((product, index) => (
          <CartCard isCartPage key={index} product={product} />
        ))}
    </div>
  );
};

export default CartList;
