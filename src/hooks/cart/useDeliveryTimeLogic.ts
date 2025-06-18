import { useState, useMemo } from "react";
import { useDeliveryTime } from "src/context/DeliveryTimeCtx";
import { useGetBusyTimes } from "src/hooks/order/useOrderMutation";
import { useOrder } from "src/context/orderCtx";

import { getTodayAndTomorrow } from "src/helpers/timeHelpers";
import formatDateToISO from "src/utils/formatDateToISO";
import { getAvailableTimeSlots } from "src/helpers/timeHelpers";
import { ENDDEDDELIVERYHOUR } from "src/utils/defaultSettings";
export const useDeliveryTimeLogic = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const { updateDeliveryTime, deliveryTime } = useDeliveryTime();
  const { deliverTime, deliveryDate } = deliveryTime;
  const { data: busyTimesData, isLoading: busyTimeLoading } = useGetBusyTimes();
  const { updateOrder } = useOrder();
  const { today, tomorrow } = getTodayAndTomorrow();

  const busyTimes = useMemo(() => {
    if (busyTimeLoading || !busyTimesData) return [];
    return busyTimesData
      .filter((time: any) => time.date === deliveryDate)
      .map((time: any) => time.period);
  }, [deliveryDate, busyTimesData]);

  const AvailableTimeSlots = useMemo(
    () => getAvailableTimeSlots(deliveryDate),
    [deliveryDate, busyTimesData],
  );

  const handleDateSelection = (date: string) => {
    setOpenCalendar(false);
    updateDeliveryTime("deliverTime", "");
    updateDeliveryTime("deliveryDate", date);
  };

  const handleTimeSelection = (time: string) => {
    updateDeliveryTime("deliverTime", time);
  };

  const handleCalendarDateSelect = (date: string) => {
    updateDeliveryTime("deliveryDate", date);
    updateDeliveryTime("deliverTime", "");
    setOpenCalendar(false);
  };

  const handleConfirm = () => {
    updateOrder({ deliveryDate: deliveryDate, deliveryTime: deliverTime });
  };

  const isConfirmDisabled = !(deliverTime && deliveryDate);

  const ToadyIsEnd = new Date().getHours() > ENDDEDDELIVERYHOUR;
  if (deliveryDate === formatDateToISO(new Date())) {
  }
  return {
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
  };
};
