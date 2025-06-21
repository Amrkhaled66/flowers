import Logo2 from "src/assets/Logo1.webp";
import appStore from "src/assets/appstore.svg";
import googleplay from "src/assets/googleplay.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useConfig } from "src/context/configCtx";

import { APPONAPPSTORE, APPONGOOGLEPLAY } from "src/utils/defaultSettings";
const SocialIcon = ({
  icon,
  link,
}: {
  icon: ReactNode;
  link?: string | null;
}) => {
  return (
    <a
      href={link || "#"}
      target="_blank"
      className="animate border-main white hover:shadow-2xl flex items-center rounded-xl border p-2 hover:-translate-y-1 "
    >
      {icon}
    </a>
  );
};
const SocialLinks = () => {
  const { t } = useTranslation("layout");
  const {
    config: { instagram, tiktok, whatsapp, name },
  } = useConfig();
  const year = new Date().getFullYear();

  return (
    <div className="space-y-8 text-start lg:w-[40%]">
      <div className="space-y-4">
        <div className="h-[50px] w-[90px] lg:h-[95px] lg:w-[180px]">
          <img className="size-full object-cover" src={Logo2} alt="Logo" />
        </div>
        <p className="lg:w-[80%]">
          Ballora is your go-to e-commerce store for unique and thoughtful
          gifts.
        </p>
      </div>
      <div className="space-y-7">
        <div className="space-y-4">
          <p>{t("footer.socialMedia")}</p>
          <div className="flex gap-x-3">
            <SocialIcon
              link={whatsapp}
              icon={<Icon icon="bi:whatsapp"  width="24" height="24" />}
            />
            <SocialIcon
              link={instagram}
              icon={<Icon icon="bi:instagram" width="24" height="24" />}
            />
            <SocialIcon
              link={tiktok}
              icon={<Icon icon="ri:tiktok-fill" width="24" height="24" />}
            />
          </div>
        </div>
        <div className="space-y-3">
          <p>{t("footer.download")}</p>
          <div className="flex gap-x-4">
            <a href={APPONAPPSTORE} target="_blank">
              <img src={appStore} alt="Download" />
            </a>
            <a href={APPONGOOGLEPLAY} target="_blank">
              <img src={googleplay} alt="Download" />
            </a>
          </div>
        </div>
      </div>
      <p>
        {t("footer.copyright")} &copy; {year} {name || "Ballora"} - V 4.3.10
      </p>
    </div>
  );
};

export default SocialLinks;
