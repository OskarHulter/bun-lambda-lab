import { format } from 'date-fns'

/**
 * Formats a Date object to a string in the format 'YYYY-MM-DD'.
 * @param date The Date object to format.
 * @returns The formatted date string.
 */
export function formatDate(date: Date): string {
  return format(date, 'yyyy-MM-dd')
}

/**
 * Formats a number to a string with a specified number of decimal places.
 * @param number The number to format.
 * @param decimalPlaces The number of decimal places to include.
 * @returns The formatted number string.
 */
export function formatNumber(number: number, decimalPlaces: number = 2): string {
  return number.toFixed(decimalPlaces)
}
