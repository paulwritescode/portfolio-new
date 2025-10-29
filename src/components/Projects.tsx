import { projects } from "@/data/Projects";
import { IconAffiliateFilled, IconListDetails } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="flex flex-col gap-5 p-4">
      {projects
        .sort((a, b) => b.id - a.id) // Sort the array by ID in descending order
        // .slice(0, 3)
        .map((project) => {
          const isExternal = project.url.startsWith("http");
          const isInProgress = project.url === "in-progress";
          
          if (isExternal) {
            return (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                className="gap-4 rounded-lg flex md:flex-row flex-col items-start mb-5 hover:bg-purple-400/5 p-4 group"
              >
            {/* Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="h-24 md:w-40 w-[100%] object-cover rounded-md mb-2"
              />
            )}
            <div>
              {/* Project Name */}
              <h2 className="text-xl mb-2 font-bold flex flex-wrap">
                {project.name}
              </h2>

              {/* Description */}
              <p className="text-slate-400 text-base  flex flex-wrap">
                {project.description}
              </p>

              {/* Artifacts */}

              <p className="  text-sm mt-2 bg-teal-200/10 group-hover:text-teal-400 rounded-md p-2  px-3 flex ">
                <IconAffiliateFilled className="w-5 h-5 mr-2 text-teal-400 group-hover:text-purple-500" />
                {project.artifacts.join(",  ")}
              </p>
            </div>
          </a>
            );
          }

          return (
            <Link
              to={isInProgress ? "/in-progress" : project.url}
              key={project.id}
              className="gap-4 rounded-lg flex md:flex-row flex-col items-start mb-5 hover:bg-purple-400/5 p-4 group"
            >
              {/* Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-24 md:w-40 w-[100%] object-cover rounded-md mb-2"
                />
              )}
              <div>
                {/* Project Name */}
                <h2 className="text-xl mb-2 font-bold flex flex-wrap">
                  {project.name}
                </h2>

                {/* Description */}
                <p className="text-slate-400 text-base  flex flex-wrap">
                  {project.description}
                </p>

                {/* Artifacts */}

                <p className="  text-sm mt-2 bg-teal-200/10 group-hover:text-teal-400 rounded-md p-2  px-3 flex ">
                  <IconAffiliateFilled className="w-5 h-5 mr-2 text-teal-400 group-hover:text-purple-500" />
                  {project.artifacts.join(",  ")}
                </p>
              </div>
            </Link>
          );
        })}
      <div className="my-8 ">
        <Link
          to="archive"
          className="text-white flex items-center group md:justify-start justify-center md:w-max"
          rel="noopener noreferrer"
        >
          <div>
            <IconListDetails className="group-hover:animate-bounce w-8 h-8 mr-2  rounded-sm transition duration-300 ease-in-out  group-hover:bg-purple-500" />
          </div>
          <p className="font-semibold text-sm">Full projects archive</p>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
