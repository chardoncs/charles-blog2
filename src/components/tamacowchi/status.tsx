import { ComponentChildren } from "preact"
import cowsay from "cowsay"

export type CowStatusDictionary = {
  [key: string]: string | ((content?: string) => string | ComponentChildren)
}

export type CowStatus = "idle" | "blink" | "turned" | "say" | "pressed"

export const COW_STATUS: CowStatusDictionary = {
  "idle": `
^__^
(oo)\\_______
(__)\\       )\\/\\
    ||----w |
    ||     ||`,
  "blink": `
^__^
(--)\\_______
(__)\\       )\\/\\
    ||----w |
    ||     ||`,
  "say": (content) => {
    return cowsay.say({
      text: content,
    })
  },
  "pressed": `
^__^
(O<)\\_______
(__)\\       )\\/\\
    ||----w |
    ||     ||`,
}
