import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "src/components/ui/Button";

import { useTranslation } from "react-i18next";
const EmptyFavorites = () => {
  const { t } = useTranslation("profile");
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-col items-center gap-y-5 text-center">
        <p className="text-xl font-semibold">{t("favorite.empty")}</p>
        <Icon icon="fontisto:shopping-basket-add" className="text-subTitle" width="129" height="100" />
      </div>
      <Link to="/">
        <Button
          text={t("favorite.cta")}
          className="animate w-full !py-3 text-white"
        />
      </Link>
    </div>
  );
};

export default EmptyFavorites;
