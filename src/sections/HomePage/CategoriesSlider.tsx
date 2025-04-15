import Header from "src/components/ui/SectionTitle";
import Slider from "src/components/HomePage/CategoriesSlider/Slider";
import ProductCard from "src/components/ui/ProductCard";
import { SwiperSlide } from "swiper/react";

const CategoriesSlider = ({
  title,
  items,
  children,
}: {
  title: string;
  items: object[];
  children?: React.ReactNode;
}) => {
  return (
    <section className="font-main container text-center font-bold">
      <div className="space-y-10 lg:py-[40px]">
        <Header title={title} children={children} />
        <Slider items={items}>
          {items.map((item) => {
            return (
              <SwiperSlide className=" " key={item}>
                <ProductCard
                  img={item.img}
                  name={item.name}
                  stars={item.stars}
                  price={item.price}
                  discountedPrice={item.discountedPrice}
                />
              </SwiperSlide>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default CategoriesSlider;
