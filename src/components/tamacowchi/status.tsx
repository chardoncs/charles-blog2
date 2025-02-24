import { ComponentChildren } from "preact"
import cowsay from "cowsay"

export type CowStatusDictionary = {
  [key: string]: string | ((content?: string) => string | ComponentChildren)
}

export type CowStatus = "idle" | "blink" | "turned" | "say" | "say_eyes-closed" | "pressed" | "say_pressed"

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
  "pressed": `
^__^
(O<)\\_______
(__)\\       )\\/\\
    ||----w |
    ||     ||`,
  "say": (content) => {
    return cowsay.say({
      text: content,
    })
  },
  "say_eyes-closed": (content) => {
    return cowsay.say({
      text: content,
      // @ts-expect-error The types in `cowsay` are broken
      eyes: "--",
    })
  },
  "say_pressed": (content) => {
    return cowsay.say({
      text: content,
      // @ts-expect-error The types in `cowsay` are broken
      eyes: "O<",
    })
  },
}
