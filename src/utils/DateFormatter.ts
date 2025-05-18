function DateFormatter(date: Date, lang: string): string {
  const day = date.getDate();
  const languageFormat = lang === "ar" ? "ar-GB" : "en-GB";
  const weekday = new Intl.DateTimeFormat(languageFormat, { weekday: "long" }).format(
    date,
  );
  const month = new Intl.DateTimeFormat(languageFormat, { month: "short" }).format(
    date,
  );

  const hours = date.getHours() % 12 || 12;
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "pm" : "am";

  return `${weekday}, ${day} ${month}, ${hours}:${minutes} ${ampm}`;
}

export default DateFormatter;
