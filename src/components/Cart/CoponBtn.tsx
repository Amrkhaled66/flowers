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
  const { t: tToast } = useTranslation("toast");

  const [error, setError] = useState("");
  const [coponCode, setCoponCode] = useState("");
  const { applyCoupon, removeCoupon, coupon } = useCart();

  const { mutate, isPending } = useApplyCoupon();
  const { updateOrder } = useOrder();
  
  const handleSubmit = () => {
    mutate(coponCode, {
      onSuccess: (data) => {
        if (!data) return;
        applyCoupon(data.data.code, data.data.discount);
        toast(tToast("copon.applied"), { type: "success" });
        updateOrder({
          coupon: data.data.code,
        });
        setError("");
      },
      onError: () => {
        setError(tCartShared("copon.notFound"));
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
          `bg-main-50 border-stroke relative flex w-full items-center rounded-xl border py-2 pe-1.5`,
          { "border border-green-600 bg-green-50": coupon },
        )}
      >
        <input
          placeholder={tCartShared("copon.placeholder")}
          className="focus:placeholder:text-main placeholder:!text-subTitle flex-1 px-4 py-2 disabled:cursor-not-allowed"
          type="text"
          name="code"
          value={coponCode || coupon?.code}
          onChange={(e) => setCoponCode(e.target.value)}
          disabled={coupon ? true : false}
        />
        <Button
          onClick={coupon ? handleRemoveCode : handleSubmit}
          loading={isPending}
          text={
            coupon ? tCartShared("copon.remove") : tCartShared("copon.apply")
          }
          className={clsx(
            `rounded-xl px-1 py-1 !text-sm font-bold text-white`,
            {
              "bg-red-600 text-xs hover:!bg-red-700": coupon,
            },
          )}
          disabled={isPending}
        />
      </div>
      {error && <p className="text-red mt-1 px-4 text-sm">{error}</p>}
    </div>
  );
};

export default CoponBtn;
