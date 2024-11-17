export const ferrisQuotePool = [
  "Unsafe Rust be like",
  "\"Rewrite it in Rust!\"",
  "ferris the knife",
  "iykyk lol",
  ".unwrap()",
  "I play X4: Foundations btw",
  "\"You guys using Java?\"",
  "\"You guys using Zig?\"",
  "Crablang",
  "\"All your codebase belong to us.\"",
  //"**Powered by SvelteKit & Bun**",
  //"**Arrow made with Inkscape**",
  "\"I use Arch btw\"",
  "\"Neovim btw\"",
  "clippy",
  "oh caml my crab",
]

export function getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * ferrisQuotePool.length)
    return ferrisQuotePool[randomIndex]
}
