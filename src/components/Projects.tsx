import { projects } from "@/data/Projects";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="flex flex-col gap-5 p-4">
      {projects
        .sort((a, b) => b.id - a.id) // Sort the array by ID in descending order
        .slice(0, 4)
        .map((project) => (
          <Link
            to={project.url}
            key={project.id}
            className="gap-4 rounded-lg flex mb-5"
          >
            {/* Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="h-24 md:w-24 w-[100%] object-cover rounded-md mb-2"
              />
            )}
            <div>
              {/* Project Name */}
              <h2 className="text-xl mb-2 font-bold">{project.name}</h2>

              {/* Description */}
              <p className="text-slate-400 text-base">{project.description}</p>

              {/* Stack */}
              {/* <span className="flex gap-2 mt-4 flex-wrap text-sm">
                {project.stack.map((stack: string, index: number) => (
                  <p
                    key={index}
                    className="p-1 rounded-xl px-3 bg-teal-200/10 text-teal-400"
                  >
                    {stack}
                  </p>
                ))}
              </span> */}

              {/* Artifacts */}
              <p className="text-slate-400 mt-2">
                <strong>Artifacts:</strong> {project.artifacts.join(", ")}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default Projects;
