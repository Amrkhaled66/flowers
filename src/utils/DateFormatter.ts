function DateFormatter(date: Date): string {
  const day = date.getDate();
  const weekday = new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(
    date,
  );
  const month = new Intl.DateTimeFormat("en-GB", { month: "short" }).format(
    date,
  );

  const hours = date.getHours() % 12 || 12;
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "pm" : "am";

  return `On ${weekday}, ${day} ${month}, ${hours}:${minutes} ${ampm}`;
}

export default DateFormatter;
