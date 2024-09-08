import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import { ProjectsArchive } from "./components/ProjectsArchive.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "./index.css";
import Experience from "./components/Experience.tsx";
import About from "./components/About.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/archive" element={<ProjectsArchive />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/about" element={<About />} />
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
