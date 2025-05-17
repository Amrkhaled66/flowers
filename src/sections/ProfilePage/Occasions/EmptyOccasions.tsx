import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";

const EmptyOccasions = () => {
  const { t } = useTranslation("profile");
  return (
    <div className="text-main flex flex-col items-center justify-center space-y-4">
      <Icon icon="solar:calendar-outline" width="56" height="56" />
      <p className="text-[24px] text-nowrap text-center w-full">{t("occasion.empty")}</p>
    </div>
  );
};
export default EmptyOccasions