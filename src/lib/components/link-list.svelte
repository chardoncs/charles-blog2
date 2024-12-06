<script lang="ts">
  import type { LinkItem } from "$lib/models/link-item"
  import { cn } from "$lib/utils"
  import { Button } from "./ui/button"
  import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

  const links: LinkItem[] = [
    {
      icon: "github.svg",
      description: "GitHub: chardoncs",
      href: "https://github.com/chardoncs",
    },
    {
      icon: "codeberg.svg",
      description: "Codeberg: chardoncs",
      href: "https://codeberg.org/chardoncs",
    },
    {
      icon: "bluesky.svg",
      description: "Bluesky: @chardoncs.dev",
      href: "https://bsky.app/profile/chardoncs.dev",
    },
    {
      icon: "mastodon.svg",
      description: "Mastodon: @chardon_cs@mastodon.social",
      href: "https://mastodon.social/@chardon_cs",
    },
    {
      icon: "twitter-brands-solid.svg",
      description: "Twitter: @chardon_cs",
      href: "https://twitter.com/chardon_cs",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yue-dong-237026128/",
    },
  ]
</script>

<div>
  <ul class="flex gap-2 place-items-center">
    {#each links as { icon, name, description, footnote, href, onClick, styleClass, iconClass }}
      <Tooltip>
        <TooltipTrigger asChild let:builder>
          <Button
            builders={[builder]}
            size={icon ? "icon" : "sm"}
            variant="link"
            {href}
            target="_blank"
            onclick={() => onClick?.call(null)}
            class={cn(
              styleClass,
            )}
          >
            {#if typeof icon === "string"}
              <img
                src={`/images/icons/${icon}`}
                alt={description}
                class={cn(
                  "size-5",
                  styleClass || iconClass ? undefined : "invert",
                  iconClass,
                )}
              />
            {:else}
              {icon}
            {/if}
            {#if !icon}
              {name ?? description}
            {/if}
          </Button>
        </TooltipTrigger>
        {#if description || footnote}
          <TooltipContent>
            <p>{description}</p>
            {#if footnote}
              <p class="text-xs">&gt;&nbsp;{footnote}</p>
            {/if}
          </TooltipContent>
        {/if}
      </Tooltip>
    {/each}
  </ul>
</div>
