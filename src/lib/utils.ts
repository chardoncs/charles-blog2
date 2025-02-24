import { twMerge } from "tailwind-merge"
import { ClassValue, clsx } from "clsx"

export function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(...classNames))
}
