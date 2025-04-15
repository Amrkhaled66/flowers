import Slider from "src/components/HomePage/CategoriesSlider/Slider";
import SectionTitle from "src/components/ui/SectionTitle";

import { SwiperSlide } from "swiper/react";

import bg from "src/assets/categorybg.webp";

const CategorySlider = ({
  title,
  items,
  children,
}: {
  title: string;
  items: string[];
  children?: React.ReactNode;
}) => {
  return (
    <section className="font-main container text-center font-bold">
      <div className="space-y-10 lg:py-[40px]">
        <SectionTitle title={title} children={children} />
        <Slider items={items}>
          {items.map((item) => {
            return (
              <SwiperSlide className=" " key={item}>
                <div
                  className="mx-auto h-[140px] w-[150px]"
                  style={{
                    background: `url(${bg})  50% / cover no-repeat`,
                  }}
                >
                  <img
                    loading="lazy"
                    src={item}
                    className="size-full scale-[70%] object-cover"
                    alt="img"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default CategorySlider;
