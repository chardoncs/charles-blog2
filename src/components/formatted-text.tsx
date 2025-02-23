import { ComponentChildren } from "preact"

export interface FormattedTextProps {
  children: ComponentChildren
}

export function FormattedText({ children }: FormattedTextProps) {
  return (
    <div class="formatted-text">
      {children}
    </div>
  )
}
