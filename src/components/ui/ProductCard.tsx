import Button from "./Button";

import { Icon } from "@iconify/react/dist/iconify.js";
const ProductCard = ({
  img,
  name,
  // stars,
  price,
  // discountedPrice,
}: {
  img: string;
  name: string;
  stars: number;
  price: number;
  discountedPrice?: number;
}) => {
  return (
    <div className="border-stroke overflow-hidden rounded-[5px] border">
      <div className="h-[282px]">
        <img
          src={img}
          loading="lazy"
          alt="img"
          className="size-full object-cover object-center"
        />
      </div>
      <div className="space-y-3 p-4">
        <div className="font-main">
          <p className="text-text-main w-[90%] text-left font-bold">{name}</p>
        </div>
        <div>stars</div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <p className="text-text-main font-bold">
              <span className="mr-1 font-normal">Egp</span>
              {price}
            </p>
            {/* {discountedPrice && discountedPrice > 0 && (
            <p className="text-text-main font-bold">{discountedPrice}</p>
          )} */}
          </div>
          <Button
            text="Add"
            icon={
              <Icon
                icon="material-symbols:shopping-cart-outline-rounded"
                width="24"
                height="24"
              />
            }
            className="!text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
