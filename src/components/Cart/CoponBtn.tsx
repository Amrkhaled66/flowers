import { useTranslation } from "react-i18next";
import { useOrder } from "src/context/orderCtx";
import { useApplyCoupon } from "src/hooks/cart/useCartMutations";
import { useState } from "react";
import { useCart } from "src/context/user/cartCtx";
import Button from "src/components/ui/Button";
import { toast } from "react-toastify";

import clsx from "clsx";
const CoponBtn = () => {
  const { t: tCartShared } = useTranslation("sharedCart");
  const { t } = useTranslation("shared");
  const { mutate, isPending } = useApplyCoupon();
  const [error, setError] = useState("");
  const { applyCoupon, removeCoupon, coupon } = useCart();
  const [coponCode, setCoponCode] = useState("");
  const { updateOrder } = useOrder();
  const handleSubmit = () => {
    mutate(coponCode, {
      onSuccess: (data) => {
        applyCoupon(data.data.code, data.data.discount);
        toast("Coupon applied successfully", { type: "success" });
        updateOrder({
          coupon: data.data.discount,
        });
        setError("");
      },
      onError: (err: any) => {
        setError(err.response.data.message);
      },
    });
  };

  const handleRemoveCode = () => {
    removeCoupon();
    setCoponCode("");
  };
  return (
    <div>
      <div
        className={clsx(
          `bg-main-50 border-stroke relative flex w-full items-center rounded-xl border pe-1.5`,
        )}
      >
        <input
          placeholder={tCartShared("copon.placeholder")}
          className="focus:placeholder:text-main placeholder:!text-subTitle flex-1 px-4 py-2 disabled:cursor-not-allowed"
          type="text"
          name="code"
          value={coponCode}
          onChange={(e) => setCoponCode(e.target.value)}
          disabled={coupon ? true : false}
        />
        {error && <span className="text-red text-sm">{error}</span>}
        <Button
          onClick={coupon ? handleRemoveCode : handleSubmit}
          loading={isPending}
          text={coupon ? t("delete") : tCartShared("copon.apply")}
          className="bg-main h-[50px] w-[100px] rounded-xl !text-sm font-bold text-white"
        />
      </div>
      {error && <p className="text-red mt-1 px-4 text-sm">{error}</p>}
    </div>
  );
};

export default CoponBtn;
