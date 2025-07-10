import { Icon } from "@iconify/react/dist/iconify.js";
import FullDeliveryTimeSelection from "./FullDeliveryTimeSelection";
import DeliveryOption from "src/components/Cart/DeliveryInfo/DeliveryTime/DeliveryOption";
import formatDateToISO from "src/utils/formatDateToISO";
import FastedDeliveryTimeModal from "./FastedDeliveryTimeModal";

import { useTranslation } from "react-i18next";
import { useOrder } from "src/context/orderCtx";
import { useEffect, useState, useCallback } from "react";
import { useDeliveryTimeLogic } from "src/hooks/cart/useDeliveryTimeLogic";
const DeliveryTime = ({
  error,
  resetDeliveryError,
}: {
  error?: string;
  resetDeliveryError: () => void;
}) => {
  const [activeModel, setActiveModel] = useState<boolean | number>(false);
  const { t } = useTranslation("deliveryInfo");
  const {
    order: { deliveryDate, deliveryTime },
    updateOrder,
  } = useOrder();

  const {
    today,
    todayAvailableTimes,
    isMoreThanOnTimeAvailableToday,
    noAvailableTimesToday,
    handleDateSelection,
    handleTimeSelection,
    isFastedDeliveryConfirmed,
  } = useDeliveryTimeLogic();

  useEffect(() => {
    if (todayAvailableTimes.length === 0) return;

    updateOrder({
      deliveryDate: today,
      deliveryTime: todayAvailableTimes[0],
    });

    handleDateSelection(today);
    handleTimeSelection(todayAvailableTimes[0]);
  }, []);

  const handleFastedDeliveryClick = useCallback(
    isMoreThanOnTimeAvailableToday
      ? () => setActiveModel(0)
      : () => {
        updateOrder({
          deliveryDate: formatDateToISO(new Date()),
          deliveryTime: todayAvailableTimes[0],
        });
      },
    [isMoreThanOnTimeAvailableToday, todayAvailableTimes],
  );

  const openFullDeliveryModal = useCallback(() => setActiveModel(1), []);
  return (
    <div className="flex flex-col gap-y-3">
      {/* Title */}
      <div className="flex items-center gap-x-3">
        <Icon icon="carbon:delivery" width={24} height={24} />
        <p className="text-sm font-bold">{t("time.title")}</p>
      </div>

      {/* Delivery Options */}
      <div className="flex items-start gap-x-4 lg:gap-x-5">
        {!noAvailableTimesToday && (
          <DeliveryOption
            isSelected={isFastedDeliveryConfirmed}
            error={error}
            onClick={handleFastedDeliveryClick}
            title={t("time.fastDelivery")}
            subtitle={
              isFastedDeliveryConfirmed ? (
                <>
                  <p>{deliveryDate}</p>
                  <p>{deliveryTime}</p>
                </>
              ) : (
                t("time.deliveryToday")
              )
            }
            icon="carbon:delivery"
          />
        )}
        <FullDeliveryTimeSelection
          resetDeliveryError={resetDeliveryError}
          isOpen={activeModel === 1}
          onClose={() => {
            setActiveModel(false);
          }}
        />
        <FastedDeliveryTimeModal
          isOpen={activeModel === 0}
          onClose={() => {
            setActiveModel(false);
          }}
          resetDeliveryError={resetDeliveryError}
        />

        <DeliveryOption
          isSelected={!isFastedDeliveryConfirmed}
          error={error}
          title={t("time.title")}
          subtitle={
            !isFastedDeliveryConfirmed && deliveryDate ? (
              <>
                <p>{deliveryDate}</p>
                <p>{deliveryTime}</p>
              </>
            ) : (
              t("time.subTitle")
            )
          }
          isButton
          onClick={openFullDeliveryModal}
        />
      </div>
    </div>
  );
};

export default DeliveryTime;
