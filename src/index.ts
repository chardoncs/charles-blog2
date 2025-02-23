import index from "./index.html"
import "@fontsource/vt323"
import "@fontsource-variable/caveat"

const server = Bun.serve({
  routes: {
    "/": index,
  },
  development: Bun.env.DEBUG === "1",
})

console.log(`Bun server listening at ${server.url}`)
