<script lang="ts">
  import type { LinkItem } from "$lib/models/link-item"
  import { cn } from "$lib/utils"
  import { Button, buttonVariants } from "./ui/button"
  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

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
  <div class="flex gap-2 place-items-center">
    {#each links as { icon, name, description, footnote, href, onClick, styleClass, iconClass }}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            class={cn(
              buttonVariants({ size: icon ? "icon" : "sm", variant: "link" }),
              styleClass,
            )}
          >
            <a
              {href}
              target="_blank"
              onclick={() => onClick?.()}
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
            </a>
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
      </TooltipProvider>
    {/each}
  </div>
</div>
