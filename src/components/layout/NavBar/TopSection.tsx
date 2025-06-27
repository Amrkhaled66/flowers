import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import ChangeLngButton from "src/components/ui/ChangeLngButton";
const ProsIcon = ({
  icon,
  text,
  className,
}: {
  icon: ReactNode;
  text: string;
  className?: string;
}) => {
  return (
    <div className={`flex items-center gap-x-2 font-bold ${className}`}>
      <span className="">{icon}</span>
      <span className="text-xs">{text}</span>
    </div>
  );
};

const TopSection = () => {
  const { t } = useTranslation("layout");
  return (
    <div className="bg-footer-color">
      <div className="container text-white">
        <div className="flex justify-between py-2">
          <div className="flex w-fit gap-x-6">
            <ProsIcon
              icon={
                <Icon icon="mdi:truck-check-outline" width="20" height="20" />
              }
              text={t("navBar.pros1")}
            />
            <ProsIcon
              className="hidden lg:flex"
              icon={
                <Icon icon="lsicon:location-outline" width="24" height="24" />
              }
              text={t("navBar.pros2")}
            />
            <ProsIcon
              className="hidden md:flex"
              icon={<Icon icon="mdi-light:gift" width="24" height="24" />}
              text={t("navBar.pros3")}
            />
          </div>
          <ChangeLngButton />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
