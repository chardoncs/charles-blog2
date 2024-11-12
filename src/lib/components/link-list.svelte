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
      icon: "twitter-brands-solid.svg",
      description: "Twitter: @chardon_cs",
      href: "https://twitter.com/chardon_cs",
      styleClass: "bg-sky-600 hover:bg-sky-500 dark:hover:bg-sky-700",
      iconClass: "invert",
    },
  ]
</script>

<div>
  <ul class="flex gap-2">
    {#each links as { icon, description, href, onClick, styleClass, iconClass }}
      <Tooltip>
        <TooltipTrigger asChild let:builder>
          <Button
            builders={[builder]}
            size="icon"
            variant="outline"
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
                  "size-6",
                  styleClass || iconClass ? undefined : "dark:invert",
                  iconClass,
                )}
              />
            {:else}
              {icon}
            {/if}
          </Button>
        </TooltipTrigger>
        {#if description}
          <TooltipContent>
            <p>{description}</p>
          </TooltipContent>
        {/if}
      </Tooltip>
    {/each}
  </ul>
</div>
