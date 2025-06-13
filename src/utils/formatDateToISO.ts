export default function formatDateToISO(date: Date) {
  return new Date(date).toISOString().slice(0, 10);
}
