import { useState, useMemo } from "react";
import { useDeliveryTime } from "src/context/DeliveryTimeCtx";
import { useGetBusyTimes } from "src/hooks/order/useOrderMutation";
import { useOrder } from "src/context/orderCtx";
import {
  generateTimeSlots,
  getTodayAndTomorrow,
} from "src/helpers/timeHelpers";

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
  }, [deliveryDate]);

  const timeSlots = useMemo(() => generateTimeSlots(), [deliverTime]);

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
    updateOrder({ delivery_date: deliveryDate, delivery_time: deliverTime });
  };

  const isConfirmDisabled = !(deliverTime && deliveryDate);

  return {
    today,
    tomorrow,
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
    isConfirmDisabled,
  };
};
