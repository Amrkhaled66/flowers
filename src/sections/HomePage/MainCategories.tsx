import categories from "src/data/categories";
import CategoryCard from "src/components/ui/CategoryCard";
import HomePageSection from "src/components/ui/HomePageSection";
import SectionTitle from "src/components/ui/SectionTitle";
const MainCategories = () => {
  return (
    <HomePageSection>
      <div className="space-y-5 lg:space-y-10">
        <SectionTitle title={"Celebrate Every Moment"} />
        <div className="grid grid-cols-3 gap-4 gap-x-4 sm:grid-cols-7 sm:gap-5 lg:gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} img={category.img} name={category.name} />
          ))}
        </div>
      </div>
    </HomePageSection>
  );
};

export default MainCategories;
