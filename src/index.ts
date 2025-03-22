import { serve } from "bun";
import index from "./index.html";
import { getFileRoutes } from "./files";

const server = serve({
  routes: {
    "/": index,
    ...(await getFileRoutes(
      { path: "robots.txt", mime: "text/plain" },
      { path: "images/og/thumbnail.png", mime: "image/png" },
      { path: "images/cat-light-mode.gif", mime: "image/gif" },
      { path: "images/ferris-knife.png", mime: "image/png" },
      { path: "images/icons/bluesky.svg", mime: "image/svg+xml" },
      { path: "images/icons/github.svg", mime: "image/svg+xml" },
      { path: "images/icons/codeberg.svg", mime: "image/svg+xml" },
      { path: "images/icons/x.svg", mime: "image/svg+xml" },
      { path: "images/icons/mastodon.svg", mime: "image/svg+xml" },
      { path: "files/cydong-cv_v3.pdf", mime: "application/pdf" },
      { path: "images/orcid.svg", mime: "image/svg+xml" },
      { path: "images/bun.svg", mime: "image/svg+xml" },
      { path: "images/dman.png", mime: "image/png" },
    )),
  },
  development: Bun.env.NODE_ENV === "development",
});

console.log(`Bun server listening at ${server.url}`);
