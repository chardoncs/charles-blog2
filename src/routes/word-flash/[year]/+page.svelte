<script lang="ts">
  import { onMount } from "svelte"
  import type { PageServerData } from "./$types"

  const { data }: PageServerData = $props()

  const words: string[] = [
    "fortune",
    "dead",
    "prime",
    "ocaml",
    "rust",
    "poor",
    "rich",
    "go to",
    "college",
    "bluesky",
    "twitter",
    "github",
    "codeberg",
    "forgejo",
    "down with",
    "linux",
    "depression",
    "anxiety",
    "coffee",
    "pomodoro",
    "procrastination",
    "lazy",
    "neovim",
    "ship",
    "good job",
    "run away",
    "fire",
    "water",
    "papers",
    "write",
    "more",
    "jaguar",
    "buy",
    "lambo",
    "no longer",
    "duh",
    "become",
    "taken",
    "promotion",
    "burnout",
    "racing",
    "need for speed",
    "seg fault",
    "emacs",
    "doom",
    "react",
    "svelte",
    "terminal",
    "shop",
    "cyberpunk",
    "bash",
    "bunny",
  ]

  let idx = $state(-1)
  const currentYear = $state(new Date().getFullYear())

  onMount(() => {
    const interval = setInterval(() => {
      if (idx < 0) {
        idx = 0
      } else {
        idx = (idx + 1) % words.length
      }
    }, 25)

    return () => {
      clearInterval(interval)
    }
  })


</script>

<svelte:head>
  <title>Screenshot two ({data.year}) | Charles Dong</title>
</svelte:head>

{#if currentYear >= data.year}
  Welcome to {currentYear}!
{:else}
  {idx >= 0 ? words[idx] : ""}
{/if}
