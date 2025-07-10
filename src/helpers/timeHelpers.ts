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

const timeSlots = ["3PM - 6PM", "6PM - 9PM"];
const todayTimeSlots = [
  "10AM - 4PM",
  "4PM - 10PM",
];

const convertTo24Hour = (time: string): number => {
  const [hourStr, period] = time.match(/(\d+)(AM|PM)/i)!.slice(1);
  let hour = parseInt(hourStr, 10);
  if (period.toUpperCase() === "PM" && hour !== 12) hour += 12;
  if (period.toUpperCase() === "AM" && hour === 12) hour = 0;
  return hour;
};

const getTodayAvailableTimeSlots = () => {
  const now = new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;

  return todayTimeSlots.filter((slot) => {
    const endTime = slot.split(" - ")[1];
    const startHour = convertTo24Hour(endTime);

    return startHour - currentHour >= 1;
  });
};

// const getNearestAvailableSlot = (): string | null => {
//   const now = new Date();
//   const currentHour = now.getHours();
//   const currentMinutes = now.getMinutes();

//   const nowInMinutes = currentHour * 60 + currentMinutes;

//   for (const slot of todayTimeSlots) {
//     const [startTime] = slot.split(" - ");
//     const startHour = convertTo24Hour(startTime);
//     const startInMinutes = startHour * 60;

//     if (startInMinutes - nowInMinutes > 60) {
//       return slot;
//     }
//   }

//   return null;
// };

function getTodayAndUpcomingDates(): {
  today: string;
  tomorrow: string;
  nextTomorrow: string;
} {
  const date = new Date();

  const today = new Date(date);
  const tomorrow = new Date(date);
  const nextTomorrow = new Date(date);

  tomorrow.setDate(date.getDate() + 1);
  nextTomorrow.setDate(date.getDate() + 2);

  return {
    today: formatDateToISO(today),
    tomorrow: formatDateToISO(tomorrow),
    nextTomorrow: formatDateToISO(nextTomorrow),
  };
}

const normalizeTime = (t: string) => t.replace(/\s+/g, "").toLowerCase();

export {
  getTodayAndUpcomingDates,
  convertTo24Hour,
  getTodayAvailableTimeSlots,
  timeSlots,
  normalizeTime,
};
