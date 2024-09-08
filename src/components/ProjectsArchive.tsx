import { projects } from "@/data/Projects"; // Your projects array
import {
  IconHandClick,
  IconLayout,
  IconSnowflake,
  IconTools,
  IconToolsKitchen,
} from "@tabler/icons-react";
import { ArrowUpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar"; // Assuming you have a NavBar component

export function ProjectsArchive() {
  return (
    <div className="p-4 flex justify-center">
      <div>
        <div className="sticky top-12 md:block p-4">
          <Link
            to="/"
            className="flex gap-2 text-teal-500 hover:text-purple-500 w-max  mb-4 font-bold group"
          >
            <NavBar />
            <p>Paul Mbugua</p>
            <ArrowUpCircle className="group-hover:text-purple-500 group-hover:animate-bounce" />
          </Link>
          <span className="text-center text-5xl font-bold">All Projects</span>
        </div>

        {/* Table to display project details */}
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2 flex items-center">
                  <IconSnowflake className="w-5 h-5 mr-1" />
                  Project
                </th>
                {/* Hidden on mobile */}
                <th className="px-4 py-2 hidden md:table-cell">Artifacts</th>
                <th className="px-4 py-2 hidden md:table-cell">Toolbox</th>
                <th className="px-4 py-2 hidden md:table-cell">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b my-10 p-4 group">
                  <td className="px-4 py-4 text-xs font-bold text-white/50 align-text-top">
                    {project.date}
                  </td>

                  {/* Project Name visible on both mobile and desktop */}
                  <td className="px-4 py-4 font-bold text-lg align-text-top">
                    <a href={project.url}>{project.name}</a>
                  </td>

                  {/* Artifacts, Built with, and Link hidden on mobile */}
                  <td className="px-4 py-4 text-sm hidden md:table-cell align-text-top">
                    {project.artifacts.map(
                      (artifact: string, index: number) => (
                        <p key={index}>{artifact}</p>
                      )
                    )}
                  </td>

                  <td className="px-4 py-4 gap-2  text-sm hidden md:flex">
                    {project.stack.map((stack: string, index: number) => (
                      <p
                        key={index}
                        className="p-1 rounded-xl px-3 bg-teal-200/10 text-teal-400"
                      >
                        {stack}
                      </p>
                    ))}
                  </td>

                  <td className="px-4 py-4 hidden md:table-cell align-text-top">
                    <a
                      href={project.url}
                      className="text-teal-500 flex items-center hover:text-purple-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconHandClick className="w-5 h-5 mr-1 group-hover:animate-bounce group-hover:text-purple-500" />
                      {project.url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
