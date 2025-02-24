import { ComponentChildren } from "preact"
import { interrupt } from "../../lib/utils/interruption"

export interface TurningEvents {
  onMirror(): void
  onMirrorBack(): void
  onBeginTurning(): void
  onTurningDone(children: ComponentChildren): void
}

const MIRROR_INTERVALS = [500, 300, 200, 100, 50, 30, 30, 30]

export async function turnCow(children: ComponentChildren, evs: TurningEvents) {
  for (const interval of MIRROR_INTERVALS) {
    evs.onMirror()
    await interrupt(interval)
    evs.onMirrorBack()
    await interrupt(interval)
  }

  evs.onBeginTurning()
  await interrupt(1000)

  evs.onTurningDone(children)
}
