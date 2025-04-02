import { ComponentChildren } from "preact";

export function MainPane({ children }: { children: ComponentChildren }) {
  return (
    <div class="md:grow px-3 pt-3 pb-2">
      {children}
    </div>
  );
}
