import SectionTitle from "src/components/ui/SectionTitle";
import Button from "src/components/ui/Button";
import Products from "src/components/HomePage/BestSellers/Products";
import Slider from "src/components/HomePage/CategoriesSlider/Slider";
import { SwiperSlide } from "swiper/react";

import { useTranslation } from "react-i18next";
import { products1 } from "src/data/products";
import ProductCard from "src/components/ui/ProductCard";

const BestSellers = () => {
  const { t } = useTranslation("home");
  return (
    <section className="container text-center">
      <div className="flex flex-col gap-y-5 lg:gap-y-10 lg:py-[40px]">
        <div className="space-y-4">
          <SectionTitle title={t("bestSellersTitle")} />
          <Button
            text={t("cta")}
            className="bg-main-300 mx-auto hidden w-[240px] !py-3 !text-base text-white lg:block"
          />
        </div>
        <Products />
        <div className="lg:hidden">
          <Slider>
            {products1.map((product) => (
              <SwiperSlide
                className="!w-[140px] sm:!w-[282px]"
                key={product.img}
              >
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Slider>
        </div>
        <Button
          text={t("cta")}
          className="bg-main-300 mx-auto w-full !p-2.5 !text-base text-white lg:hidden"
        />
      </div>
    </section>
  );
};

export default BestSellers;
