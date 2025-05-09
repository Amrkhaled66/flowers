import CategoryCard from "src/components/ui/CategoryCard";
import HomePageSection from "src/components/ui/HomePageSection";
import SectionTitle from "src/components/ui/SectionTitle";

import Occasion from "src/types/BaseItem";
import { getLocalizedName } from "src/helpers/getLocalizedName";
const Occasions = ({ data }: { data: Occasion[] }) => {
  return (
    <HomePageSection>
      <div className="flex flex-col items-center space-y-5 lg:space-y-10">
        <SectionTitle title={"Every Moment Deserves ab Gift"} />
        <div className="grid grid-cols-3 gap-4 gap-x-4 sm:grid-cols-4 sm:gap-x-5 lg:gap-x-6">
          {data.map((category, index) => (
            <CategoryCard
              key={index}
              img={category.image}
              name={getLocalizedName(category)}
            />
          ))}
        </div>
      </div>
    </HomePageSection>
  );
};

export default Occasions;
