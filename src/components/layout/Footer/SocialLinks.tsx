import Logo2 from "src/assets/logo2.svg";
import appStore from "src/assets/appstore.svg";
import googleplay from "src/assets/googleplay.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
const SocialIcon = ({ icon }: { icon: ReactNode }) => {
  return (
    <button className="flex items-center rounded-xl border border-white p-2">
      {icon}
    </button>
  );
};
const SocialLinks = () => {
  const { t } = useTranslation("layout");
  return (
    <div className="space-y-8 text-start text-white lg:w-[40%]">
      <div>
        <img src={Logo2} alt="" />
      </div>
      <div className="space-y-7">
        <div className="space-y-4">
          <p>{t("footer.socialMedia")}</p>
          <div className="flex gap-x-3">
            <SocialIcon
              icon={<Icon icon="ri:facebook-fill" width="24" height="24" />}
            />
            <SocialIcon
              icon={<Icon icon="bi:snapchat" width="24" height="24" />}
            />
            <SocialIcon
              icon={<Icon icon="ri:tiktok-fill" width="24" height="24" />}
            />
          </div>
        </div>
        <div className="space-y-3">
          <p>{t("footer.download")}</p>
          <div className="flex gap-x-4">
            <div>
              <img src={appStore} alt="Download" />
            </div>
            <div>
              <img src={googleplay} alt="Download" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
