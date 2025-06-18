import SelectorView from "src/components/ui/Selectors/SelectorView";
import Button from "src/components/ui/Button";
import NavigationBar from "src/sections/ProductPage/NavigationBar";
import Skeleton from "react-loading-skeleton";
import TabbyPromo from "src/components/ui/TabbyPromo";
import OutLineButton from "src/components/ui/OutLineButton";

import { useAddToCartLogic } from "src/hooks/cart/useAddToCartLogic";
import { useTranslation } from "react-i18next";
import { ReactNode, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import priceFormatter from "src/utils/priceFormatter";
import { useCart } from "src/context/user/cartCtx";
import { useNavigate } from "react-router";

const shareProduct = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Awesome Product",
        text: "Check this out!",
        url: window.location.href,
      });
    } catch (err) {
      console.error("Share failed:", err);
    }
  } else {
    alert("Sharing not supported on this device/browser.");
  }
};

const Section = ({
  title,
  children,
  withBorder = true,
}: {
  title?: string;
  children: React.ReactNode;
  withBorder?: boolean;
}) => {
  return (
    <div
      className={`space-y-2 pb-4 lg:space-y-3 ${
        withBorder ? "border-b-stroke border-b" : ""
      }`}
    >
      {title && <p className="text-text-main font-bold">{title}</p>}
      {children}
    </div>
  );
};

const SocialIcon = ({
  icon,
  onClick,
}: {
  icon: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick}>
      <div className="animate w-fit rounded-xl bg-[#DADADA] p-1 hover:drop-shadow-xl">
        {icon}
      </div>
    </button>
  );
};

const Info = ({
  isOutOfStock,
  name,
  loading,
  id,
  afterDiscount,
  beforeDiscount,
}: {
  isOutOfStock: boolean;
  name: string | undefined;
  loading?: boolean;
  id: number;
  afterDiscount: number | undefined;
  beforeDiscount: number | undefined;
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [buying, setBuying] = useState(false);

  const { t } = useTranslation("shared");
  const { t: tProduct } = useTranslation("productPage");

  const { AddToCart, isLoading } = useAddToCartLogic();
  const { isProductInCart, getProductQuantity } = useCart();
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setQuantity(Number(value));
    }
  };

  const handleBlur = () => {
    if (quantity < 1) {
      setQuantity(1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
    }
  };

  const increase = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
  };

  const handleBuy = () => {
    if (isProductInCart(id)) return navigate("/cart");

    setBuying(true);
    AddToCart(id, quantity, () => {
      setBuying(false);
      navigate("/cart");
    });
  };

  const handleAddToCart = () => {
    const res = isProductInCart(id);
    if (!res) return AddToCart(id, 1);

    const currentQuantity = getProductQuantity(id);
    AddToCart(id, currentQuantity + quantity);
  };

  return (
    <div className="space-y-2 lg:w-[50%] lg:space-y-6">
      {loading ? (
        <div className="flex flex-col gap-y-4">
          <Skeleton count={4} height={20} />
          <div className="flex flex-col gap-y-2">
            <Skeleton containerClassName="!w-full rounded-xl" height={50} />
            <Skeleton containerClassName="!w-full rounded-xl" height={50} />
          </div>
        </div>
      ) : (
        <>
          <NavigationBar className="flex lg:hidden" name={name} />

          <Section withBorder>
            <h1 className="text-text-main font-bold sm:text-xl lg:text-[28px]">
              {name}
            </h1>
            <div className="flex flex-col gap-y-2">
              <p className="text-main space-x-1">
                {beforeDiscount !== afterDiscount ? (
                  <div className="flex flex-col items-start">
                    <p className="text-text-main text-3xl font-bold">
                      {priceFormatter(afterDiscount)}
                    </p>
                    <p className="text-text-main text-sm font-bold text-red-600 line-through">
                      {priceFormatter(beforeDiscount)}
                    </p>
                  </div>
                ) : (
                  <p className="text-text-main text-3xl font-bold">
                    {priceFormatter(afterDiscount)}
                  </p>
                )}
              </p>
              <p className="text-subTitle text-xs">{tProduct("tax")}</p>
            </div>
            <TabbyPromo price={afterDiscount} />
          </Section>
          {isOutOfStock ? (
            <div className="rounded-xl bg-red-600 p-2">
              <p className="text-white">{t("outOfStock")} </p>
            </div>
          ) : (
            <Section withBorder>
              <div className="space-y-4">
                {isProductInCart(id) && (
                  <SelectorView
                    onIncrease={increase}
                    onDecrease={decrease}
                    onBlur={handleBlur}
                    onChange={handleInputChange}
                    title={t("quantity")}
                    inputValue={String(quantity)}
                  />
                )}
                <div className="flex w-full flex-col gap-x-5 gap-y-4">
                  <Button
                    loading={isLoading && !buying}
                    text={tProduct("add")}
                    icon={
                      <Icon
                        icon="material-symbols:shopping-cart-outline-rounded"
                        className="size-5 lg:size-6"
                      />
                    }
                    onClick={() => handleAddToCart()}
                    className="hover:bg-main-300 animate w-full !text-base text-white lg:!py-4 lg:!text-lg"
                  />
                  <OutLineButton
                    loading={buying}
                    onClick={handleBuy}
                    text={tProduct("buy")}
                  />
                </div>
              </div>
            </Section>
          )}

          <div className="flex items-center gap-x-2">
            <span className="text-text-main font-medium">
              {tProduct("share")}:
            </span>
            <div className="text-subTitle flex gap-x-2">
              <SocialIcon
                onClick={shareProduct}
                icon={<Icon icon="humbleicons:share" width="30" height="30" />}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Info;
