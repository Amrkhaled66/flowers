// import categories from "src/data/categories";
import CategoryCard from "src/components/ui/CategoryCard";
import HomePageSection from "src/components/ui/HomePageSection";
import SectionTitle from "src/components/ui/SectionTitle";

import Category from "src/types/BaseItem";
import { getLocalizedName } from "src/utils/getLocalizedName";

import { useTranslation } from "react-i18next";

const Categories = ({ data }: { data: Category[] }) => {
  const { t } = useTranslation("home");
  return (
    <HomePageSection>
      <div className="space-y-5 lg:space-y-10">
        <SectionTitle title={t("categoryTitle")} />

        {data.length > 0 && (
          <div className="grid grid-cols-3 gap-4 gap-x-4 sm:grid-cols-7 sm:gap-5 lg:gap-6">
            {data.map((category) => (
              <CategoryCard
                key={category.id}
                img={category.image}
                name={getLocalizedName(category)}
              />
            ))}
          </div>
        )}
      </div>
    </HomePageSection>
  );
};

export default Categories;
