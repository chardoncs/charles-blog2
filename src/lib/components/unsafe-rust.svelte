<script lang="ts">
  import "@fontsource-variable/caveat"
  import { onMount } from "svelte"
  import "./unsafe-rust.css"
  import { ferrisQuotePool } from "$lib/quotes"

  let currentQuote = $state("")

  onMount(() => {
    const randomIndex = Math.floor(Math.random() * ferrisQuotePool.length)
    currentQuote = ferrisQuotePool[randomIndex]
  })
</script>

<div
  class="absolute -z-[1] bottom-0 right-0 select-none"
>
  <div
    class="script-style absolute -translate-y-32 -translate-x-40 text-2xl z-[2] text-center align-bottom min-w-60 pointer-events-auto"
  >
    {currentQuote}
  </div>
  <img
    src="/images/curly-arrow.svg"
    alt="Curly arrow"
    class="absolute w-20 fill-blue-600 -translate-y-24 -translate-x-8 z-[1]"
  />
  <img
    src="/images/ferris-knife.png"
    alt="Ferris holding a knife"
    class="w-40 relative z-0"
  />
</div>
