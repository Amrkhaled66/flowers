import Button from "src/components/ui/Button";
import { Link } from "react-router-dom";

import { useNavBarToggleBtns } from "src/context/NavBarToggleBtns";

import priceFormatter from "src/utils/priceFormatter";
import { useTranslation } from "react-i18next";
const Summary = () => {
  const { toggleCart } = useNavBarToggleBtns();
  const { t } = useTranslation("layout");
  return (
    <div className="space-y-6">
      <div className="border-t-stroke flex justify-between border-t pt-4 text-lg font-bold">
        <p className="text-text-main text-xl">{t("cart.total")}</p>
        <p className="text-main">{priceFormatter(3200)}</p>
      </div>
      <div className="flex w-full gap-x-6">
        <Link className="w-full" to="/cart">
          <Button
            onClick={toggleCart}
            className="hover:bg-main-300 animate w-full !py-3 text-white"
            text={t("cart.showCart")}
          />
        </Link>
        <Link className="w-full" to={"/cart/delivery-info"}>
          <Button
            onClick={toggleCart}
            className="border-main !text-main w-full rounded-sm border !bg-transparent !py-3"
            text={t("cart.pay")}
          />
        </Link>
      </div>
    </div>
  );
};

export default Summary;
