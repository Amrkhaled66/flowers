import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import Button from "src/components/ui/Button";
import { Link } from "react-router-dom";
import OutLineButton from "src/components/ui/OutLineButton";

import { useLocation } from "react-router";
import { useOrder } from "src/context/orderCtx";
import { useCart } from "src/context/user/cartCtx";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
const SuccessOrder = () => {
  const { t } = useTranslation("successOrder");
  const { clearCart } = useCart();
  const { resetOrder } = useOrder();
  const location = useLocation();
  const orderId = location.state?.orderId;

  useEffect(() => {
    if (!orderId) return;
    clearCart();
    resetOrder();
  }, []);

  if (!orderId) return <Navigate to="/" replace />;

  return (
    <div className="text-text-main flex h-fit flex-col items-center justify-center px-4 py-6 text-center sm:py-8 lg:h-dvh">
      <div className="relative mb-8">
        <Icon icon="mdi:gift" width="74" height="74" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] rounded-full bg-white p-1">
          <Icon icon="material-symbols:check" width="24" height="24" />
        </div>
      </div>
      <h1 className="mb-3 text-[32px] font-bold">{t("header")}</h1>
      <div className="w-full space-y-8">
        <div className="space-y-2">
          <p className="">
            {t("subHeader")}
            <Icon className="inline" icon="tabler:heart-filled" />
          </p>
          <p className="flex flex-col items-center justify-center gap-y-1 lg:flex-row">
            <span className="font-bold">
              {t("orderNumber")} : {String(orderId)}
            </span>{" "}
            <span>{t("time")}</span>
          </p>
          <p>{t("description")}</p>
        </div>
        <div className="flex w-full flex-col justify-center gap-6 lg:flex-row">
          <Link to={`/track-order/${orderId}`}>
            <Button
              text={t("track")}
              className="animate w-full !py-3 text-white lg:w-[240px]"
            />
          </Link>
          <Link to="/filter">
            <OutLineButton onClick={() => {}} text={t("completeShop")} />
          </Link>
        </div>
        <p>{t("footer")}</p>
      </div>
    </div>
  );
};

export default SuccessOrder;
