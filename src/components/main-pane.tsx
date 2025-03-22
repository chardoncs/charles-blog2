import { $currentTab, TAB_ITEMS } from "../lib/tabs";

export function MainPane() {
  const currentTab = $currentTab.value;

  return <div class="md:grow px-3 pt-3 pb-2">{TAB_ITEMS.find((value) => value.id === currentTab).pane}</div>;
}
