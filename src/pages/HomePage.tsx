import {
  HeroSection,
  CategorySlider,
  BestSellers,
  CTA,
  ProductsSlider,
  Ideas,
  Brands,
} from "src/sections/HomePage";
import { products1, products2, products3 } from "src/data/products";
import categories from "src/data/categories";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategorySlider title="Shop Trending Categories" items={categories} />
      <BestSellers />
      <CategorySlider title="Categories" items={categories} />
      <CTA />
      <ProductsSlider title="Latest & Loveliest" items={products1} />
      <ProductsSlider
        title="Elegant Brands, Luxury Perfumes"
        items={products2}
      />
      <ProductsSlider title="Gifts for Every Moment" items={products3} />

      <ProductsSlider title="An Extra Luxurious Touch" items={products1} />
      <Ideas />
      <Brands />
    </>
  );
};

export default HomePage;
