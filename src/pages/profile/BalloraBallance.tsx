import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent"
import { useTranslation } from "react-i18next"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useGetBalance } from "src/hooks/profile/usePointsMutations"
import priceFormatter from "src/utils/priceFormatter"
const BalloraBallance = () => {
    const { t } = useTranslation("profile");
    const { data, isLoading } = useGetBalance();

    return (
        <ProfilePageCompetent>
            <div className="py-4 space-y-8  bg-white rounded-xl">
                <div className="space-y-4">
                    <h1 className="font-bold text-[22px] text-center">{t("ballance.availableBallance")}</h1>
                    <div className="rounded-xl p-4 bg-main-100 mx-auto w-fit"><Icon icon="majesticons:coins" width="24" height="24" /></div>
                    <p className="text-center w-[90%] mx-auto sm:w-full">{t("ballance.des")}</p>
                </div>
                <div className={`py-3 bg-main-100 text- font-bold mx-auto rounded-xl text-xl w-[90%] hover:bg-main-900 hover:text-white animate text-center ${isLoading && "animate-pulse"}`}>
                    {!isLoading && priceFormatter(data.data.balance||0)}
                </div>
            </div>
        </ProfilePageCompetent>
    )
}

export default BalloraBallance