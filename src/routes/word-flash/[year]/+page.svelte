<script lang="ts">
  import { onMount } from "svelte"
  import type { PageServerData } from "./$types"

  const { data }: { data: PageServerData } = $props()

  const words: string[] = $derived(data.words)

  let idx = $state(0)
  const currentYear = $state(new Date().getFullYear())

  let status: undefined | "expired" | "flashing" | "warning" = $state(undefined)

  let interval: number | undefined = undefined 

  $effect(() => {
    if (status === "flashing") {
      if (interval === undefined) {
        interval = setInterval(() => {
          idx = (idx + 1) % words.length
        })
      }
    } else {
      if (interval !== undefined) {
        clearInterval(interval)
        interval = undefined
      }
    }

    return () => {
      if (interval !== undefined) {
        clearInterval(interval)
        interval = undefined
      }
    }
  })

  onMount(() => {
    status = currentYear >= data.year ? "expired" : "warning"
  })
</script>

<svelte:head>
  <title>Two words ({data.year}) | Charles Dong</title>
</svelte:head>

{#if status === "expired"}
  Welcome to {data.year}!
{:else if status === "flashing"}
  {idx >= 0 ? words[idx] : ""}
{:else if status === "warning"}
  <!-- svelte-ignore a11y_interactive_supports_focus -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div onclick={() => status = "flashing"} role="button" class="cursor-pointer flex flex-col gap-2">
    <span class="text-red-600 dark:text-red-300 text-2xl font-bold">Seizure Warning: flashing text may cause epilepsy to some people!</span>
    <span class="text-xl animate-pulse">Click to continue</span>
  </div>
{/if}


