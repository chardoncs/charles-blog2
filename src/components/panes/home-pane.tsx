import { ContactLinks } from "../info/contact-links"
import Intro from "../../mdx/intro.mdx"

function MainSection() {
  return (
    <div class="box md:grow">
      <h2>Intro</h2>

      <Intro />
    </div>
  )
}

function LinkSection() {
  return (
    <div class="box md:grow">
      <h2>Links</h2>

      <ContactLinks />
    </div>
  )
}

function RandomWordsSection() {
  return (
    <div class="box md:shrink">
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
        <RandomWordsSection />
      </div>
    </div>
  )
}
