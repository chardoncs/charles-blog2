import { ComponentChildren } from "preact"
import "./formatted-text.css"

export interface FormattedTextProps {
  children: ComponentChildren
}

export function FormattedText({ children }: FormattedTextProps) {
  return (
    <article class="formatted-text">
      {children}
    </article>
  )
}
