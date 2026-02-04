/**
 * Shared timestamp formatting utility for consistent UTC display across the app.
 */

export function formatUTCTimestamp(date: Date = new Date()): string {
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  
  return `${hours}:${minutes}:${seconds} UTC`;
}

export function formatUTCTimestampLong(date: Date = new Date()): string {
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = date.getUTCDate().toString().padStart(2, '0');
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes} UTC`;
}
