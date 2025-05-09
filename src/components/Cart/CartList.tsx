import { products1 } from "src/data/products";
import CartCard from "src/components/ui/CartCard";

const CartList = () => {
  return (
    <div className="space-y-4">
      {products1.slice(0, 4).map((product, index) => (
        <CartCard
          isCartPage
          key={index}
          img={product.img}
          name={product.name}
          price={product.price}
          quantity={2}
        />
      ))}
    </div>
  );
};

export default CartList;
