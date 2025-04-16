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
      <div className="space-y-10 lg:py-[40px]">
        <Header title={title} children={children} />
        <Button text="Choose Gifts Now" className="bg-main-100 mx-auto w-fit" />

        <Slider slidesPerGroup={4} items={items}>
          {items.map((item, index) => {
            return (
              <SwiperSlide className=" " key={index}>
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

export default ProductsSlider;
