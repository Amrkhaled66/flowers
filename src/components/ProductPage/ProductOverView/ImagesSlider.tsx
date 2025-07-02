import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ActionButtons from "src/components/ProductPage/ProductOverView/ActionButton";

import Skeleton from "react-loading-skeleton";
interface ImageSliderProps {
  id: number;
  images: string[];
  initialIndex?: number;
  onShowImagesSlider: () => void;
  loading?: boolean;
}

const ImageSlider = ({
  id,
  images,
  initialIndex = 0,
  onShowImagesSlider,
  loading,
}: ImageSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const thumbsSwiperRef = useRef<SwiperType | null>(null);

  const handleMainSlideChange = (swiper: SwiperType) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);

    if (thumbsSwiperRef.current) {
      thumbsSwiperRef.current.slideTo(realIndex);
    }
  };

  const handleThumbClick = (index: number) => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(index);
    }
  };

  return (
    <div className={`flex h-auto flex-col gap-4`}>
      <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden rounded-xl sm:h-[680px] lg:h-[550px] lg:w-[540px]">
        {loading ? (
          <Skeleton
            className="!absolute !inset-0 !h-full !w-full"
            containerClassName="absolute inset-0"
          />
        ) : (
          <Swiper
            dir="ltr"
            modules={[Navigation, Thumbs]}
            spaceBetween={0}
            slidesPerView={1}
            speed={500}
            initialSlide={initialIndex}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            thumbs={{ swiper: thumbsSwiperRef.current }}
            onSlideChange={handleMainSlideChange}
            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
            className="border-stroke h-full w-full rounded-xl border"
          >
            {images.map((image, index) => (
              <SwiperSlide key={`main-${index}`}>
                <div className="flex h-full w-full items-center justify-center rounded-xl">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="h-full w-full rounded-xl object-cover object-center"
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {!loading && (
          <ActionButtons id={id} onShowImagesSlider={onShowImagesSlider} />
        )}
      </div>

      {images.length > 1 && (
        <div className="w-full px-2 py-1">
          {loading ? (
            <div className="flex gap-x-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="!h-[44px] !w-[44px] rounded-xl sm:!h-[50px] sm:!w-[50px] lg:!h-[117px] lg:!w-[117px]"
                />
              ))}
            </div>
          ) : (
            <Swiper
              modules={[Navigation, Thumbs]}
              spaceBetween={8}
              slidesPerView="auto"
              watchSlidesProgress
              onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
              className="!py-1"
            >
              {images.map((image, index) => (
                <SwiperSlide key={`thumb-${index}`} className="!h-20 !w-20">
                  <button
                    onClick={() => handleThumbClick(index)}
                    className={`h-full w-full overflow-hidden rounded-md border transition-all ${activeIndex === index ? "border-main" : "border-transparent"}`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                      draggable={false}
                      loading="lazy"
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
