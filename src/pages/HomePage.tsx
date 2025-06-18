import {
  HeroSection,
  BestSellers,
  CTA,
  Ideas,
  Categories,
  Occasions,
} from "src/sections/HomePage";
import usePageTitle from "src/hooks/ui/useUpdatePageTitle";

import useGetFullData from "src/hooks/shared/useGetFullData";
const HomePage = () => {
  usePageTitle("Ballora");

  const { data, isLoading } = useGetFullData();

  return (
    <div className="flex flex-col gap-y-8 lg:gap-y-0">
      <HeroSection />
      <Categories
        Loading={isLoading}
        data={isLoading ? [] : data.categories}
      />
      <BestSellers
        Loading={isLoading}
        products={isLoading ? [] : data.best_selling}
      />
      <Occasions
        loading={isLoading}
        data={isLoading ? [] : data.occasions}
      />
      <CTA />
      <Ideas />
    </div>
  );
};

export default HomePage;
