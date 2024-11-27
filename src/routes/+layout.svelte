<script lang="ts">
  import '../app.css'
  import "@fontsource-variable/overpass"
  import { ModeWatcher } from "mode-watcher"
	import Navbar from '$lib/components/nav/navbar.svelte'

	let { children } = $props()
</script>

<ModeWatcher defaultMode="system" />

<div class="w-full h-dvh flex flex-col pointer-events-none overflow-x-clip">
  <header class="flex-shrink-0 sticky top-0 pointer-events-none flex place-content-end z-50">
    <Navbar />
  </header>

  <main class="w-full pointer-events-auto">
    {@render children()}
  </main>
</div>
