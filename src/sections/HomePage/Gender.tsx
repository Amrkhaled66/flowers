import HomePageSection from "src/components/ui/HomePageSection";
import SectionTitle from "src/components/ui/SectionTitle";
import Slider from "src/components/HomePage/CategoriesSlider/Slider";
import brands from "src/data/brands";
import { SwiperSlide } from "swiper/react";

import genders from "src/data/genders";
const Gender = () => {
  return (
    <HomePageSection className="mb-[32px] bg-white">
      <div className="space-y-5 lg:space-y-10">
        <div className="space-y-4">
          <SectionTitle title="Gifts for everyone" />
          <button className="font-main bg-main-100 text-text-main mx-auto hidden rounded-sm border-2 border-white px-4 py-2.5 font-bold lg:block">
            Show All
          </button>
        </div>
        <Slider slidesPerGroup={6} items={brands}>
          {genders.map((brand, index) => (
            <SwiperSlide
              key={index}
              className="!w-[140px] sm:!w-[156px] lg:!w-[180px]"
            >
              <div className="space-y-3">
                <div
                  className="bg-main-100 relative h-[164px] w-[140px] cursor-pointer rounded-ss-[100px] rounded-se-[100px] sm:w-[156px] lg:h-[216px] lg:!w-[180px]"
                  key={index}
                >
                  <img
                    className="absolute bottom-0 left-1/2 mx-auto h-[95%] -translate-x-1/2 object-cover lg:w-[65%]"
                    src={brand.img}
                    alt="brand"
                  />
                </div>
                <p className="text-text-main text-center text-sm font-bold">
                  {brand.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
        <button className="font-main bg-main-100 text-text-main mx-auto block w-full rounded-sm px-4 py-2.5 font-bold lg:hidden">
          Show All
        </button>
      </div>
    </HomePageSection>
  );
};

export default Gender;
