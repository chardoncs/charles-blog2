import { Link } from "../../lib/models/link"

const LINKS: Link[] = [
  {
    name: "GitHub",
    href: "https://github.com/chardoncs",
    icon: <img src="/images/icons/github.svg" alt="GitHub" class="size-5 invert" />,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/chardoncs.dev",
    icon: <img src="/images/icons/bluesky.svg" alt="Bluesky" class="size-5 invert" />,
  },
]

export function ContactLinks() {
  return (
    <ul>
      {LINKS.map(({ name, href, icon }) => (
        <li>
          <a href={href} class="flex gap-2 items-center">
            {icon}
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}
