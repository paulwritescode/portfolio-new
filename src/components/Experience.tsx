import { MapPin } from "lucide-react";
import { experience } from "../data/Experience";
import { IconAffiliateFilled } from "@tabler/icons-react";
import NavBar from "./NavBar";

function Experience() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col gap-5 p-4">
        {experience
          .sort((a, b) => b.id - a.id) // Sort the array by ID in descending order
          .map((exp) => (
            <div
              key={exp.id}
              className="gap-4 rounded-lg flex md:flex-row flex-col items-start mb-5 hover:bg-black/5 dark:hover:bg-white/5 p-4 group border border-transparent hover:border-black/10 dark:hover:border-white/10 transition-colors"
            >
              <div className="flex-1">
                {/* Title and Company */}
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h2 className="text-xl font-bold text-black dark:text-white">
                    {exp.title}
                  </h2>
                  <span className="text-sm text-black dark:text-white">
                    //
                  </span>
                  {exp.website ? (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-black dark:text-white hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-black dark:text-white">
                      {exp.company}
                    </span>
                  )}
                </div>

                {/* Roles */}
                <div className="flex gap-1 flex-wrap mb-2">
                  {exp.roles.map((role: string, index: number) => (
                    <span
                      key={index}
                      className="text-sm capitalize text-black dark:text-gray-400"
                    >
                      {role}
                      {index < exp.roles.length - 1 && " |"}
                    </span>
                  ))}
                </div>

                {/* Date and Location */}
                <div className="flex flex-wrap items-center gap-3 mb-2 text-sm text-black dark:text-white">
                  <span className="text-xs uppercase">{exp.date}</span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-black dark:text-gray-300 text-base flex flex-wrap mb-2">
                  {exp.description}
                </p>

                {/* Artifacts/Skills */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <IconAffiliateFilled className="w-5 h-5 mr-1 text-black dark:text-white mt-1" />
                  <div className="flex flex-wrap gap-2">
                    {exp.artifacts.map((artifact: string, index: number) => (
                      <span
                        key={index}
                        className="text-sm bg-black/10 dark:bg-white/10 text-black dark:text-white rounded-md px-3 py-1 border border-black/20 dark:border-white/20"
                      >
                        {artifact}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Experience;
