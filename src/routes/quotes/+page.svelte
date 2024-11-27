<script lang="ts">
  import { Separator } from "$lib/components/ui/separator"
  import { ferrisQuotePool } from "$lib/quotes"
</script>

<svelte:head>
  <title>Quotes | Charles Dong</title>

  <meta name="description" content="Charles' personal website" />

  <meta property="og:title" content="Charles Dong" />
  <meta property="og:description" content="Charles' personal website" />
  <meta property="og:image" content="https://chardoncs.dev/images/og/thumbnail.png" />
  <meta property="og:image:type" content="image/png" />
</svelte:head>

<div class="container flex flex-col">
  <h1 class="font-bold text-2xl">All possible quotes</h1>
  <Separator />
  <ul class="list-disc">
    {#each ferrisQuotePool.sort() as quote (quote)}
      <li>{quote}</li>
    {/each}
  </ul>
</div>
