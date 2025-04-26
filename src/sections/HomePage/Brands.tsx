import HomePageSection from "src/components/ui/HomePageSection";
import SectionTitle from "src/components/ui/SectionTitle";
import Slider from "src/components/HomePage/CategoriesSlider/Slider";
import brands from "src/data/brands";
import { SwiperSlide } from "swiper/react";
const Brands = () => {
  return (
    <HomePageSection className="lg:bg-main-100 bg-white">
      <div className="space-y-5 lg:space-y-10">
        <div className="space-y-4">
          <SectionTitle title="Brands" />
          <button className="font-main mx-auto hidden rounded-sm border-2 border-white !bg-transparent px-4 py-2.5 font-bold lg:block">
            Show All
          </button>
        </div>
        <Slider slidesPerGroup={6} items={brands}>
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="!w-[116px]  sm:!w-[180px]">
              <div
                className="bg-main-100 h-[57px] !w-[116px] cursor-pointer rounded-sm py-2.5 sm:!w-[180px] lg:h-[77px] lg:bg-white"
                key={index}
              >
                <img
                  className="size-full object-cover"
                  src={brand}
                  alt="brand"
                />
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

export default Brands;
