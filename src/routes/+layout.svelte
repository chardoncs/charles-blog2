<script lang="ts">
  import '../app.css'
  import "@fontsource/vt323"
  import Navbar from '$lib/components/nav/navbar.svelte'
  import type { Snippet } from 'svelte'
  import type { LayoutData } from './$types'

  let { children, data }: { children: Snippet, data: LayoutData } = $props()
</script>

<div class="w-full h-dvh flex flex-col pointer-events-none overflow-x-clip">
  <header class="flex-shrink-0 sticky top-0 pointer-events-none flex place-content-end z-50">
    <Navbar path={data.pathname} />
  </header>

  <main class="w-full pointer-events-auto">
    {@render children()}
  </main>
</div>
