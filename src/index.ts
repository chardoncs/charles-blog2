import { serve } from "bun"
import index from "./index.html"
import { getFileRoutes } from "./files"

const server = serve({
  routes: {
    "/": index,
    ...await getFileRoutes(
      { path: "robots.txt", mime: "text/plain" },
      { path: "images/og/thumbnail.png", mime: "image/png" },
      { path: "images/cat-light-mode.gif", mime: "image/gif" },
      { path: "images/ferris-knife.png", mime: "image/png" },
      { path: "images/curly-arrow.svg", mime: "image/svg+xml" },
      { path: "images/icons/bluesky.svg", mime: "image/svg+xml" },
      { path: "images/icons/github.svg", mime: "image/svg+xml" },
      { path: "images/icons/codeberg.svg", mime: "image/svg+xml" },
      { path: "images/icons/x.svg", mime: "image/svg+xml" },
      { path: "images/icons/mastodon.svg", mime: "image/svg+xml" },
    ),
  },
  development: Bun.env.DEBUG === "1",
})

console.log(`Bun server listening at ${server.url}`)
