import { useTranslation } from "react-i18next";
import { useOrder } from "src/context/orderCtx";
const PrivacyConsentToggle = () => {
  const { t } = useTranslation("deliveryInfo");
  const {
    order: { secret },
    updateOrder,
  } = useOrder();
  return (
    <div className="space-y-3">
      <button
        onClick={() => updateOrder({ secret: !secret })}
        className="hover:border-main animate border-stroke bg-main-50 flex w-full gap-x-3 rounded-xl border px-4 py-3 lg:bg-white"
      >
        <input
          type="checkbox"
          checked={secret}
          onChange={() => updateOrder({ secret: !secret })}
          className="accent-main !rounded-xl"
          name=""
        />
        <p className="text-subTitle">{t("privacy.toggleText")}</p>
      </button>
      <div className="text-subTitle rounded-xl bg-[#FDEED3] p-4 text-sm">
        {t("privacy.description")}
      </div>
    </div>
  );
};

export default PrivacyConsentToggle;
