import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import About from "./components/About.tsx";
import DesignView from "./components/DesignView.tsx";
import Experience from "./components/Experience.tsx";
import InProgress from "./components/InProgress.tsx";
import { ProjectsArchive } from "./components/ProjectsArchive.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import GraphicDesign from "./GraphicDesign.tsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/designer" element={<GraphicDesign />} />
      <Route path="/design/:id" element={<DesignView />} />
      {/* </Route> */}
      <Route path="/archive" element={<ProjectsArchive />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/about" element={<About />} />
      <Route path="/in-progress" element={<InProgress />} />
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
