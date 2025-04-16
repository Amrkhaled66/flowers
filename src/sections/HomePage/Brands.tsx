import HomePageSection from "src/components/ui/HomePageSection";
import SectionTitle from "src/components/ui/SectionTitle";
import Slider from "src/components/HomePage/CategoriesSlider/Slider";
import brands from "src/data/brands";
import { SwiperSlide } from "swiper/react";
const Brands = () => {
  return (
    <HomePageSection className="bg-main-100">
      <div className="lg:space-y-10">
        <div className="space-y-4">
          <SectionTitle title="Brands" />
          <button className="font-main mx-auto rounded-sm border-2 border-white !bg-transparent px-4 py-2.5 font-bold">
            Show All
          </button>
        </div>
        <Slider slidesPerGroup={6} items={brands}>
          {brands.map((brand, index) => (
            <SwiperSlide className="">
              <div
                className="h-[77px] cursor-pointer rounded-sm bg-white py-2.5"
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
      </div>
    </HomePageSection>
  );
};

export default Brands;
