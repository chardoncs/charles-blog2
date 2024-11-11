import type { HTMLAttributeAnchorTarget } from "svelte/elements"

export interface NavItem {
  name: string
  href?: string
  pathPattern?: RegExp
  onClick?: () => void
  target?: HTMLAttributeAnchorTarget | string
}
