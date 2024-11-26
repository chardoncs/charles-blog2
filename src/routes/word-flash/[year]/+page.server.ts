import type { ServerLoad } from "@sveltejs/kit"

export const load: ServerLoad = ({ params }) => {
  return {
    year: parseInt(params.year ?? "0"),
  }
}
