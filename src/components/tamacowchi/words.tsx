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
]

export const TURNING_DICT: { [key: string]: ComponentChildren } = {
  "Bun": <img src="/bun.svg" alt="Bun" class="w-24 mr-6" />,
  "Crablang": <img src="/images/ferris-knife.png" alt="Ferris knife" class="w-24 mr-6" />,
}
