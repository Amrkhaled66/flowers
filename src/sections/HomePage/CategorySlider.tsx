import HomePageSection from "src/components/ui/HomePageSection";
import Slider from "src/components/HomePage/CategoriesSlider/Slider";
import SectionTitle from "src/components/ui/SectionTitle";
import { SwiperSlide } from "swiper/react";

import bg from "src/assets/categorybg.webp";

import category from "src/types/category";
const CategorySlider = ({
  title,
  items,
  children,
}: {
  title: string;
  items: category[];
  children?: React.ReactNode;
}) => {
  return (
    <HomePageSection className="font-bold">
      <div className="space-y-10 ">
        <SectionTitle title={title} children={children} />
        <Slider items={items}>
          {items.map((item, index) => {
            return (
              <SwiperSlide
                key={`${item.name} ${index}`}
                className="!w-[149.5px]"
              >
                <div className="font-main text-text-main mx-auto w-full space-y-3 text-lg font-bold">
                  <div
                    className="mx-auto flex h-[140px] w-full items-center overflow-hidden"
                    style={{
                      background: `url(${bg}) 50% /cover no-repeat`,
                    }}
                  >
                    <div className="m-auto flex aspect-square max-h-[90%] w-[90%] justify-center">
                      <img
                        loading="lazy"
                        src={item.img}
                        className={`w-fit object-contain object-center`}
                        alt="img"
                      />
                    </div>
                  </div>
                  <p>{item.name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Slider>
      </div>
    </HomePageSection>
  );
};

export default CategorySlider;
