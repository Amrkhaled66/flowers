import formatDateToISO from "src/utils/formatDateToISO";
export const formatTime = (hour: number) => {
  const suffix = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${hour12}${suffix}`;
};

export const generateTimeSlots = () => {
  const times = [
    { start: 9, end: 13 },
    { start: 13, end: 15 },
    { start: 15, end: 18 },
    { start: 18, end: 21 },
  ];

  const slots = times.map((time) => {
    return `${formatTime(time.start)} - ${formatTime(time.end)}`;
  });

  return slots;
};

const timeSlots = ["9AM - 1PM", "1PM - 3PM", "3PM - 6PM", "6PM - 9PM"];

const getAvailableTimeSlots = (deliveryDate: string) => {
  const todayISO = formatDateToISO(new Date());
  const now = new Date();

  const currentHour = now.getHours();
  if (deliveryDate === todayISO) {
    return timeSlots.filter((slot) => {
      const endHour = slot.split(" - ")[1];
      const EndHourHour24 = convertTo24Hour(endHour);
      return EndHourHour24 - currentHour > 1;
    });
  }

  return timeSlots;
};

const convertTo24Hour = (time: string): number => {
  const [hourStr, period] = time.match(/(\d+)(AM|PM)/i)!.slice(1);
  let hour = parseInt(hourStr, 10);

  if (period.toUpperCase() === "PM" && hour !== 12) {
    hour += 12;
  } else if (period.toUpperCase() === "AM" && hour === 12) {
    hour = 0;
  }

  return hour;
};

function getTodayAndTomorrow(): { today: string; tomorrow: string } {
  const date = new Date();
  const tomorrow = new Date(date);
  tomorrow.setDate(date.getDate() + 1);

  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };
  const formatter = new Intl.DateTimeFormat("en-GB", options);

  return {
    today: formatter.format(date),
    tomorrow: formatter.format(tomorrow),
  };
}

export { getTodayAndTomorrow, getAvailableTimeSlots };
