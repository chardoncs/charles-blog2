<script lang="ts">
  import { onMount } from "svelte"
  import type { PageServerData } from "./$types"

  const { data }: PageServerData = $props()

  const words: string[] = [...new Set([
    "fortune",
    "dead",
    "prime",
    "ocaml",
    "rust",
    "poor",
    "rich",
    "go to",
    "college",
    "bluesky",
    "twitter",
    "github",
    "codeberg",
    "forgejo",
    "down with",
    "linux",
    "depression",
    "anxiety",
    "coffee",
    "pomodoro",
    "procrastination",
    "lazy",
    "neovim",
    "ship",
    "good job",
    "run away",
    "fire",
    "water",
    "papers",
    "write",
    "more",
    "jaguar",
    "buy",
    "lambo",
    "no longer",
    "duh",
    "become",
    "taken",
    "promotion",
    "burnout",
    "racing",
    "need for speed",
    "seg fault",
    "emacs",
    "doom",
    "react",
    "svelte",
    "terminal",
    "shop",
    "cyberpunk",
    "bash",
    "bunny",
    "quantum", "entropy", "algorithm", "recursion", "cyberpunk", "bitrate",
    "compiler", "debugger", "neural", "quasar", "syntax", "iteration",
    "bandwidth", "protocol", "parsec", "vector", "string", "boolean",
    "pixel", "gigahertz", "megabyte", "hexadecimal", "binary", "singularity",
    "hypervisor", "fibonacci", "shader", "boolean", "lambda", "array",
    "topology", "chromatic", "entropy", "hologram", "ionization",
    "multiverse", "cybernetics", "tesseract", "wormhole", "antimatter",
    "ascii", "unicode", "fractal", "simulation", "nanobot", "mechatronics",
    "middleware", "baryon", "darkmatter", "oxidation", "quantize", "jupyter",
    "kubernetes", "markdown", "plaintext", "hashmap", "infinity", "prime",
    "coefficient", "bytecode", "gamification", "raytracing", "blockchain",
    "cryptography", "algorithmic", "relativity", "stringify", "json",
    "typescript", "java", "shader", "binarytree", "malloc", "pointer",
    "stackoverflow", "markdown", "containerization", "modulus", "pragmatic",
    "obfuscation", "xor", "rootkit", "sandbox", "neutrino", "tachyon",
    "transistor", "photon", "artificial", "intelligence", "combinatorics",
    "hyperbolic", "polynomial", "string", "encryption", "pseudocode",
    "compile", "debug", "encrypt", "decrypt", "compute", "simulate",
    "render", "iterate", "parse", "quantize", "virtualize", "transpile",
    "refactor", "optimize", "execute", "serialize", "hash", "code",
    "emulate", "boot", "link", "fork", "merge", "stream", "cache",
    "upload", "download", "decode", "instantiate", "validate", "initialize",
    "program", "synchronize", "buffer", "modulate", "propagate", "spawn",
    "cluster", "suspend", "resume", "allocate", "deallocate", "monitor",
    "ping", "replicate", "compile", "decode", "encrypt", "scramble",
    "partition", "debug", "virtualize", "scan", "patch", "sandbox",
    "execute", "reboot", "trace", "schedule", "benchmark", "upgrade",
    "iterate", "implement", "query", "augment", "index", "disassemble",
    "commit", "rollback", "override", "decrypt", "construct", "simulate",
    "compute", "synthesize", "render", "transmit", "toggle", "subdivide",
    "execute", "cluster", "partition", "compile", "scramble", "map",
    "unmap", "sandbox", "refactor", "detonate", "explore", "probe",
    "deploy", "overclock", "calibrate", "distill", "quantize",
  ])]

  let idx = $state(-1)
  const currentYear = $state(new Date().getFullYear())

  onMount(() => {
    const interval = setInterval(() => {
      if (idx < 0) {
        idx = 0
      } else {
        idx = (idx + 1) % words.length
      }
    }, 25)

    return () => {
      clearInterval(interval)
    }
  })


</script>

<svelte:head>
  <title>Screenshot two ({data.year}) | Charles Dong</title>
</svelte:head>

{#if currentYear >= data.year}
  Welcome to {currentYear}!
{:else}
  {idx >= 0 ? words[idx] : ""}
{/if}
