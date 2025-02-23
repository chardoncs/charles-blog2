import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"

export function cn(...classNames: string[]) {
  return twMerge(clsx(...classNames))
}
