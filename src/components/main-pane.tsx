import { useStore } from "@nanostores/preact"
import { $currentTab, TAB_ITEMS } from "../lib/tabs"

export function MainPane() {
  const currentTab = useStore($currentTab)

  return (
    <div class="md:grow px-3 pt-4 pb-2">
      {TAB_ITEMS.find((value) => value.id === currentTab).pane}
    </div>
  )
}
