<script lang="ts">
  import NameCard from "$lib/components/name-card.svelte"
  import UnsafeRust from "$lib/components/unsafe-rust.svelte"
</script>

<div class="flex absolute w-full h-dvh place-items-center place-content-center top-0 left-0">
  <div class="container !max-w-screen-md flex flex-col items-center">
    <NameCard />
  </div>

  <UnsafeRust />
</div>
