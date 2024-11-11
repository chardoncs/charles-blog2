<script lang="ts">
	import '../app.css'
  import "@fontsource/fira-sans"
  import { ModeWatcher } from "mode-watcher"

	let { children } = $props()
</script>

<svelte:head>
  <title>Charles</title>
</svelte:head>

<ModeWatcher defaultMode="system" />
{@render children()}
