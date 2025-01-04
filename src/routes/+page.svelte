<script lang="ts">
  import NameCard from "$lib/components/name-card.svelte"
    import { Button } from "$lib/components/ui/button";
  import UnsafeRust from "$lib/components/unsafe-rust.svelte"
    import { GitBranchIcon } from "lucide-svelte";
</script>

<svelte:head>
  <title>Charles Dong</title>

  <meta name="description" content="Charles' personal website" />

  <meta property="og:title" content="Charles Dong" />
  <meta property="og:description" content="Charles' personal website" />
  <meta property="og:image" content="https://chardoncs.dev/images/og/thumbnail.png" />
  <meta property="og:image:type" content="image/png" />
</svelte:head>

<div class="flex absolute w-full h-dvh place-items-center place-content-center top-0 left-0">
  <div class="container !max-w-screen-md flex flex-col items-center">
    <NameCard />
  </div>
</div>

<footer>
  <UnsafeRust />

  <Button
    class="absolute bottom-0 left-0"
    variant="outline"
    href="https://github.com/chardoncs/charles-blog2"
    target="_blank"
    size="icon"
    title="Repository"
  >
    <GitBranchIcon class="size-4" />
  </Button>
</footer>
