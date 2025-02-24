import { ComponentChildren } from "preact"

export type CowStatusDictionary = {
  [key: string]: string | ((content?: string) => string | ComponentChildren)
}

export type CowStatus = "idle" | "blink" | "turned"

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
}
