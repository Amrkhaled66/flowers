import priceFormatter from "src/utils/priceFormatter";
import { useTranslation } from "react-i18next";
import { useGetPoints, useRedeemPoints } from "src/hooks/profile/usePointsMutations";

import PointsHistoryTable from "src/sections/ProfilePage/Points/PointsHistoryTable";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";
import Button from "src/components/ui/Button";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
const Points = () => {
  const { t } = useTranslation("profile");
  const { data, isLoading, refetch } = useGetPoints();
  const { mutate, isPending: redeemLoading } = useRedeemPoints({});

  const handleRedeem = () => {
    mutate(undefined, {
      onSuccess: () => {
        refetch();
      },
      onError: (err: any) => {
        toast(err.response.data.message || "Something went wrong", { type: "error" });
      }
    });
  };
  return (
    <div className="flex flex-1 flex-col gap-10">
      <ProfilePageCompetent>
        <div className=" space-y-4 sm:space-y-5 lg:space-y-8">

          <div className="space-y-4 rounded-2xl bg-white p-4">
            <p className="text-sm">{t("points.header")}</p>

            {isLoading ? (
              <div className="mb-2">
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            ) : (
              <div className="space-y-2 text-sm font-bold">
                <p>{data.data.points} {t("points.point")}</p>
                <p>=</p>
                <p>{priceFormatter(data.data.amount)}</p>
              </div>
            )}

            <p>{t("points.description")}</p>
          </div>
          <Button
            loading={redeemLoading}
            onClick={handleRedeem}
            disabled={data?.data?.points === 0}
            className="!py-3 disabled:opacity-60 text-white w-full"
            text={t("points.redeem")}
          />
        </div>
      </ProfilePageCompetent>

      <PointsHistoryTable loading={isLoading} history={data?.data?.history || []} />
    </div>
  );

};

export default Points;
