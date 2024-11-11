<script lang="ts">
  import '../app.css'
  import "@fontsource-variable/overpass"
  import "@fontsource-variable/caveat"
  import { ModeWatcher } from "mode-watcher"
	import Navbar from '$lib/components/nav/navbar.svelte'

	let { children } = $props()
</script>

<svelte:head>
  <title>Charles Dong</title>
</svelte:head>

<ModeWatcher defaultMode="system" />

<Navbar />

<main class="w-full h-dvh">
  {@render children()}
</main>
