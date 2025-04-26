import { useState } from "react";

import { Icon } from "@iconify/react/dist/iconify.js";
const Images = ({ images }: { images: string[] | undefined }) => {
  const [activeImage, setActiveImage] = useState<number>(0);
  return (
    <div className="space-y-4 lg:space-y-6">
      <div className="relative overflow-hidden rounded-md lg:h-[540px] lg:w-[540px]">
        <img
          className="size-full object-cover object-center"
          src={images && images[activeImage]}
          alt=""
        />
        <div className="absolute top-2 right-2 flex flex-col gap-y-3">
          <button className="group rounded-xl bg-white p-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="stroke-main group-hover:fill-main fill-none stroke-2"
            >
              <path
                d="M12 20C12 20 21 16 21 9.71405C21 6 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12.7198 5.92016C12.3266 6.32798 11.6734 6.32798 11.2802 5.92016L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5 4 3 6 3 9.71405C3 16 12 20 12 20Z"
                stroke="#231D25"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="group rounded-xl bg-white p-2.5">
            <Icon icon="quill:share" width="24" height="24" />
          </button>
        </div>

        <button className="absolute right-2 bottom-2 rounded-xl !bg-white p-2.5">
          <Icon
            icon="material-symbols:zoom-out-map-rounded"
            width="24"
            height="24"
          />
        </button>
      </div>
      <div className="flex gap-4 sm:gap-5 lg:gap-6">
        {images?.map((image, index) => (
          <div
            className={`aspect-square h-[44px] overflow-hidden rounded-xl sm:h-[50px] lg:h-[117px] ${index === activeImage && "border-main border"}`}
          >
            <img
              onClick={() => setActiveImage(index)}
              key={index}
              src={image}
              alt=""
              className="size-full cursor-pointer rounded-sm object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
