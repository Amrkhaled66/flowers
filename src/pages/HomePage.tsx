import {
  HeroSection,
  BestSellers,
  CTA,
  Ideas,
  MainCategories,
  SubCategories,
} from "src/sections/HomePage";
import usePageTitle from "src/hooks/useUpdatePageTitle";
const HomePage = () => {
  usePageTitle("Ballora");
  return (
    <div className="flex flex-col gap-y-8 lg:gap-y-0">
      <HeroSection />
      <MainCategories />
      <BestSellers />
      <SubCategories />
      <CTA />
      <Ideas />
    </div>
  );
};

export default HomePage;
