<script lang="ts">
  import { Button } from "./ui/button";
  import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
  import { userPrefersMode, resetMode, setMode } from "mode-watcher"
  import { SunIcon, MoonStarIcon, MonitorIcon } from "lucide-svelte"

</script>

<DropdownMenu>
  <DropdownMenuTrigger asChild let:builder>
    <Button
      builders={[builder]}
      variant="outline"
      style="icon"
      title={`Current Mode: ${$userPrefersMode}`}
    >
      {#if $userPrefersMode === "light"}
        <SunIcon />
      {:else if $userPrefersMode === "dark"}
        <MoonStarIcon />
      {:else if $userPrefersMode === "system"}
        <MonitorIcon />
      {/if}
    </Button>
    <DropdownMenuContent>
      <DropdownMenuItem onclick={() => setMode("light")}>
        Light
      </DropdownMenuItem>
      <DropdownMenuItem onclick={() => setMode("dark")}>
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem onclick={() => resetMode()}>
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenuTrigger>
</DropdownMenu>
