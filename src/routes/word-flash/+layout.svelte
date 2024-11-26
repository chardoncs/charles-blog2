<script lang="ts">
  import '$lib/../app.css'
  import "./word-flash.css"
  import "@fontsource-variable/comfortaa"

	let { children } = $props()

  let continued = $state(false)
</script>

<svelte:head>
  <title>Text flash | Charles Dong</title>
</svelte:head>

<div class="text-2xl font-extrabold absolute top-2 left-2">Screenshot two:</div>

<div class="absolute top-0 left-0 w-full h-dvh jaguar-parody text-4xl md:text-6xl font-extralight items-center flex flex-col place-content-center select-none">
  {#if continued}
    {@render children()}
  {:else}
    <div onclick={() => continued = true} role="button" class="cursor-pointer flex flex-col gap-2">
      <span class="text-red-600 dark:text-red-300 text-2xl">Seizure Warning: flash text may cause epilepsy to some people!</span>
      <span class="text-xl">Click to continue</span>
    </div>
  {/if}
</div>
