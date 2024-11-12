import type { Component } from "svelte"

export interface LinkItem {
  icon?: string | Component
  name?: string
  description?: string
  footnote?: string
  href?: string
  onClick?: () => void
  styleClass?: string
  iconClass?: string
}
