import HomePageSection from "src/components/ui/HomePageSection";
import SectionTitle from "src/components/ui/SectionTitle";
import IdeasCards from "src/components/HomePage/Ideas/IdeasCards";
import { useTranslation } from "react-i18next";
const Ideas = () => {
  const { t } = useTranslation("home");
  return (
    <HomePageSection className="pb-8">
      <div className="space-y-5 lg:space-y-10">
        <SectionTitle title={t("ideas.ideasTitle")} />
        <IdeasCards />
      </div>
    </HomePageSection>
  );
};

export default Ideas;
