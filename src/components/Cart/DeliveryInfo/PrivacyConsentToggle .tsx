import { useTranslation } from "react-i18next"
import { useOrder } from "src/context/orderCtx";
const PrivacyConsentToggle = () => {
    const { t } = useTranslation("deliveryInfo");
    const { order: { secret }, updateOrder } = useOrder();
    return (
        <div className="space-y-3">
            <button onClick={() => updateOrder({ secret: !secret })} className="px-4 hover:border-main animate border border-stroke flex py-3 gap-x-3 w-full rounded-xl bg-main-50 lg:bg-white">
                <input
                    type="checkbox"
                    checked={secret}
                    className=" accent-main !rounded-xl"
                    name=""
                />
                <p className="text-subTitle ">{t("privacy.toggleText")}</p>
            </button>
            <div className="rounded-xl p-4 bg-[#FDEED3] text-sm text-subTitle">{t("privacy.description")}</div>
        </div>
    )
}

export default PrivacyConsentToggle 