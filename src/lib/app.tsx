import { MainPane } from "../components/main-pane"
import { Navbar } from "../components/navbar"

export function App() {
  return (
    <div class="flex flex-col w-dvw h-dvh">
      <Navbar />
      <MainPane />
    </div>
  )
}
