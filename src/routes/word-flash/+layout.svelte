<script lang="ts">
  import '$lib/../app.css'
  import "./word-flash.css"
  import "@fontsource-variable/comfortaa"

	let { children } = $props()
</script>

<div class="text-2xl font-extrabold absolute top-2 left-2">Screenshot two:</div>

<div class="absolute top-0 left-0 w-full h-dvh jaguar-parody text-4xl md:text-6xl font-extralight items-center flex flex-col place-content-center select-none">
  {@render children()}
</div>
