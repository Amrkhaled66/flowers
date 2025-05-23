import SiteMap from "src/components/layout/Footer/SiteMap";
import SocialLinks from "src/components/layout/Footer/SocialLinks";
import HomePageSection from "src/components/ui/HomePageSection";
import Bottom from "src/components/layout/Footer/Bottom";
import ChangeLngButton from "src/components/ui/ChangeLngButton";

const Footer = () => {
  return (
    <HomePageSection className="bg-footer-color !py-[40px]">
      <div className="space-y-10">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col justify-between gap-y-8 lg:flex-row">
            <SocialLinks />
            <SiteMap />
          </div>
          <ChangeLngButton />
        </div>
        <Bottom />
      </div>
    </HomePageSection>
  );
};

export default Footer;
