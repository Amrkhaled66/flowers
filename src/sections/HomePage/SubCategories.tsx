import categories from "src/data/categories";
import CategoryCard from "src/components/ui/CategoryCard";
import HomePageSection from "src/components/ui/HomePageSection";
import SectionTitle from "src/components/ui/SectionTitle";
const SubCategories = () => {
  return (
    <HomePageSection>
      <div className="flex flex-col items-center space-y-5 lg:space-y-10">
        <SectionTitle title={"Every Moment Deserves ab Gift"} />
        <div className="grid grid-cols-3 gap-4 gap-x-4 sm:grid-cols-4 sm:gap-x-5 lg:gap-x-6">
          {categories.slice(0, 4).map((category, index) => (
            <CategoryCard key={index} img={category.img} name={category.name} />
          ))}
        </div>
      </div>
    </HomePageSection>
  );
};

export default SubCategories;
