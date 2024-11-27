<script lang="ts">
  import NameCard from "$lib/components/name-card.svelte"
  import UnsafeRust from "$lib/components/unsafe-rust.svelte"
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

  <UnsafeRust />
</div>
