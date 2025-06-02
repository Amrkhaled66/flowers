import priceFormatter from "src/utils/priceFormatter";
import { useTranslation } from "react-i18next";

import PointsHistoryTable from "src/sections/ProfilePage/Points/PointsHistoryTable";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";
const Points = () => {
  const { t } = useTranslation("profile");
  return (
    <div className="flex flex-1 flex-col gap-10">
      <ProfilePageCompetent>
        <div className="space-y-4 rounded-2xl bg-white p-4">
          <p className="text-sm">{t("points.header")}</p>
          <div className="space-y-2 text-sm font-bold">
            <p>0 {t("points.point")}</p>
            <p>=</p>
            <p>{priceFormatter(0)}</p>
          </div>
          <p>{t("points.description")}</p>
        </div>
      </ProfilePageCompetent>
      <PointsHistoryTable />
    </div>
  );
};

export default Points;
