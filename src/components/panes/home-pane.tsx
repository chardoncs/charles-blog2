function MainSection() {
  return (
    <div class="box md:grow">
      <h2>Terminal</h2>
    </div>
  )
}

function LinkSection() {
  return (
    <div class="box md:grow">
      <h2>Links</h2>
    </div>
  )
}

function FerrisSection() {
  return (
    <div class="box md:shrink-0">
      <h2>???</h2>
    </div>
  )
}

export function HomePane() {
  return (
    <div class="w-full md:h-full flex flex-col md:flex-row gap-4">
      <MainSection />
      <div class="flex flex-col gap-4 shrink-0 md:w-52 lg:w-60 xl:w-72">
        <LinkSection />
        <FerrisSection />
      </div>
    </div>
  )
}
