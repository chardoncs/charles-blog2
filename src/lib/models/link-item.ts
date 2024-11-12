import type { Component } from "svelte"

export interface LinkItem {
  icon: string | Component
  description?: string
  href?: string
  onClick?: () => void
  styleClass?: string
  iconClass?: string
}
