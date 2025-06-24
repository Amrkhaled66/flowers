import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

import Model from "src/components/ui/Model";
import DeliveryDateOption from "./DeliveryDateOption";
import Calender from "./calender/Calender";
import TimeSelectionBase from "./TimeSelectionBase";
import TimeSlotButton from "./TimeSlotButton";

import { useDeliveryTimeLogic } from "src/hooks/cart/useDeliveryTimeLogic";
import { useOrder } from "src/context/orderCtx";

import { normalizeTime } from "src/helpers/timeHelpers";
const FullDeliveryTimeModal = ({
  onClose,
  isOpen,
  resetDeliveryError,
}: {
  onClose: () => void;
  resetDeliveryError: () => void;
  isOpen: boolean;
}) => {
  const {
    nextTomorrow,
    tomorrow,
    today,
    deliveryDate,
    deliverTime,
    busyTimes,
    timeSlots,
    openCalendar,
    setOpenCalendar,
    handleDateSelection,
    handleTimeSelection,
    handleCalendarDateSelect,
    handleConfirm,
    isConfirmDisabledForFullDeliveryModel,
    isFastedDelivery,
  } = useDeliveryTimeLogic();

  const { t } = useTranslation("deliveryInfo");

  const {
    order: { deliveryTime: orderDeliveryTime, deliveryDate: orderDeliveryDate },
  } = useOrder();

  useEffect(() => {
    if (orderDeliveryDate && orderDeliveryTime && !isFastedDelivery) {
      handleDateSelection(orderDeliveryDate);
      handleTimeSelection(orderDeliveryTime);
    }
  }, [orderDeliveryDate, orderDeliveryTime]);

  const onConfirm = () => {
    handleConfirm();
    resetDeliveryError();
    onClose();
  };

  const handleCancel = () => {
    handleDateSelection(orderDeliveryDate);
    handleTimeSelection(orderDeliveryTime);
    onClose();
  };

  const pickedDate =
    deliveryDate !== today &&
    deliveryDate !== tomorrow &&
    deliveryDate !== nextTomorrow;

  return (
    <Model onClose={handleCancel} isOpen={isOpen}>
      <TimeSelectionBase
        title={t("time.model.deliveryTime")}
        isConfirmDisabled={isConfirmDisabledForFullDeliveryModel}
        onConfirm={onConfirm}
        onClose={handleCancel}
      >
        {/* Date Selection */}
        <div className="space-y-4">
          <p className="flex items-center gap-x-2 text-sm font-semibold sm:text-lg">
            <Icon icon="solar:calendar-outline" className="size-4 sm:size-6" />
            {t("time.model.deliveryDate")}
          </p>

          <ul className="grid grid-cols-3 gap-x-5">
            <DeliveryDateOption
              onClick={() => handleDateSelection(tomorrow)}
              isActive={deliveryDate === tomorrow}
            >
              <div className="text-xs sm:text-base">
                <p>{t("time.model.tomorrow")}</p>
                <p>{tomorrow}</p>
              </div>
            </DeliveryDateOption>

            <DeliveryDateOption
              onClick={() => handleDateSelection(nextTomorrow)}
              isActive={deliveryDate === nextTomorrow}
            >
              <div className="text-xs sm:text-base">
                <p className="text-nowrap">{t("time.model.nextTomorrow")}</p>
                <p>{nextTomorrow}</p>
              </div>
            </DeliveryDateOption>

            <DeliveryDateOption
              onClick={() => setOpenCalendar((prev) => !prev)}
              isActive={deliveryDate && (openCalendar || pickedDate)}
            >
              <div className="flex flex-col items-center text-xs sm:text-base">
                <Icon
                  icon="solar:calendar-outline"
                  className="size-4 lg:size-6"
                />
                {deliveryDate && pickedDate ? (
                  deliveryDate
                ) : (
                  <p>{t("time.model.pickDate")}</p>
                )}
              </div>
            </DeliveryDateOption>
          </ul>

          {openCalendar && (
            <Calender
              onDateSelect={handleCalendarDateSelect}
              selectedDate={deliveryDate}
            />
          )}
        </div>

        {/* Time Selection */}
        {deliveryDate && !isFastedDelivery && (
          <div className="space-y-4">
            <p className="flex items-center gap-x-2 text-lg font-semibold">
              <Icon icon="mingcute:time-line" width="24" height="24" />
              {t("time.model.deliveryTime")}
            </p>

            <div className="space-y-3">
              {timeSlots.map((time: string) => {
                const isBusy = busyTimes.includes(normalizeTime(time));

                return (
                  <TimeSlotButton
                    key={time}
                    time={time}
                    isBusy={isBusy}
                    isSelected={deliverTime === time}
                    onClick={() => !isBusy && handleTimeSelection(time)}
                  />
                );
              })}
            </div>
          </div>
        )}
      </TimeSelectionBase>
    </Model>
  );
};

export default FullDeliveryTimeModal;
