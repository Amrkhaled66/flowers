import Button from "src/components/ui/Button";
import { Link } from "react-router-dom";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";

import priceFormatter from "src/utils/priceFormatter";
import { useTranslation } from "react-i18next";
import { useCart } from "src/context/user/cartCtx";

import OutLineButton from "src/components/ui/OutLineButton";

const Summary = () => {
  const { toggleCart } = useNavBarToggleBtns();
  const { cartSubTotal, cartLength } = useCart();
  const { t } = useTranslation("layout");
  return (
    <div className="space-y-6">
      <div className="border-t-stroke flex justify-between border-t pt-4 text-lg font-bold">
        <p className="text-text-main text-xl">{t("cart.total")}</p>
        <p className="text-main">{priceFormatter(cartSubTotal)}</p>
      </div>
      <div className="flex w-full gap-x-6">
        <Link className="w-full" to="/cart">
          <Button
            disabled={cartLength === 0}
            onClick={toggleCart}
            className={`hover:bg-main-300 animate w-full !py-3 text-white disabled:!cursor-not-allowed `}
            text={t("cart.showCart")}
          />
        </Link>
        <Link className="w-full" to={"/cart/delivery-info"}>
          <OutLineButton
            onClick={() => toggleCart()}
            disabled={cartLength === 0}
            text={t("cart.pay")}
          />
        </Link>
      </div>
    </div>
  );
};

export default Summary;
