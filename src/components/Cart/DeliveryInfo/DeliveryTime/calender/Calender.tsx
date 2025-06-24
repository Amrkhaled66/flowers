import Calendar from "react-calendar";
import { isToday, isSameDay } from "date-fns";
import { Icon } from "@iconify/react/dist/iconify.js";
import formatDateToISO from "src/utils/formatDateToISO";
import "react-calendar/dist/Calendar.css";
import "./calender.css";
const MyCalendar = ({
  onDateSelect,
  selectedDate,
}: {
  onDateSelect: (date: string) => void;
  selectedDate: string;
}) => {
  return (
    <Calendar
      minDate={new Date(Date.now() + 86400000)}
      onChange={(date) => {
        if (!(date instanceof Date)) return;
        onDateSelect(formatDateToISO(date));
      }}
      value={selectedDate}
      tileClassName={({ date }) => {
        if (isSameDay(date, selectedDate)) {
          return "!bg-main !text-white !mb-1 rounded-lg";
        }

        if (isToday(date)) {
          return "!bg-transparent hover:!text-white  rounded-lg !mb-1 hover:!bg-main";
        }

        return "hover:!bg-main  !bg-transparent hover:!text-white !mb-1 rounded-lg disabled:!cursor-not-allowed disabled:!bg-transparent disabled:!text-stroke disabled:hover:!text-stroke !text-main ";
      }}
      next2Label={null}
      prev2Label={null}
      nextLabel={
        <div className="flex items-center justify-center">
          <Icon icon="ic:baseline-greater-than" width="24" height="24" />
        </div>
      }
      prevLabel={
        <div className="flex items-center justify-center">
          <Icon icon="ic:baseline-less-than" width="24" height="24" />
        </div>
      }
      navigationAriaLabel="Change month"
      calendarType="hebrew"
      className="!w-full !space-y-2 rounded-xl bg-white !p-2"
    />
  );
};

export default MyCalendar;
