import { signal } from "@preact/signals"
import { useEffect, useMemo, useState } from "preact/hooks"
import { interrupt } from "../../lib/utils/interruption"
import { COW_STATUS, CowStatus } from "./status"
import "./tamacowchi.css"
import { cn } from "../../lib/utils"
import { CANDIDATE_SENTENCES } from "./words"

const cowGlobalStatus = signal<CowStatus>("idle")

export function Tamacowchi() {
  const [blink, setBlink] = useState(false)
  const [content, setContent] = useState<string | undefined>(undefined)
  const [displayContent, setDisplayContent] = useState<string>("")

  const [isPressed, setIsPressed] = useState(false)

  const status = useMemo(() => {
    if (displayContent.length > 0) {
      if (isPressed) {
        return "say_pressed"
      }

      return "say"
    }

    if (isPressed) {
      return "pressed"
    }

    if (blink && cowGlobalStatus.value === "idle") {
      return "blink"
    }

    return cowGlobalStatus.value
  }, [cowGlobalStatus.value, blink, isPressed, displayContent])

  const output = useMemo(() => {
    const outOrFn = COW_STATUS[status]
    if (typeof outOrFn === "function") {
      return outOrFn(displayContent)
    }

    return outOrFn
  }, [status, displayContent])

  useEffect(() => {
    const intervalId = setInterval(async () => {
      setBlink(true)
      await interrupt(500)
      setBlink(false)
    }, 5200)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    if (!content) {
      return
    }

    (async () => {
      const wordList = content.split(" ")

      for (const word of wordList) {
        setDisplayContent((val) => val.length > 0 ? `${val} ${word}` : word)
        await interrupt(300)
      }

      await interrupt(3000)
      setContent(undefined)
      setDisplayContent("")
    })()
  }, [content])

  return (
    <div
      class="relative md:min-h-36 h-full select-none"
      onMouseOver={() => {
        if (!content) {
          setContent(CANDIDATE_SENTENCES[Math.floor(Math.random() * CANDIDATE_SENTENCES.length)])
        }
      }}
    >
      {typeof output === "string" ? (
        <pre class={cn(
          "tamacowchi-text-root absolute bottom-0 right-0 leading-none! text-sm",
        )}>
          <code onMouseDown={() => setIsPressed(true)} onMouseUp={() => setIsPressed(false)} onMouseLeave={() => setIsPressed(false)}>{output ?? "?"}</code>
        </pre>
      ) : (
        <div class="absolute bottom-0 right-0">
          {output}
        </div>
      )}
    </div>
  )
}
