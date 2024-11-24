<script lang="ts">
  import "./navbar.css"
  import type { NavItem } from "$lib/models/nav-item"
  import { cn } from "$lib/utils"
  import ModeToggle from "../mode-toggle.svelte";
  import { onMount } from "svelte"

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

  let path = $state("")

  onMount(() => {
    path = window.location.pathname
  })
</script>

<nav
  class={cn(
    "flex-shrink-0 pointer-events-auto flex gap-3 md:gap-6 pl-8 pr-4 py-3 rounded-2xl mx-5 my-4 place-items-center",
    "backdrop-blur-lg bg-zinc-50 dark:bg-zinc-950/20",
    "border border-zinc-200 dark:border-zinc-800",
  )}
>
  {#each navItems as { name, href, pathPattern, onClick, target } (href)}
    <a
      {href}
      onclick={() => {
        if (href) {
          path = href
        }
        onClick?.call(null)
      }}
      {target}
      class={cn(
        "hover:underline cursor-pointer",
        pathPattern?.test(path) ? "active" : undefined,
      )}
    >
      {name}
    </a>
  {/each}

  <div class="shrink-0 grow-0">
    <ModeToggle />
  </div>
</nav>
