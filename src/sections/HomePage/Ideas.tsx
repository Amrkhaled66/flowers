import HomePageSection from "src/components/ui/HomePageSection";
import SectionTitle from "src/components/ui/SectionTitle";
import IdeasCards from "src/components/HomePage/Ideas/IdeasCards";

const Ideas = () => {
  return (
    <HomePageSection>
      <div className=" space-y-5 lg:space-y-10">
        <SectionTitle title="Discover new ideas" />
        <IdeasCards />
      </div>
    </HomePageSection>
  );
};

export default Ideas;
