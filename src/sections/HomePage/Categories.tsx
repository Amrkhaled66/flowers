import CategoryCard from "src/components/ui/CategoryCard";
import HomePageSection from "src/components/ui/HomePageSection";
import SectionTitle from "src/components/ui/SectionTitle";
import CategorySk from "src/components/ui/Skeletons/CategorySk";

import Category from "src/types/BaseItem";
import { getLocalizedName } from "src/utils/getLocalizedName";

import { useTranslation } from "react-i18next";
import transformBaseItem from "src/utils/transforms/transformCategory";
import { Link } from "react-router-dom";

const Categories = ({
  data,
  Loading,
}: {
  data: Category[];
  Loading: boolean;
}) => {
  const { t } = useTranslation("home");
  const transformedCategory = data.map(transformBaseItem);
  return (
    <HomePageSection>
      <div className="space-y-5 lg:space-y-10">
        <SectionTitle title={t("categoryTitle")} />
        {Loading ? (
          <CategorySk />
        ) : (
          <div className="flex items-center flex-wrap  gap-3 sm:gap-4 lg:gap-6">
            {transformedCategory.map((category) => (
              <Link key={category.id} to={`/filter?category_id=${category.id}`}>
                <CategoryCard
                  img={category.image}
                  name={getLocalizedName(category)}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </HomePageSection>
  );
};

export default Categories;
