import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import DeliveryTimeModel from "./DeliveryTimeModel";
import DeliveryOption from "src/components/Cart/DeliveryInfo/DeliveryTime/DeliveryOption";
import { useOrder } from "src/context/orderCtx";
import { useTranslation } from "react-i18next";
const DeliveryTime = ({ error }: { error?: string }) => {
  const [activeModel, setActiveModel] = useState<boolean | number>(false);
  const { order } = useOrder();
  const { t } = useTranslation("deliveryInfo");
  return (
    <div className="flex flex-col gap-y-3">
      {/* Title */}
      <div className="flex items-center gap-x-3">
        <Icon icon="carbon:delivery" width={24} height={24} />
        <p className="text-sm font-bold">{t("time.title")}</p>
      </div>

      {/* Delivery Options */}
      <div className="flex items-start gap-x-4 lg:gap-x-5">
        {/* <DeliveryOption
          title="Fasted Delivery"
          subtitle="Select Time for Delivery"
          icon="carbon:delivery"
        /> */}
        <DeliveryTimeModel
          isOpen={activeModel === 1}
          onClose={() => setActiveModel(false)}
        />

        <DeliveryOption
          error={error}
          title={t("time.title")}
          subtitle={"Choose date and time"}
          isButton
          onClick={() => setActiveModel(1)}
          deliveryDate={order.deliveryDate}
          deliveryTime={order.deliveryTime}
        />
      </div>
    </div>
  );
};

export default DeliveryTime;
