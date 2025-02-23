import { useStore } from "@nanostores/preact"
import { $currentTab, TAB_ITEMS } from "../lib/tabs"

export function MainPane() {
  const currentTab = useStore($currentTab)

  return (
    <div class="grow">
      {TAB_ITEMS.find((value) => value.id === currentTab).pane}
    </div>
  )
}
