<script lang="ts">
  import { Separator } from "$lib/components/ui/separator"
  import { ferrisQuotePool } from "$lib/quotes"
</script>

<div class="container flex flex-col">
  <h1 class="font-bold text-2xl">All possible quotes</h1>
  <Separator />
  <ul class="list-disc">
    {#each ferrisQuotePool.sort() as quote (quote)}
      <li>{quote}</li>
    {/each}
  </ul>
</div>
