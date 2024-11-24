<script lang="ts">
  import '../app.css'
  import "@fontsource-variable/overpass"
  import { ModeWatcher } from "mode-watcher"
	import Navbar from '$lib/components/nav/navbar.svelte'

	let { children } = $props()
</script>

<svelte:head>
  <title>Charles Dong</title>
  <meta property="og:image" content="https://chardoncs.github.io/assets/og/thumbnail.png" />
</svelte:head>

<ModeWatcher defaultMode="system" />

<div class="w-full h-dvh flex flex-col pointer-events-none">
  <header class="flex-shrink-0 sticky top-0 pointer-events-none flex place-content-end z-50">
    <Navbar />
  </header>

  <main class="w-full pointer-events-auto">
    {@render children()}
  </main>
</div>
