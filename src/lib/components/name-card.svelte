<script lang="ts">
  import LinkList from "$lib/components/link-list.svelte";
  import { FingerprintIcon, MailIcon } from "lucide-svelte"
  import { Separator } from "$lib/components/ui/separator"
  import { onMount } from "svelte"
  import { cn } from "$lib/utils"

  const email = "chardon_cs@proton.me"
  const orcid = "0009-0002-1296-4256"

  const wrongTitle = "sudo rm -rf /"
  const fullTitle = "cat ./profile.txt"
  let revealLength = $state(0)

  let title = $derived(revealLength < 0 ? wrongTitle.substring(0, -revealLength) : fullTitle.substring(0, revealLength))

  let showMainPart = $state(false)

  async function rmRoot() {
    await new Promise(r => setTimeout(r, 500))

    while (-revealLength < wrongTitle.length) {
      revealLength--
      await new Promise(r => setTimeout(r, 30)) 
    }

    await new Promise(r => setTimeout(r, 300))

    while (revealLength < 0) {
      revealLength++
      await new Promise(r => setTimeout(r, 30)) 
    }
  }

  async function catProfile() {
    await new Promise(r => setTimeout(r, 500))

    while (revealLength < fullTitle.length) {
      revealLength++
      await new Promise(r => setTimeout(r, 30)) 
    }
  }

  onMount(async () => {
    if (Math.random() < 0.1) {
      await rmRoot()
    }
    await catProfile()

    showMainPart = true
  })
</script>

<h1 class="text-2xl self-start">$ {title}{#if !showMainPart}<span class="animate-blink">_</span>{/if}</h1>
<div
  class={cn(
    "flex flex-col gap-2 transition-opacity duration-[10ms] ease-linear",
    showMainPart ? "opacity-100" : "opacity-0",
  )}
>
  <div class="flex flex-col">
    <p class="font-bold text-2xl">Charles Dong</p>
    <p>👨 he/him</p>
    <p>Graduate student 👨‍🎓, former (and want-to-be-again) software engineer 👨‍💻, Rustacean 🦀 & newcomer Zigger 🦎, computer & programming & FOSS lover 💻</p>
    <Separator />
    <div class="flex gap-2 place-items-center">
      <a
        href="https://en.wikipedia.org/wiki/Public_key_fingerprint"
        target="_blank"
        title="What is it?"
        class="cursor-help"
      >
        <FingerprintIcon class="size-4" />
      </a>
      <span>6971 3F22 36BB D93D 3E78 EFEF 0D56 181B 4841 4DE8</span>
    </div>
    <div class="flex gap-2 place-items-center">
      <MailIcon class="size-4" />
      <a href={`mailto:${email}`} class="hover:underline">{email}</a>
    </div>
    <div class="text-sm flex gap-1">
      <span><a href="https://en.wikipedia.org/wiki/ORCID" target="_blank" title="What is it?" class="cursor-help hover:underline">ORCID</a>:</span>
      <a
        href={`https://orcid.org/${orcid}`}
        target="_blank"
        class="hover:underline"
      >
        {orcid}
      </a>
    </div>
  </div>
  <div>
    <LinkList />
  </div>
</div>
