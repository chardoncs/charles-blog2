<script lang="ts">
  import "./navbar.css"
  import type { NavItem } from "$lib/models/nav-item"
  import { cn } from "$lib/utils"
  import ModeToggle from "../mode-toggle.svelte"
  import { ChevronLeftIcon } from "lucide-svelte"

  const { path = "" }: { path: string } = $props()

  const dockedFor: RegExp = /^\/word-flash\/.+$/

  const navItems: NavItem[] = [
    {
      name: "Home",
      href: "/",
      pathPattern: /^\/$/,
    },
    {
      name: "Deepest Secrets 🙈",
      onClick() {
        window.open("https://youtu.be/dQw4w9WgXcQ?si=TCt76zicD391XvgT", "_blank")
      },
    },
  ]

  let docked = $derived(dockedFor.test(path))
</script>

<nav
  class={cn(
    "flex-shrink-0 pointer-events-auto flex gap-3 md:gap-6 pl-8 pr-4 py-3 rounded-md mx-5 my-4 place-items-center",
    "backdrop-blur-lg bg-background/50",
    "border border-border text-xl",
    docked && "group translate-x-[86%] hover:translate-x-0 transition-transform pl-4 mr-0",
  )}
>
  {#if docked}
    <div class="group-hover:rotate-180 transition-transform delay-200">
      <ChevronLeftIcon />
    </div>
  {/if}
  {#each navItems as { name, href, pathPattern, onClick, target } (href)}
    <a
      {href}
      onclick={() => {
        onClick?.call(null)
      }}
      {target}
      class={cn(
        "hover:underline cursor-pointer",
        pathPattern?.test(path) && "active",
      )}
    >
      {name}
    </a>
  {/each}

  <div class="shrink-0 grow-0">
    <ModeToggle />
  </div>
</nav>
