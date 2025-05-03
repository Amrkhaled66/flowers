import React from "react";

import QuantitySelector from "src/components/ui/QuantitySelector";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "src/components/ui/Button";
import { ReactNode } from "react";
import NavigationBar from "src/sections/ProductPage/NavigationBar";
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

const SocialIcon = ({ icon }: { icon: ReactNode }) => {
  return (
    <button className="w-fit rounded-sm bg-[#F4F4F4] p-2.5">{icon}</button>
  );
};

const Info = ({
  name,
  price,
  stars,
  reviews,
  description,
  category,
}: {
  name: string | undefined;
  price: number | undefined;
  stars: number | undefined;
  reviews: number | undefined;
  description: string | undefined;
  category: string | undefined;
}) => {
  return (
    <div className="font-main space-y-2 lg:w-[50%] lg:space-y-6">
      <NavigationBar className="flex lg:hidden" name={name} />

      <Section withBorder>
        <h1 className="text-text-main font-bold sm:text-xl lg:text-[28px]">
          {name}
        </h1>
        <div className="flex flex-col gap-y-2">
          <p className="text-main space-x-1">
            <span className="text-xl">AED</span>
            <span className="text-[28px] font-bold">{price}</span>
          </p>
          <p className="text-subTitle text-xs">All prices include tax</p>
        </div>
      </Section>

      <Section withBorder>
        <div className="space-y-4">
          <QuantitySelector />
          <div className="flex w-full flex-col gap-x-5 gap-y-4">
            <Button
              text="Add To Cart"
              icon={
                <Icon
                  icon="material-symbols:shopping-cart-outline-rounded"
                  width="24"
                  height="24"
                />
              }
              className="hover:bg-main-300 animate w-full  lg:!py-4 !text-lg text-white"
            />
            <button className="border-main text-main flex-1 rounded-xl border-2 !py-3 text-center text-lg font-bold">
              Buy Now
            </button>
          </div>
        </div>
      </Section>

      <div className="flex items-center gap-x-2">
        <span className="text-text-main font-medium">Share:</span>
        <div className="text-subTitle flex gap-x-2">
          <SocialIcon
            icon={
              <Icon
                className="text-main h-[20px] w-[20px]"
                icon="ri:facebook-fill"
              />
            }
          />
          <SocialIcon
            icon={
              <Icon
                className="text-main h-[20px] w-[20px]"
                icon="ri:twitter-fill"
              />
            }
          />
          <SocialIcon
            icon={
              <Icon
                className="text-main h-[20px] w-[20px]"
                icon="ri:instagram-fill"
              />
            }
          />
          <SocialIcon
            icon={
              <Icon
                className="text-main h-[20px] w-[20px]"
                icon="ri:linkedin-fill"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
