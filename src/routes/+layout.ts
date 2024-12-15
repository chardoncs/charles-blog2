import { VIBE } from "$lib/vibes"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = ({ url }) => {
  return {
    pathname: url.pathname,
    vibe: VIBE,
  }
}
