import Header from "src/components/ui/SectionTitle";
import Slider from "src/components/HomePage/CategoriesSlider/Slider";
import ProductCard from "src/components/ui/ProductCard";
import { SwiperSlide } from "swiper/react";
import Button from "src/components/ui/Button";

import Product from "src/types/product";
const ProductsSlider = ({
  title,
  items,
  children,
}: {
  title: string;
  items: Product[];
  children?: React.ReactNode;
}) => {
  return (
    <section className="font-main container text-center font-bold">
      <div className="space-y-5 lg:space-y-10 lg:py-[40px]">
        <Header title={title} children={children} />
        <Button
          text="Choose Gifts Now"
          className="bg-main-100  mx-auto hidden w-fit lg:block"
        />

        <Slider items={items}>
          {items.map((item, index) => {
            return (
              <SwiperSlide
                className="!w-[140px] sm:!w-[240px] lg:!w-[282px]"
                key={index}
              >
                <ProductCard
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  discountedPrice={item.discountedPrice}
                />
              </SwiperSlide>
            );
          })}
        </Slider>
        <Button
          text="Choose Gifts Now"
          className="bg-main-100 mx-auto w-full lg:hidden"
        />
      </div>
    </section>
  );
};

export default ProductsSlider;
