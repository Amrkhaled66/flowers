import { useState, useRef, ReactNode } from "react";
import SliderPoints from "src/components/ui/SliderPoints";
import NavigationBtn from "src/components/ui/NavigationBtn";

import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slidesPerGroup = 7;

const Slider = ({
  items,
  children,
}: {
  items: string[];
  children: ReactNode;
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeGroup, setActiveGroup] = useState(0);

  const totalGroups = Math.ceil(items.length / slidesPerGroup);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentGroup = Math.floor(swiper.realIndex / slidesPerGroup);
    setActiveGroup(currentGroup);
  };

  const handleDotClick = (groupIndex: number) => {
    if (swiperRef.current) {
      const targetSlideIndex = groupIndex * slidesPerGroup;
      swiperRef.current.slideTo(targetSlideIndex);
    }
  };

  return (
    <div className="relative space-y-8">
      <Swiper
        speed={800}
        className=" "
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          // When window width is < 1024px
          0: {
            slidesPerView: 1,
            spaceBetween: 8,
            slidesPerGroup: 1,
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
        }}
        loop={false}
        // navigation={true}
        modules={[Navigation]}
        onSlideChange={handleSlideChange}
      >
        {children}
      </Swiper>

      <NavigationBtn
        dir="left"
        className="!-left-9"
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <NavigationBtn
        dir="right"
        className="!-right-9"
        onClick={() => swiperRef.current?.slideNext()}
      />
      <SliderPoints
        currentIndex={activeGroup}
        onDotClick={handleDotClick}
        length={totalGroups}
        className="mx-auto !hidden lg:!flex"
      />
    </div>
  );
};

export default Slider;
