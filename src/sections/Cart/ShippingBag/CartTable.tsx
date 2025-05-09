import img from "src/assets/products/1.webp";
import img2 from "src/assets/products/2.webp";
import CartTableCard from "src/components/Cart/ShippingBag/CartTable/CartTableCard";
import CartEle from "src/types/CartEle";
const cards: CartEle[] = [
  {
    id: 1,
    img: img,
    title: "Ballora Floward",
    price: 1000,
    quantity: 2,
  },
  {
    id: 2,
    img: img,
    title: "Ballora Floward",
    price: 1000,
    quantity: 2,
  },
  {
    id: 2,
    img: img2,
    title: "Ballora Floward",
    price: 1000,
    quantity: 2,
  },
  {
    id: 2,
    img: img2,
    title: "Ballora Floward",
    price: 1000,
    quantity: 2,
  },
];

const CartTable = () => {
  return (
    <div className="h-auto hidden lg:block lg:w-[60%]">
      <div className="bg-main-50 w-full overflow-hidden rounded-xl p-4">
        <table className="h-full  w-full">
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
              {cards.map((card, index) => (
                <CartTableCard key={index} ele={card} />
              ))}
            </div>
          </tbody>
          <tfoot className="">
            <div className="flex items-center justify-end gap-x-6 pt-4">
              <button className="font-main font-bold">
                Clear Shopping Cart
              </button>
            </div>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default CartTable;
