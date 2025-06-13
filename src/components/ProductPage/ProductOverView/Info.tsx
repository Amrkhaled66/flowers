import React from "react";

import QuantitySelector from "src/components/ui/Selectors/QuantitySelector";
import Button from "src/components/ui/Button";
import NavigationBar from "src/sections/ProductPage/NavigationBar";
import Skeleton from "react-loading-skeleton";
import TabbyPromo from "src/components/ui/TabbyPromo";

import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode } from "react";
import priceFormatter from "src/utils/priceFormatter";

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
  name,
  price,
  loading,
}: {
  name: string | undefined;
  price: number | undefined;
  loading?: boolean;
}) => {
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
                <span className="text-[28px] font-bold">
                  {priceFormatter(price)}
                </span>
              </p>
              <p className="text-subTitle text-xs">All prices include tax</p>
            </div>
            <TabbyPromo price={price} />
          </Section>

          <Section withBorder>
            <div className="space-y-4">
              <QuantitySelector id={5} />
              <div className="flex w-full flex-col gap-x-5 gap-y-4">
                <Button
                  text="Add To Cart"
                  icon={
                    <Icon
                      icon="material-symbols:shopping-cart-outline-rounded"
                      className="lg:size-6 size-5"
                    />
                  }
                  className="hover:bg-main-300 animate w-full !text-base lg:!text-lg text-white lg:!py-4"
                />
                <button className="border-main text-main flex-1 rounded-xl border-2 !py-3 text-center text-base lg:text-lg font-bold">
                  Buy Now
                </button>
              </div>
            </div>
          </Section>

          <div className="flex items-center gap-x-2">
            <span className="text-text-main font-medium">Share:</span>
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
