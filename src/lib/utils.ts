import {
  type ClassValue,
  clsx,
} from 'clsx';
import sanitizeHtml from 'sanitize-html';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function sanitizeHtmlUserInput<T>(input: string): T {
  return sanitizeHtml(input) as T;
}
