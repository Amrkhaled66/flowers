import { format } from "path";

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

export { getTodayAndTomorrow };
