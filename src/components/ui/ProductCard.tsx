import { Link } from "react-router-dom";

import { Icon } from "@iconify/react/dist/iconify.js";

const ProductCard = ({
  img,
  name,
  price,
  // discountedPrice,
}: {
  img: string;
  name: string;
  price: number;
  discountedPrice?: number;
}) => {
  return (
    <Link to={`/product/${name}`}>
      <div className="border-stroke w-full bg-white  overflow-hidden rounded-2xl border">
        <div className="h-[140px] sm:h-[310px] lg:h-[282px]">
          <img
            src={img}
            loading="lazy"
            alt="img"
            className="size-full object-cover object-center"
          />
        </div>
        <div className="p-2 space-y-3 sm:p-3 lg:p-4">
          <div className="font-main">
            <p className="text-text-main line-clamp-4 text-left text-xs font-bold sm:text-xl lg:w-[90%] lg:text-base">
              {name}
            </p>
          </div>

          <div className="flex flex-row items-center justify-between gap-y-3">
            <div className="flex w-full justify-start">
              <p className="text-text-main font-bold">
                <span className="mr-1 text-left text-xs font-normal lg:text-center lg:text-base">
                  AED
                </span>
                {price}
              </p>
              {/* {discountedPrice && discountedPrice > 0 && (
            <p className="text-text-main font-bold">{discountedPrice}</p>
          )} */}
            </div>
            <button className="hover:bg-main-300 animate bg-main flex place-items-center rounded-full p-2 sm:p-3 text-white lg:p-4">
              <Icon
                icon="material-symbols:shopping-cart-outline-rounded"
                width="24"
                height="24"
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
