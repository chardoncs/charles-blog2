<script lang="ts">
  import { Button } from "./ui/button";
  import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
  import { SunIcon, MoonStarIcon, CheckIcon } from "lucide-svelte"
  import { cn } from "$lib/utils"

  interface Mode {
    name: string
    value: "light" | "dark" | "system"
  }

  const mode: string = "dark"

  const modes: Mode[] = [
    {
      name: "Light",
      value: "light",
    },
    {
      name: "Dark",
      value: "dark",
    },
  ]
</script>

<DropdownMenu>
  <DropdownMenuTrigger asChild let:builder>
    <Button
      builders={[builder]}
      variant="outline"
      style="icon"
      title={`Current Mode: dark`}
    >
      {#if mode === "light"}
        <SunIcon />
      {:else if mode === "dark"}
        <MoonStarIcon />
      {/if}
    </Button>
    <DropdownMenuContent>
      {#each modes as { name, value } (value)}
        <DropdownMenuItem
          class="flex place-items-center gap-1"
          onclick={() => {
            if (value === "light") {
              window.open("/images/cat-light-mode.gif")
            }
          }}
        >
          <CheckIcon
            class={cn(
              "size-4",
              mode !== value && "text-transparent",
            )}
          />
          {name}
        </DropdownMenuItem>
      {/each}
    </DropdownMenuContent>
  </DropdownMenuTrigger>
</DropdownMenu>
