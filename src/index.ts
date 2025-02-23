import { serve } from "bun"
import index from "./index.html"

const server = serve({
  routes: {
    "/": index,
    "/robots.txt": new Response(await Bun.file("./public/robots.txt").text(), {
      headers: {
        "Content-Type": "text/plain",
      },
    }),
    "/images/og/thumbnail.png": new Response(await Bun.file("./public/images/og/thumbnail.png").bytes(), {
      headers: {
        "Content-Type": "image/png",
      },
    }),
    "/images/cat-light-mode.gif": new Response(await Bun.file("./public/images/cat-light-mode.gif").bytes(), {
      headers: {
        "Content-Type": "image/gif",
      },
    }),
    "/images/ferris-knife.png": new Response(await Bun.file("./public/images/ferris-knife.png").bytes(), {
      headers: {
        "Content-Type": "image/png",
      }
    }),
    "/images/curly-arrow.svg": new Response(await Bun.file("./public/images/curly-arrow.svg").text(), {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    }),
  },
  development: Bun.env.DEBUG === "1",
})

console.log(`Bun server listening at ${server.url}`)
