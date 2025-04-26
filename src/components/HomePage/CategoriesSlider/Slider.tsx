import { useState, useRef, ReactNode } from "react";
import SliderPoints from "src/components/ui/SliderPoints";
import NavigationBtn from "src/components/ui/NavigationBtn";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

// Styles
import "swiper/css";
import "swiper/css/navigation";

// Types
import Product from "src/types/product";
import category from "src/types/category";

// Constants
const DEFAULT_SLIDES_PER_GROUP = 7;
const DESKTOP_BREAKPOINT = 1024;
const TABLET_BREAKPOINT = 744;
const MOBILE_SLIDES_PER_VIEW = 1;

interface SliderProps {
  items?: category[] | Product[] | string[];
  children: ReactNode;
  slidesPerGroup?: number;
  isMenuSlider?: boolean;
}

const Slider = ({
  items = [],
  children,
  slidesPerGroup = DEFAULT_SLIDES_PER_GROUP,
  isMenuSlider = false,
}: SliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeGroup, setActiveGroup] = useState(0);

  const totalGroups = Math.ceil(items.length / slidesPerGroup);
  const shouldShowNavigation = totalGroups > 1;

  const handleSlideChange = (swiper: SwiperType) => {
    const currentGroup = isMenuSlider
      ? swiper.realIndex
      : Math.ceil(swiper.realIndex / slidesPerGroup);
    setActiveGroup(currentGroup);
  };

  const handleDotClick = (groupIndex: number) => {
    if (!swiperRef.current) return;

    const targetSlideIndex = isMenuSlider
      ? groupIndex
      : groupIndex * slidesPerGroup;

    swiperRef.current.slideTo(targetSlideIndex);
  };

  return (
    <div className="w-full lg:w-full lg:space-y-8">
      <div className="relative">
        <Swiper
          speed={800}
          loop={false}
          modules={[Navigation]}
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          watchOverflow={true}
          breakpoints={{
            0: {
              // slidesPerGroup: 1.5,
              slidesPerView: "auto",
              spaceBetween: 16,
            },
            [TABLET_BREAKPOINT]: {
              spaceBetween: 20,
              // slidesPerGroup: 1.5,
              slidesPerView: "auto",
            },
            [DESKTOP_BREAKPOINT]: {
              slidesPerView: isMenuSlider ? MOBILE_SLIDES_PER_VIEW : "auto",
              slidesPerGroup: isMenuSlider
                ? MOBILE_SLIDES_PER_VIEW
                : slidesPerGroup,
              spaceBetween: 25,
            },
          }}
          className="z-[10000] !overflow-visible last:mr-0 lg:w-full lg:!overflow-hidden"
        >
          {children}
        </Swiper>

        {shouldShowNavigation && (
          <>
            <NavigationBtn
              dir="left"
              className={isMenuSlider ? "!-left-5" : "!-left-14"}
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
            />
            <NavigationBtn
              dir="right"
              className={isMenuSlider ? "!-right-5" : "!-right-14"}
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
            />
          </>
        )}
      </div>

      {shouldShowNavigation && (
        <SliderPoints
          currentIndex={activeGroup}
          onDotClick={handleDotClick}
          length={totalGroups}
          className="mx-auto !hidden lg:!flex"
        />
      )}
    </div>
  );
};

export default Slider;
