import HeroSection from "src/sections/HomePage/HeroSection";
import CategorySlider from "src/sections/HomePage/CategorySlider";
import BestSellers from "src/sections/HomePage/BestSellers";
import categories from "src/data/categories";
import CTA from "src/sections/HomePage/CTA";
// import CategoriesSlider from "src/sections/HomePage/CategoriesSlider";
// import Button from "src/components/ui/Button";
// import products from "src/data/products";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategorySlider title="Shop Trending Categories" items={categories} />
      <BestSellers />
      <CategorySlider title="Categories" items={categories} />
      <CTA />
      {/* <CategoriesSlider title="Best Sellers" items={products}>
        <Button text="Choose Gifts Now" className="bg-main-100 mx-auto w-fit" />
      </CategoriesSlider> */}
    </>
  );
};

export default HomePage;
