import SectionTitle from "src/components/ui/SectionTitle";
import Products from "src/components/HomePage/BestSellers/Products";
import Slider from "src/components/HomePage/Categories/Slider";
import ProductCard from "src/components/ui/ProductCard/ProductCard";
import ChooseGiftsButton from "src/components/ui/ChooseGiftsButton";
import ProductCardSk from "src/components/ui/Skeletons/ProductCardSk";

import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "src/api/products";

import Product from "src/types/product";
const BestSellers = () => {
  const { t } = useTranslation("home");

  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (productsLoading) return <div>Loading...</div>;

  return (
    <section className="container text-center">
      <div className="flex flex-col gap-y-5 lg:gap-y-10 lg:py-[40px]">
        <div className="space-y-4">
          <SectionTitle title={t("bestSellersTitle")} />
          <ChooseGiftsButton className="hidden lg:block" />
        </div>
        <Products loading={productsLoading} products={products} />
        <div className="lg:hidden">
          <Slider>
            {productsLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <SwiperSlide className="!w-[140px] !h-fit sm:!w-[282px]" key={index}>
                    <ProductCardSk />
                  </SwiperSlide>
                ))
              : products.map((product: Product) => (
                  <SwiperSlide
                    className="!w-[140px] !h-fit sm:!w-[282px]"
                    key={product.id}
                  >
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
          </Slider>
        </div>
        <ChooseGiftsButton className="lg:hidden" />
      </div>
    </section>
  );
};

export default BestSellers;
