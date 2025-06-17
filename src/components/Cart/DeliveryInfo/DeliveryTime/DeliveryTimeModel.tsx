import { Icon } from "@iconify/react";
import clsx from "clsx";

import Model from "src/components/ui/Model";
import Button from "src/components/ui/Button";
import Calender from "./Calender";
import TimeSlotButton from "./TimeSlotButton";
import DeliveryDateOption from "./DeliveryDateOption";

import { useDeliveryTimeLogic } from "src/hooks/cart/useDeliveryTimeLogic";
import { useTranslation } from "react-i18next";
const DeliveryTimeModel = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  const {
    today,
    tomorrow,
    deliveryDate,
    deliverTime,
    busyTimes,
    AvailableTimeSlots,
    openCalendar,
    setOpenCalendar,
    handleDateSelection,
    handleTimeSelection,
    handleCalendarDateSelect,
    handleConfirm,
    isConfirmDisabled,
    ToadyIsEnd,
  } = useDeliveryTimeLogic();
  const { t } = useTranslation("deliveryInfo");

  return (
    <Model onClose={onClose} isOpen={isOpen}>
      <div className="text-text-main mx-auto max-h-[80vh] w-full space-y-8 overflow-y-auto rounded-xl bg-white px-4 py-5 text-center lg:w-[600px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold sm:text-xl">
            {t("time.model.title")}
          </p>
          <button
            onClick={onClose}
            className="border-stroke rounded-xl border p-1"
          >
            <Icon
              icon="material-symbols:close-rounded"
              width="24"
              height="24"
            />
          </button>
        </div>

        {/* Date Selection */}
        <div className="space-y-4">
          <p className="flex items-center gap-x-2 text-sm font-semibold sm:text-lg">
            <Icon icon="solar:calendar-outline" className="size-4 sm:size-6" />
            {t("time.model.deliveryDate")}
          </p>
          <ul className="grid grid-cols-3 gap-x-5">
            {!ToadyIsEnd && (
              <DeliveryDateOption
                onClick={() =>
                  handleDateSelection(new Date().toISOString().slice(0, 10))
                }
                isActive={
                  deliveryDate === new Date().toISOString().slice(0, 10)
                }
              >
                <div className="text-xs sm:text-base">
                  <p>{`${t("time.model.today")}`} </p>
                  <p>{today}</p>
                </div>
              </DeliveryDateOption>
            )}
            <DeliveryDateOption
              onClick={() => {
                const tomorrowDate = new Date();
                tomorrowDate.setDate(tomorrowDate.getDate() + 1);
                handleDateSelection(tomorrowDate.toISOString().slice(0, 10));
              }}
              isActive={
                deliveryDate ===
                new Date(Date.now() + 86400000).toISOString().slice(0, 10)
              }
            >
              <div className="text-xs sm:text-base">
                <p>{`${t("time.model.tomorrow")}`} </p>
                <p>{tomorrow}</p>
              </div>
            </DeliveryDateOption>

            <DeliveryDateOption
              onClick={() => setOpenCalendar((prev) => !prev)}
              isActive={
                openCalendar ||
                (deliveryDate !== new Date().toISOString().slice(0, 10) &&
                  deliveryDate !==
                    new Date(Date.now() + 86400000)
                      .toISOString()
                      .slice(0, 10) &&
                  deliveryDate !== "")
              }
            >
              <div className="flex flex-col items-center text-xs sm:text-base">
                <Icon
                  icon="solar:calendar-outline"
                  className="size-4 lg:size-6"
                />
                {deliveryDate ? deliveryDate : <p>Pick a Date</p>}
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
        {deliveryDate && (
          <div className="space-y-4">
            <p className="flex items-center gap-x-2 text-lg font-semibold">
              <Icon icon="mingcute:time-line" width="24" height="24" />
              {t("time.model.deliveryTime")}
            </p>
            <div className="space-y-3">
              {AvailableTimeSlots.map((time) => {
                const isBusy = busyTimes.includes(
                  time.replace(/\s+/g, "").toLowerCase(),
                );
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
        )}

        {/* Footer */}
        <div className="flex gap-x-6">
          <Button
            text={t("time.model.confirm")}
            className={clsx("w-full !py-3 text-white", {
              "bg-main": !isConfirmDisabled,
              "!cursor-not-allowed opacity-60": isConfirmDisabled,
            })}
            onClick={() => {
              handleConfirm();
              onClose();
            }}
          />
          <Button
            text={t("time.model.cancel")}
            className="text-main border-main w-full border bg-white !py-3 hover:!bg-white focus:!bg-white"
            onClick={onClose}
          />
        </div>
      </div>
    </Model>
  );
};

export default DeliveryTimeModel;
