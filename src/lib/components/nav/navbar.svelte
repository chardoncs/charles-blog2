<script lang="ts">
  import type { NavItem } from "$lib/models/nav-item"
  import { cn } from "$lib/utils"
  import { onMount } from "svelte"
  import ModeToggle from "../mode-toggle.svelte";

  const navItems: NavItem[] = [
    {
      name: "Home",
      href: "/",
      pathPattern: /^\/$/,
    },
    {
      name: "Deepest Secrets 🙈",
      onClick() {
        window.open("https://archive.org/download/kikTXNL6MvX6ZpRXM/kikTXNL6MvX6ZpRXM.mp4", "_blank")
      },
    },
  ]

  let location = $state("")

  onMount(() => {
    location = window.location.pathname
  })
</script>

<nav
  class={cn(
    "absolute float-right top-0 right-0 pointer-events-auto flex gap-3 md:gap-6 pl-8 pr-4 py-3 rounded-2xl mx-5 my-4 place-items-center",
    "backdrop-blur-lg bg-zinc-50 dark:bg-zinc-950/20",
    "border border-zinc-200 dark:border-zinc-800",
  )}
>
  {#each navItems as { name, href, pathPattern, onClick, target } (href)}
    <a
      {href}
      onclick={() => onClick?.call(null)}
      {target}
      class={cn(
        "hover:underline cursor-pointer",
        pathPattern?.test(location) ? "font-bold" : undefined,
      )}
    >
      {name}
    </a>
  {/each}

  <div class="shrink-0 grow-0">
    <ModeToggle />
  </div>
</nav>
