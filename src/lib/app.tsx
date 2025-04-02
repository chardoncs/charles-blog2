import { ErrorBoundary, lazy, LocationProvider, Route, Router } from "preact-iso";
import { MainPane } from "../components/main-pane";
import { Navbar } from "../components/navbar";
import { StatusBar } from "../components/status-bar";
import "@fontsource/fira-code";

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <div class="flex flex-col w-dvw h-dvh">
          <Navbar />

          <MainPane>
            <Router>
              <Route path="/" component={lazy(() => import("../components/pages/home"))} />
              <Route path="/cv" component={lazy(() => import("../components/pages/home"))} />
            </Router>
          </MainPane>
          <StatusBar />
        </div>
      </ErrorBoundary>
    </LocationProvider>
  );
}
