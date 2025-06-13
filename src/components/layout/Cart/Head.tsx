import { useTranslation } from "react-i18next";
import { useClearCart } from "src/hooks/cart/useCartMutations";
const Head = ({ cartLength }: { cartLength?: number }) => {
  const { t } = useTranslation("layout");
  const { mutate: clearCart, isPending } = useClearCart();
  return (
    <div className="border-stroke flex justify-between border-b pb-4">
      <p className="font-bold">
        {t("cart.title")}{" "}({cartLength})
      </p>
      <button disabled={cartLength === 0 || isPending} onClick={() => clearCart()} className={`underline disabled:!cursor-not-allowed ${isPending && "pointer-events-none animate-pulse "}`}>{t("cart.remove")}</button>
    </div>
  );
};

export default Head;
