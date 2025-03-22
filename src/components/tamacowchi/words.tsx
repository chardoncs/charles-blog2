import { ComponentChildren } from "preact"

export const CANDIDATE_SENTENCES = [
  "Bun",
  "Crablang",
  "I use Arch btw",
  "Rewrite it in Rust!",
  "iykyk lol",
  "You guys using Java?",
  "You guys using Zig?",
  "All your codebase belong to us.",
  "oh caml my caml",
  "D",
]

export const TURNING_DICT: { [key: string]: ComponentChildren | undefined } = {
  "Bun": <img src="/images/bun.svg" alt="Bun" class="w-24 mr-6" />,
  "Crablang": <img src="/images/ferris-knife.png" alt="Ferris knife" class="w-24 mr-6" />,
  "D": <img src="/images/dman.png" alt="D Man" class="w-24 mr-6" />,
}
