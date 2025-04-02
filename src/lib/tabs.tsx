import { Tab } from "./models/tab";
import { signal } from "@preact/signals";

export const $currentTab = signal<string>("");

export function switchToTab(id: string) {
  $currentTab.value = id;
}

export const TAB_ITEMS: Tab[] = [
  {
    id: "",
    name: "Home",
  },
  {
    id: "cv",
    name: "CV",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "secrets",
    name: "Deepest Secrets 🙈",
    noSwitch: true,
    onClick() {
      window.open("https://youtu.be/dQw4w9WgXcQ?si=TCt76zicD391XvgT", "_blank");
    },
  },
];
