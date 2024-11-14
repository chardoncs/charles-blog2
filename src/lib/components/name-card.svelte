<script lang="ts">
  import LinkList from "$lib/components/link-list.svelte";
  import { FingerprintIcon, MailIcon } from "lucide-svelte"
  import { Separator } from "$lib/components/ui/separator"

  const email = "chardon_cs@proton.me"
  const orcid = "0009-0002-1296-4256"
</script>

<div class="place-self-center mx-auto max-w-screen-sm flex flex-col gap-2">
  <div class="flex flex-col gap-1">
    <h1 class="font-bold text-3xl">Charles Dong</h1>
    <p>👨 he/him</p>
    <p>Graduate student 👨‍🎓, former (and want-to-be-again) software engineer 👨‍💻, Rustacean 🦀 & newcomer Zigger 🦎, computer & programming & FOSS lover 💻</p>
    <Separator />
    <div class="text-sm flex gap-2 place-items-center">
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
