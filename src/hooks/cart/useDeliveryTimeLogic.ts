import { useState, useMemo } from "react";
import { useDeliveryTime } from "src/context/DeliveryTimeCtx";
import { useGetBusyTimes } from "src/hooks/order/useOrderMutation";
import { useOrder } from "src/context/orderCtx";

import {
  getTodayAndUpcomingDates,
  timeSlots,
  getTodayAvailableTimeSlots,
} from "src/helpers/timeHelpers";
export const useDeliveryTimeLogic = () => {
  const [openCalendar, setOpenCalendar] = useState(false);

  const { updateDeliveryTime, deliveryTime } = useDeliveryTime();
  const { deliverTime, deliveryDate } = deliveryTime;

  const { data: busyTimesData, isLoading: busyTimeLoading } = useGetBusyTimes();
  const {
    updateOrder,
    order: { deliveryDate: orderDeliveryDate },
  } = useOrder();

  const { nextTomorrow, tomorrow, today } = getTodayAndUpcomingDates();

  const busyTimes = useMemo(() => {
    if (busyTimeLoading || !busyTimesData) return [];
    return busyTimesData
      .filter((time: any) => time.date === deliveryDate)
      .map((time: any) => time.period);
  }, [deliveryDate, busyTimesData]);

  const todayBusyTimes = useMemo(() => {
    if (busyTimeLoading || !busyTimesData) return [];
    return busyTimesData
      .filter((time: any) => time.date === today)
      .map((time: any) => time.period);
  }, [today, busyTimesData, busyTimeLoading]);

  const handleSelectTodayDate = () => {
    updateDeliveryTime("deliveryDate", today);
  };

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

  const handleConfirm = (forcedDate?: string) => {
    updateOrder({
      deliveryDate: forcedDate || deliveryDate,
      deliveryTime: deliverTime,
    });
  };

  const todayAvailableTimes = getTodayAvailableTimeSlots();
  const isMoreThanOnTimeAvailableToday = todayAvailableTimes.length > 1;
  const noAvailableTimesToday = todayAvailableTimes.length === 0;
  const isFastedDelivery = deliveryDate === today;
  const isFastedDeliveryConfirmed = orderDeliveryDate === today;

  const isConfirmDisabledForFullDeliveryModel =
    deliveryDate === today || !deliveryDate || !deliverTime;
  const isConfirmDisabledForFastedDeliveryModel =
    !todayAvailableTimes.includes(deliverTime);
  return {
    nextTomorrow,
    tomorrow,
    deliveryDate,
    deliverTime,
    busyTimes,
    openCalendar,
    setOpenCalendar,
    handleDateSelection,
    handleSelectTodayDate,
    handleTimeSelection,
    handleCalendarDateSelect,
    handleConfirm,
    isConfirmDisabledForFullDeliveryModel,
    isConfirmDisabledForFastedDeliveryModel,
    timeSlots,
    today,
    todayBusyTimes,
    isMoreThanOnTimeAvailableToday,
    todayAvailableTimes,
    noAvailableTimesToday,
    isFastedDelivery,
    isFastedDeliveryConfirmed,
  };
};
