<script lang="ts">
  import { Button } from "./ui/button";
  import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
  import { userPrefersMode, setMode, mode } from "mode-watcher"
  import { SunIcon, MoonStarIcon, CheckIcon } from "lucide-svelte"
  import { cn } from "$lib/utils"

  interface Mode {
    name: string
    value: "light" | "dark" | "system"
  }

  const modes: Mode[] = [
    {
      name: "Light",
      value: "light",
    },
    {
      name: "Dark",
      value: "dark",
    },
    {
      name: "System",
      value: "system",
    },
  ]
</script>

<DropdownMenu>
  <DropdownMenuTrigger asChild let:builder>
    <Button
      builders={[builder]}
      variant="outline"
      style="icon"
      title={`Current Mode: ${$userPrefersMode}`}
    >
      {#if $mode === "light"}
        <SunIcon />
      {:else if $mode === "dark"}
        <MoonStarIcon />
      {/if}
    </Button>
    <DropdownMenuContent>
      {#each modes as { name, value } (value)}
        <DropdownMenuItem
          class="flex place-items-center gap-1"
          onclick={() => setMode(value)}
        >
          <CheckIcon
            class={cn(
              "size-4",
              $userPrefersMode !== value && "text-transparent",
            )}
          />
          {name}
        </DropdownMenuItem>
      {/each}
    </DropdownMenuContent>
  </DropdownMenuTrigger>
</DropdownMenu>
