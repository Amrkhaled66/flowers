import {
  HeroSection,
  BestSellers,
  CTA,
  Ideas,
  Categories,
  Occasions,
} from "src/sections/HomePage";
import usePageTitle from "src/hooks/ui/useUpdatePageTitle";

import { useQuery } from "@tanstack/react-query";
import { getFullData } from "src/api/HomePage";
const HomePage = () => {
  usePageTitle("Ballora");

  const { data, isLoading } = useQuery({
    queryKey: ["full-data"],
    queryFn: getFullData,
  });

  return (
    <div className="flex flex-col gap-y-8 lg:gap-y-0">
      <HeroSection />
      <Categories data={isLoading ? [] : data.data.categories} />
      <BestSellers />
      <Occasions data={isLoading ? [] : data.data.occasions} />
      <CTA />
      <Ideas />
    </div>
  );
};

export default HomePage;
