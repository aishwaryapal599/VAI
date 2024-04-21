import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import sanitizeHtml from "sanitize-html";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function sanitizeHtmlUserInput<T>(input: string): T {
  return sanitizeHtml(input) as T;
}
