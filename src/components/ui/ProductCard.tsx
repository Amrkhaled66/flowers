import Button from "./Button";

import { Icon } from "@iconify/react/dist/iconify.js";
const ProductCard = ({
  img,
  name,
  stars,
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
    <div className="border-stroke  w-full overflow-hidden rounded-[5px] border ">
      <div className="h-[140px] sm:h-[200px] lg:h-[282px]">
        <img
          src={img}
          loading="lazy"
          alt="img"
          className="size-full object-cover object-center"
        />
      </div>
      <div className="space-y-1 p-2 lg:space-y-3 lg:p-4">
        <div className="font-main">
          <p className="text-text-main line-clamp-4 text-left text-xs font-bold lg:w-[90%] lg:text-base">
            {name}
          </p>
        </div>
        <div className="flex">
          {Array.from({ length: stars }).map(() => (
            <Icon
              icon="radix-icons:star-filled"
              color="#78cbf3"
              width="16"
              height="16"
            />
          ))}
          {Array.from({ length: 5 - stars }).map(() => (
            <Icon
              icon="radix-icons:star"
              color="#78cbf3"
              width="16"
              height="16"
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-y-3 lg:flex-row">
          <div className="flex w-full justify-start">
            <p className="text-text-main font-bold">
              <span className="mr-1 text-left text-xs font-normal lg:text-center lg:text-base">
                Egp
              </span>
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
            className="!h-fit !w-full lg:!w-fit !py-2 !text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
