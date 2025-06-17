import { useTranslation } from "react-i18next";
import { useGetBalance, useRedeemPoints } from "src/hooks/profile/usePointsMutations";
import priceFormatter from "src/utils/priceFormatter";
import Button from "../ui/Button";
const RedeemPoints = () => {
    const { t } = useTranslation("sharedCart");
    const { data, isLoading } = useGetBalance();
    const { mutate, isPending: redeemLoading } = useRedeemPoints();
    if (isLoading) return;

    if (data.data.points === 0) return;
    return (
        <div className="p-4 space-y-6  rounded-xl bg-main-50">
            <div className="space-y-3">
                <p className="font-medium">{t("redeemPoints.title")}</p>
                <div>
                    <p className="font-bold">{t("redeemPoints.point")} {data.data.points}</p>
                    <p>=</p>
                    <p className="font-bold">{priceFormatter(data.data.balance)}</p>
                </div>
                <p>{t("redeemPoints.description")}</p>
            </div>
            <Button onClick={mutate} loading={redeemLoading} text={t("redeemPoints.redeem")} className="!py-3 text-white w-full" />
        </div>
    )
}

export default RedeemPoints