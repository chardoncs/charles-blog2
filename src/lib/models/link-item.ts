import type { SvelteComponent } from "svelte"

export interface LinkItem {
  icon: SvelteComponent
  description?: string
  href?: string
  onClick?: () => void
  styleClass?: string
}
