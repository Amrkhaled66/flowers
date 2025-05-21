import CartTableCard from "src/components/Cart/ShippingBag/CartTable/CartTableCard";
import { useCart } from "src/context/user/cartCtx";

const CartTable = () => {
  const { cart } = useCart();
  return (
    <div className="hidden h-auto lg:block lg:w-[60%]">
      <div className="bg-main-50 w-full overflow-hidden rounded-xl p-4">
        <table className="h-full w-full">
          <thead className="hidden lg:block">
            <tr className="bg-main-100 grid grid-cols-[3fr_1fr_1fr_1fr] rounded-xl py-4">
              <th className="!ps-[70px] text-start">Product</th>
              <th className="text-center">Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            <div className="lg:pt-6">
              {cart &&
                cart.map((product, index) => (
                  <CartTableCard key={index} product={product} />
                ))}
            </div>
          </tbody>
          <tfoot className="">
            <div className="flex items-center justify-end gap-x-6 pt-4">
              <button className="font-bold">Clear Shopping Cart</button>
            </div>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
