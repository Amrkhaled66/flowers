import HomePageSection from "src/components/ui/HomePageSection";
import Slider from "src/components/HomePage/CategoriesSlider/Slider";
import SectionTitle from "src/components/ui/SectionTitle";
import category from "src/types/category";
import CategoryCard from "src/components/ui/CategoryCard";
import { SwiperSlide } from "swiper/react";
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
      <div className="space-y-5 lg:space-y-10">
        <SectionTitle title={title} children={children} />
        <Slider slidesPerGroup={7} items={items}>
          {items.map((item, index) => {
            return (
              <SwiperSlide key={`${item.name} ${index}`} className="!w-[80px] lg:!w-[150px]">
                <CategoryCard img={item.img} name={item.name} />
              </SwiperSlide>
            );
          })}
        </Slider>
      </div>
    </HomePageSection>
  );
};

export default CategorySlider;
