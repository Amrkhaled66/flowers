import { useState, useRef, ReactNode, useEffect } from "react";
import SliderPoints from "src/components/ui/SliderPoints";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import NavigationBtn from "src/components/ui/NavigationBtn";

// Styles
import "swiper/css";
import "swiper/css/navigation";

// Types
import Product from "src/types/product";
import category from "src/types/BaseItem";

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
  notSpaceBetween?: boolean;
  targetIndex?: number;
  onChangeSlider?: (index: number) => void;
  speed?: number;
}

const Slider = ({
  items = [],
  children,
  slidesPerGroup = DEFAULT_SLIDES_PER_GROUP,
  isMenuSlider = false,
  notSpaceBetween = false,
  targetIndex = 0,
  onChangeSlider,
  speed
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
    onChangeSlider && onChangeSlider(swiper.realIndex);
  };

  const handleDotClick = (groupIndex: number) => {
    if (!swiperRef.current) return;

    const targetSlideIndex = isMenuSlider
      ? groupIndex
      : groupIndex * slidesPerGroup;

    swiperRef.current.slideTo(targetSlideIndex);
  };

  useEffect(() => {
    if (swiperRef.current && targetIndex >= 0) {
      swiperRef.current.slideTo(targetIndex);
      setActiveGroup((prev) => {
        const newGroup = isMenuSlider
          ? targetIndex
          : Math.floor(targetIndex / slidesPerGroup);
        return newGroup;
      });
    }
  }, [targetIndex, swiperRef]);

  return (
    <div className="size-full space-y-3">
      <div className="relative">
        <Swiper
          dir="ltr"
          speed={speed || 800}
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
              spaceBetween: notSpaceBetween ? 0 : 16,
            },
            [TABLET_BREAKPOINT]: {
              spaceBetween: notSpaceBetween ? 0 : 20,
              // slidesPerGroup: 1.5,
              slidesPerView: "auto",
            },
            [DESKTOP_BREAKPOINT]: {
              slidesPerView: isMenuSlider ? MOBILE_SLIDES_PER_VIEW : "auto",
              slidesPerGroup: isMenuSlider
                ? MOBILE_SLIDES_PER_VIEW
                : slidesPerGroup,
              spaceBetween: notSpaceBetween ? 0 : 25,
            },
          }}
          className="z-[10000] aspect-square h-full !overflow-visible last:ms-0 lg:w-full lg:!overflow-hidden"
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
          className="mx-auto lg:!flex"
        />
      )}
    </div>
  );
};

export default Slider;
