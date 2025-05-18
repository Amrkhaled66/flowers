import priceFormatter from "src/utils/priceFormatter";
import { useTranslation } from "react-i18next";
const Points = () => {
  const { t } = useTranslation("profile")
  return (
    <div>
      <div className="space-y-4 rounded-2xl bg-white p-4">
        <p className="text-sm">{t("points.header")}</p>
        <div className="space-y-2 text-sm font-bold">
          <p>0 {t("points.point")}</p>
          <p>=</p>
          <p>{priceFormatter(0)}</p>
        </div>
      </div>
    </div>
  );
};

export default Points;
