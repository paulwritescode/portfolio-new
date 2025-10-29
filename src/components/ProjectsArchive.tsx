import { projects } from "@/data/Projects"; // Your projects array
import { IconHandClick, IconSnowflake } from "@tabler/icons-react";
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
            className="flex gap-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 w-max  mb-4 font-bold group"
          >
            <NavBar />
            <p>Paul Mbugua</p>
            <ArrowUpCircle className="group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:animate-bounce" />
          </Link>
          <span className="text-center text-5xl font-bold text-black dark:text-white">All Projects</span>
        </div>

        {/* Table to display project details */}
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2 text-black dark:text-white">Date</th>
                <th className="px-4 py-2 flex items-center text-black dark:text-white">
                  <IconSnowflake className="w-5 h-5 mr-1" />
                  Project
                </th>
                {/* Hidden on mobile */}
                <th className="px-4 py-2 hidden md:table-cell text-black dark:text-white">Artifacts</th>
                <th className="px-4 py-2 hidden md:table-cell text-black dark:text-white">Toolbox</th>
                <th className="px-4 py-2 hidden md:table-cell text-black dark:text-white">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b my-10 p-4 group">
                  <td className="px-4 py-4 text-xs font-bold text-black dark:text-gray-400 align-text-top">
                    {project.date}
                  </td>

                  {/* Project Name visible on both mobile and desktop */}
                  <td className="px-4 py-4 font-bold text-lg align-text-top text-black dark:text-white">
                    {project.url.startsWith("http") ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.name}
                      </a>
                    ) : project.url === "in-progress" ? (
                      <Link to="/in-progress">{project.name}</Link>
                    ) : (
                      <Link to={project.url}>{project.name}</Link>
                    )}
                  </td>

                  {/* Artifacts, Built with, and Link hidden on mobile */}
                  <td className="px-4 py-4 text-sm hidden md:table-cell align-text-top text-black dark:text-white">
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
                        className="p-1 rounded-xl px-3 bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20"
                      >
                        {stack}
                      </p>
                    ))}
                  </td>

                  <td className="px-4 py-4 hidden md:table-cell align-text-top">
                    {project.url.startsWith("http") ? (
                      <a
                        href={project.url}
                        className="text-black dark:text-white flex items-center hover:text-gray-600 dark:hover:text-gray-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconHandClick className="w-5 h-5 mr-1 group-hover:animate-bounce group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                        Visit Site
                      </a>
                    ) : project.url === "in-progress" ? (
                      <Link
                        to="/in-progress"
                        className="text-black dark:text-white flex items-center hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        <IconHandClick className="w-5 h-5 mr-1 group-hover:animate-bounce group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                        In Progress
                      </Link>
                    ) : (
                      <Link
                        to={project.url}
                        className="text-black dark:text-white flex items-center hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        <IconHandClick className="w-5 h-5 mr-1 group-hover:animate-bounce group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                        View Project
                      </Link>
                    )}
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
