import { isSameDay, isSameYear, format } from 'date-fns';

/**
 * Returns a formatted date string from the given timestamp
 * @param timestamp Numeric timestamp
 * @returns 'HH:mm' format string if the given date is today, 'MMM dd' otherwise
 */
export function getDateString(timestamp: number): string {
  const msTimestamp = timestamp * 1000;
  if (isSameDay(msTimestamp, new Date())) {
    return format(msTimestamp, 'HH:mm');
  }
  if (isSameYear(msTimestamp, new Date())) {
    return format(msTimestamp, 'MMM dd');
  }
  return format(msTimestamp, 'dd/MM/yyyy');
}
