import { projects } from "@/data/Projects";

function Projects() {
  return (
    <div className="flex  flex-col gap-10">
      {projects.map((project) => (
        <div
          key={project.id}
          className="p-4 border gap-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex"
        >
          {/* Image */}
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              className="h-24 w-24 object-cover rounded-lg mb-4"
            />
          )}
          {/* Project Name */}
          <div>
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            {/* Description */}
            <p className="text-gray-700 mb-2">{project.description}</p>
            {/* Artifacts */}
            <span className="flex gap-3 mt-4 flex-wrap text-xs">
              {project.artifacts &&
                project.artifacts.map((artifact) => (
                  <p
                    key={artifact}
                    className="p-1 rounded-xl px-2 bg-cyan-200/30 text-cyan-300"
                  >
                    {artifact}
                  </p>
                ))}
            </span>
            {/* URL */}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
