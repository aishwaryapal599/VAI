import { type ClassValue, clsx } from "clsx";
import sanitizeHtml from "sanitize-html";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function sanitizeHtmlUserInput<T>(input: string): T {
  return sanitizeHtml(input) as T;
}

export function formatDate(date: Date): string {
  const newDate = new Date(date);

  // Format the date and time
  const formattedDate = `${newDate.toLocaleDateString()} ${newDate.toLocaleTimeString()}`;

  return formattedDate;
}
