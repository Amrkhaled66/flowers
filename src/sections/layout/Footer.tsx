import SiteMap from "src/components/layout/Footer/SiteMap";
import SocialLinks from "src/components/layout/Footer/SocialLinks";
import HomePageSection from "src/components/ui/HomePageSection";
import Bottom from "src/components/layout/Footer/Bottom";
import ChangeLngButton from "src/components/ui/ChangeLngButton";

import footerBg from "src/assets/Ballora-bg.png";
const Footer = () => {
  return (
    <HomePageSection className="relative overflow-hidden">
      <img
        src={footerBg}
        className="absolute inset-0 z-[0] h-full blur-md lg:h-auto"
      />
      <div style={{}} className="black footer-container relative">
        <div className="space-y-10">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col justify-between gap-y-8 lg:flex-row">
              <SocialLinks />
              <SiteMap />
            </div>
            <ChangeLngButton borderColor="border-main" />
          </div>
          <Bottom />
        </div>
      </div>
    </HomePageSection>
  );
};

export default Footer;
