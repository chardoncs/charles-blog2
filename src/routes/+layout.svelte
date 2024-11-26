<script lang="ts">
  import '../app.css'
  import "@fontsource-variable/overpass"
  import { ModeWatcher } from "mode-watcher"
	import Navbar from '$lib/components/nav/navbar.svelte'

	let { children } = $props()
</script>

<svelte:head>
  <title>Charles Dong</title>

  <meta property="description" content="Charles' personal website" />

  <meta property="og:title" content="Charles Dong" />
  <meta property="og:description" content="Charles' personal website" />
  <meta property="og:image" content="https://chardoncs.dev/images/og/thumbnail.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
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
