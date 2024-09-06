import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class values into a single string using clsx and tailwind-merge.
 *
 * @param {...ClassValue} args - variable number of class values to merge
 * @return {string} the merged class string
 */
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
