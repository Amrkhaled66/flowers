import { Icon } from "@iconify/react";
import { useDeliveryTimeLogic } from "src/hooks/cart/useDeliveryTimeLogic";
import { useTranslation } from "react-i18next";
import { useOrder } from "src/context/orderCtx";

import Model from "src/components/ui/Model";
import TimeSelectionBase from "./TimeSelectionBase";
import TimeSlotButton from "./TimeSlotButton";
import { normalizeTime } from "src/helpers/timeHelpers";

const FastedDeliveryTimeModal = ({
  onClose,
  isOpen,
  resetDeliveryError,
}: {
  onClose: () => void;
  resetDeliveryError: () => void;
  isOpen: boolean;
}) => {
  const {
    today,
    deliverTime,
    todayBusyTimes,
    todayAvailableTimes,
    handleTimeSelection,
    handleConfirm,
    handleSelectTodayDate,
    isConfirmDisabledForFastedDeliveryModel,
    handleDateSelection,
  } = useDeliveryTimeLogic();

  const {
    order: { deliveryDate: orderDeliveryDate, deliveryTime: orderDeliveryTime },
  } = useOrder();

  const { t } = useTranslation("deliveryInfo");
  const onConfirm = () => {
    handleSelectTodayDate();
    handleConfirm(today);
    resetDeliveryError();
    onClose();
  };

  const handleCancel = () => {
    handleDateSelection(orderDeliveryDate);
    handleTimeSelection(orderDeliveryTime);
    onClose();
  };

  return (
    <Model onClose={handleCancel} isOpen={isOpen}>
      <TimeSelectionBase
        title={t("time.model.deliveryTime")}
        isConfirmDisabled={isConfirmDisabledForFastedDeliveryModel}
        onConfirm={onConfirm}
        onClose={handleCancel}
      >
        {/* Time Selection */}
        <div className="space-y-4">
          <p className="flex items-center gap-x-2 text-lg font-semibold">
            <Icon icon="mingcute:time-line" width="24" height="24" />
            {t("time.model.deliveryTime")}
          </p>
          <div className="space-y-3">
            {todayAvailableTimes.map((time) => {
              const isBusy = todayBusyTimes.includes(normalizeTime(time));

              return (
                <TimeSlotButton
                  isBusy={isBusy}
                  key={time}
                  time={time}
                  isSelected={deliverTime === time}
                  onClick={() => !isBusy && handleTimeSelection(time)}
                />
              );
            })}
          </div>
        </div>
      </TimeSelectionBase>
    </Model>
  );
};

export default FastedDeliveryTimeModal;
