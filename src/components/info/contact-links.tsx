import { Link } from "../../lib/models/link";

const LINKS: Link[] = [
  {
    name: "GitHub",
    href: "https://github.com/chardoncs",
    icon: <img src="/images/icons/github.svg" alt="GitHub" class="size-5 invert" />,
  },
  {
    name: "Codeberg",
    href: "https://codeberg.org/chardoncs",
    icon: <img src="/images/icons/codeberg.svg" alt="Codeberg" class="size-5 invert" />,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/chardoncs.dev",
    icon: <img src="/images/icons/bluesky.svg" alt="Bluesky" class="size-5 invert" />,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/chardon_cs",
    icon: <img src="/images/icons/x.svg" alt="X (Twitter)" class="size-5 invert" />,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@chardon_cs",
    icon: <img src="/images/icons/mastodon.svg" alt="Mastodon" class="size-5 invert" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yue-dong-237026128/",
  },
];

export function ContactLinks() {
  return (
    <ul class="flex flex-col gap-1">
      {LINKS.map(({ name, href, icon }) => (
        <li>
          <a href={href} class="flex gap-2 items-center" target="_blank">
            {icon}
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
