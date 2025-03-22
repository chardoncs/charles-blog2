import { MainPane } from "../components/main-pane";
import { Navbar } from "../components/navbar";
import { StatusBar } from "../components/status-bar";
import "@fontsource/fira-code";

export function App() {
  return (
    <div class="flex flex-col w-dvw h-dvh">
      <Navbar />
      <MainPane />
      <StatusBar />
    </div>
  );
}
