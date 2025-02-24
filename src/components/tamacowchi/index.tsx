import { signal } from "@preact/signals"
import { useEffect, useMemo, useState } from "preact/hooks"
import { interrupt } from "../../lib/utils/interruption"
import { COW_STATUS, CowStatus } from "./status"
import "./tamacowchi.css"
import { cn } from "../../lib/utils"
import { CANDIDATE_SENTENCES, TURNING_DICT } from "./words"
import { turnCow } from "./animations"
import { ComponentChildren } from "preact"

const globalStatus = signal<CowStatus>("idle")
const turnedTo = signal<ComponentChildren | undefined>(undefined)

export function Tamacowchi() {
  const [blink, setBlink] = useState(false)
  const [content, setContent] = useState<string | undefined>(undefined)
  const [displayContent, setDisplayContent] = useState<string>("")

  const [isPressed, setIsPressed] = useState(false)

  const [allowBlinking, setAllowBlinking] = useState(true)

  const [isTurning, setIsTurning] = useState(false)
  const [isMirrored, setIsMirrored] = useState(false)

  const status = useMemo(() => {
    if (isTurning) {
      return globalStatus.value
    }

    if (displayContent.length > 0) {
      if (isPressed) {
        return "say_pressed"
      }

      return "say"
    }

    if (isPressed) {
      return "pressed"
    }

    if (blink && globalStatus.value === "idle") {
      return "blink"
    }

    return globalStatus.value
  }, [globalStatus.value, blink, isPressed, displayContent, isTurning])

  const output = useMemo(() => {
    if (turnedTo.value) {
      return turnedTo.value
    }

    const outOrFn = COW_STATUS[status]
    if (typeof outOrFn === "function") {
      return outOrFn(displayContent)
    }

    return outOrFn
  }, [status, displayContent, turnedTo.value])

  useEffect(() => {
    let intervalId = undefined

    if (allowBlinking && !isPressed) {
      intervalId = setInterval(async () => {
        setBlink(true)
        await interrupt(500)
        setBlink(false)
      }, 5200)
    } else {
      setBlink(false)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [allowBlinking, isPressed])

  useEffect(() => {
    if (!content) {
      return
    }

    (async () => {
      setAllowBlinking(false)

      const wordList = content.split(" ")

      for (const word of wordList) {
        setDisplayContent((val) => val.length > 0 ? `${val} ${word}` : word)
        await interrupt(300)
      }

      const turningNode = TURNING_DICT[content]
      await interrupt(turningNode ? 1500 : 3000)
      setContent(undefined)
      setDisplayContent("")

      if (turningNode) {
        setIsTurning(true)
        await turnCow(turningNode, {
          onMirror() {
            setIsMirrored(() => true)
          },
          onMirrorBack() {
            setIsMirrored(() => false)
          },
          onBeginTurning() {
            globalStatus.value = "turning"
          },
          onTurningDone(node) {
            globalStatus.value = "turned"
            turnedTo.value = node
          },
        })

        await interrupt(3000)

        globalStatus.value = "idle"
        turnedTo.value = undefined
        setIsTurning(false)
      }

      setAllowBlinking(true)
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
          isMirrored && "-scale-x-100",
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
