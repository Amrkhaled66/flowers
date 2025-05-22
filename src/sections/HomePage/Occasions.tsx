import CategoryCard from "src/components/ui/CategoryCard";
import HomePageSection from "src/components/ui/HomePageSection";
import SectionTitle from "src/components/ui/SectionTitle";

import Occasion from "src/types/BaseItem";
import { getLocalizedName } from "src/utils/getLocalizedName";
import { useTranslation } from "react-i18next";
import transformBaseItem from "src/utils/transforms/transformCategory";

const Occasions = ({ data }: { data: Occasion[] }) => {
  const { t } = useTranslation("home");
    const transformedOccasions = data.map(transformBaseItem);

  return (
    <HomePageSection>
      <div className="flex flex-col items-center space-y-5 lg:space-y-10">
        <SectionTitle title={t("occasionTitle")} />
        <div className="grid grid-cols-3 gap-4 gap-x-4 sm:grid-cols-4 sm:gap-x-5 lg:gap-x-6">
          {transformedOccasions.map((category, index) => (
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
