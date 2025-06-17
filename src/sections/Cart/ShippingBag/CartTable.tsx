import CartTableCard from "src/components/Cart/ShippingBag/CartTable/CartTableCard";
import { useCart } from "src/context/user/cartCtx";
import { useTranslation } from "react-i18next";
import { useClearCart } from "src/hooks/cart/useCartMutations";
const CartTable = () => {
  const { cart } = useCart();
  const { t } = useTranslation("shippingBag");
  const { mutate: clearCart, isPending } = useClearCart();

  return (
    <div className="hidden h-auto lg:block lg:w-[60%]">
      <div className="bg-main-50 w-full overflow-hidden rounded-xl p-4">
        <table className="h-full w-full">
          <thead className="hidden lg:block">
            <tr className="bg-main-100 grid grid-cols-[3fr_1fr_1fr_1fr] rounded-xl py-4">
              <th className="!ps-[70px] text-start">{t("cartTable.product")}</th>
              <th className="text-center">{t("cartTable.price")}</th>
              <th className="text-center">{t("cartTable.quantity")}</th>
              <th className="text-center">{t("cartTable.total")}</th>
            </tr>
          </thead>
          <tbody className="lg:pt-6">
            {cart &&
              cart.map((product) => (
                <CartTableCard key={product.id} product={product} />
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td  className="text-end pt-4">
                <button
                  onClick={() => clearCart()}
                  className={`${isPending && "pointer-events-none animate-pulse"} font-bold`}
                >
                  {t("cartTable.clearCart")}
                </button>
              </td>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  );
};

export default CartTable;
