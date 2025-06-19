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
  weight,
  height,
}: {
  isOutOfStock: boolean;
  name: string | undefined;
  loading?: boolean;
  id: number;
  afterDiscount: number | undefined;
  beforeDiscount: number | undefined;
  weight: string | undefined;
  height: string | undefined;
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
              <div className="text-main space-x-1">
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
              </div>
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

          <div className="space-y-6">
            <div className="flex items-center gap-x-2">
              <span className="text-text-main font-medium">
                {tProduct("share")}:
              </span>
              <div className="text-subTitle flex gap-x-2">
                <SocialIcon
                  onClick={shareProduct}
                  icon={
                    <Icon icon="humbleicons:share" width="30" height="30" />
                  }
                />
              </div>
            </div>

            {(weight || height) && (
              <div className="flex items-center gap-x-2 lg:gap-x-5">
                <p className=" text-xl lg:text-2xl font-bold">{tProduct("dimensions")}:</p>
                <div className="flex items-center gap-x-1 lg:gap-x-3">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="8"
                      viewBox="0 0 26 8"
                      fill="none"
                      className="rotate-90"
                    >
                      <path
                        d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM1 4V4.5H25V4V3.5H1V4Z"
                        fill="#534457"
                      />
                    </svg>

                    <div className="space-y-1">
                      <div className="bg-main-100 border-main size-6 rounded-lg border"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="8"
                        viewBox="0 0 26 8"
                        fill="none"
                      >
                        <path
                          d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM25.3536 4.35355C25.5488 4.15829 25.5488 3.84171 25.3536 3.64645L22.1716 0.464466C21.9763 0.269204 21.6597 0.269204 21.4645 0.464466C21.2692 0.659728 21.2692 0.976311 21.4645 1.17157L24.2929 4L21.4645 6.82843C21.2692 7.02369 21.2692 7.34027 21.4645 7.53553C21.6597 7.7308 21.9763 7.7308 22.1716 7.53553L25.3536 4.35355ZM1 4V4.5H25V4V3.5H1V4Z"
                          fill="#534457"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <ol>
                      {height && (
                        <li className="flex lg:text-xl">
                          <Icon icon="mdi:dot" className="size-7" />
                          {tProduct("height")} : {height}
                        </li>
                      )}
                      {weight && (
                        <li className="flex lg:text-xl">
                          <Icon icon="mdi:dot" className="size-7" />
                          {tProduct("weight")} : {weight}
                        </li>
                      )}
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Info;
