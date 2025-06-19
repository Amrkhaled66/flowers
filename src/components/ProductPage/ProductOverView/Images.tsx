import { useState } from "react";
import { Icon } from "@iconify/react";
import Skeleton from "react-loading-skeleton";
import FavoriteButton from "src/components/ui/ProductCard/FavoriteButton";
import Slider from "src/components/HomePage/Categories/Slider";
import { SwiperSlide } from "swiper/react";

type ImagesProps = {
  images?: string[];
  loading?: boolean;
  onShowImagesSlider: () => void;
  id: number;
};

const Images = ({ id, images, loading, onShowImagesSlider }: ImagesProps) => {
  const [activeImage, setActiveImage] = useState(0);

  const MainImage = () => (
    <Slider
      speed={500}
      slidesPerGroup={1}
      targetIndex={activeImage}
      onChangeSlider={setActiveImage}
      notSpaceBetween
    >
      {images?.map((img) => (
        <SwiperSlide key={img} className="flex items-center justify-center">
          {" "}
          {/* 👉 Center content inside slide */}
          <img
            className="max-h-full max-w-full object-contain lg:rounded-xl" // 👉 `object-contain` prevents cropping
            src={img}
            alt="Product image"
          />
        </SwiperSlide>
      ))}
    </Slider>
  );

  const ActionButtons = () => {
    return (
      <>
        <div className="absolute top-2 right-2 z-10">
          <FavoriteButton productId={id} />
        </div>

        <button
          onClick={onShowImagesSlider}
          className="animate absolute right-2 bottom-2 z-10 rounded-xl bg-white p-2.5 hover:drop-shadow-xl"
        >
          <Icon icon="lets-icons:full-alt" width="24" height="24" />
        </button>
      </>
    );
  };

  const renderThumbnails = () =>
    images?.map((image, index) => (
      <div
        key={image}
        className={`aspect-square h-[44px] overflow-hidden rounded-xl sm:h-[50px] lg:h-[117px] ${
          index === activeImage ? "border-main border" : ""
        }`}
      >
        <img
          src={image}
          onClick={() => setActiveImage(index)}
          className="size-full cursor-pointer rounded-sm object-cover object-center"
          alt="Thumbnail"
        />
      </div>
    ));

  const renderThumbnailSkeletons = () =>
    Array.from({ length: 4 }).map((_, i) => (
      <Skeleton
        key={i}
        className="!h-[44px] !w-[44px] rounded-xl sm:!h-[50px] sm:!w-[50px] lg:!h-[117px] lg:!w-[117px]"
      />
    ));

  return (
    <div className="flex flex-col gap-y-4 lg:gap-y-6">
      <div className="relative flex h-[343px] w-full items-center justify-center overflow-hidden rounded-xl sm:h-[680px] lg:h-[540px] lg:w-[540px]">
        {loading ? (
          <Skeleton className="!h-full !w-full" />
        ) : (
          <>
            <MainImage />
            <ActionButtons />
          </>
        )}
      </div>

      {/* 👉 Thumbnails row */}
      <div className="flex gap-4 sm:gap-5 lg:gap-6">
        {loading ? renderThumbnailSkeletons() : renderThumbnails()}
      </div>
    </div>
  );
};

export default Images;
