<script lang="ts">
  import "@fontsource-variable/fira-code"
  import "./page.css"
  import { Card, CardContent } from "$lib/components/ui/card"
  import { onMount } from "svelte";
  import * as cowsay from "cowsay"
  import { getRandomQuote } from "$lib/quotes"

  let output = $state("")

  onMount(() => {
    output = cowsay.say({
      text: getRandomQuote(),
    })
  })
  
</script>

<Card>
  <CardContent class="code-block">
    {#each output.split("\n") as line }
      <div>{line}</div>
    {/each}
  </CardContent>
</Card>
