import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely.
 *
 * Conditional classes are flattened by clsx, then conflicting utilities are
 * de-duplicated by tailwind-merge so a `className` prop passed into a
 * component always wins over that component's own defaults.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
