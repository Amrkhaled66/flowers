import CategoryCard from "src/components/ui/CategoryCard";
import HomePageSection from "src/components/ui/HomePageSection";
import SectionTitle from "src/components/ui/SectionTitle";
import CategorySk from "src/components/ui/Skeletons/CategorySk";

import Occasion from "src/types/BaseItem";
import { getLocalizedName } from "src/utils/getLocalizedName";
import { useTranslation } from "react-i18next";
import transformBaseItem from "src/utils/transforms/transformCategory";
import { Link } from "react-router-dom";

const Occasions = ({
  data,
  loading,
}: {
  data: Occasion[];
  loading?: boolean;
}) => {
  const { t } = useTranslation("home");
  const transformedOccasions = data.map(transformBaseItem);

  return (
    <HomePageSection>
      <div className="flex flex-col items-center space-y-5 lg:space-y-10">
        <SectionTitle title={t("occasionTitle")} />
        {loading ? (
          <CategorySk />
        ) : (
          <div className="flex flex-wrap items-center  gap-3 sm:justify-center sm:gap-4 lg:gap-6">
            {transformedOccasions.map((occasion) => (
              <Link key={occasion.id} to={`/filter?occasion_id=${occasion.id}`}>
                <CategoryCard
                  img={occasion.image}
                  name={getLocalizedName(occasion)}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </HomePageSection>
  );
};

export default Occasions;
