import priceFormatter from "src/utils/priceFormatter";
import { useTranslation } from "react-i18next";

import PointsHistoryTable from "src/sections/ProfilePage/Points/PointsHistoryTable";
const Points = () => {
  const { t } = useTranslation("profile");
  return (
    <div className="flex flex-1 flex-col gap-10">
      <div className="bg-main-50 h-fit rounded-xl p-4">
        <div className="space-y-4 rounded-2xl bg-white p-4">
          <p className="text-sm">{t("points.header")}</p>
          <div className="space-y-2 text-sm font-bold">
            <p>0 {t("points.point")}</p>
            <p>=</p>
            <p>{priceFormatter(0)}</p>
          </div>
          <p>{t("points.description")}</p>
        </div>
      </div>
      <PointsHistoryTable />
    </div>
  );
};

export default Points;
