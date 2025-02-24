import { atom } from "nanostores"
import { Tab } from "./models/tab"
import { HomePane } from "../components/panes/home-pane"

export const $currentTab = atom<string>("")

export function switchToTab(id: string) {
  $currentTab.set(id)
}

export const TAB_ITEMS: Tab[] = [
  {
    id: "",
    name: "Home",
    pane: <HomePane />,
  },
  {
    id: "cv",
    name: "CV",
    noSwitch: true,
    onClick() {
      window.open("/files/cydong-cv_v3.pdf", "_blank")
    },
  },
  {
    id: "secrets",
    name: "Deepest Secrets 🙈",
    noSwitch: true,
    onClick() {
      window.open("https://youtu.be/dQw4w9WgXcQ?si=TCt76zicD391XvgT", "_blank")
    },
  },
]
