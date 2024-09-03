import { MapPin, Milestone } from "lucide-react";
import { experience } from "../data/Experience";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = "View Full Resume";
function Experience() {
  return (
    <>
      <div className="flex flex-col gap-10">
        {experience
          .sort((a, b) => b.id - a.id) // Sort the array by ID in descending order
          .slice(0, 2) // Select the first two experiences
          .map((experience) => (
            <div
              key={experience.id} // Add a key prop for each mapped item
              className="flex flex-col md:flex-row md:gap-4 rounded-xl"
            >
              <div className="">
                <p className="text-sm w-[12rem] text-slate-400 uppercase">
                  {experience.date}
                </p>
              </div>
              <div className="">
                <h1 className="text-xl font-bold flex flex-wrap items-end mb-1">
                  {experience.title}
                  <span className="text-sm ml-1"> // {experience.company}</span>
                </h1>
                <p className="text-sm capitalize text-slate-400 gap-2 flex">
                  {experience.roles.map((role, index) => (
                    <span key={index}>{role} |</span>
                  ))}
                </p>
                <p className="capitalize text-sm mb-2 text-teal-500 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {experience.location}
                </p>
                <p className="flex flex-wrap text-sm md:text-base text-slate-400">
                  {experience.description}
                </p>
                <span className="flex gap-2 mt-4 flex-wrap text-sm">
                  {experience.artifacts.map((artifact, index) => (
                    <p
                      key={index}
                      className="p-1 rounded-xl px-3 bg-teal-200/10 text-teal-400"
                    >
                      {artifact}
                    </p>
                  ))}
                </span>
              </div>
            </div>
          ))}
      </div>
      <div className="my-8">
        <a
          href="/path/to/your/resume.pdf" // Replace with the actual path to your resume
          className="text-white  flex items-center  "
          target="_blank"
          rel="noopener noreferrer"
        >
          <Milestone className="w-6 h-6 mr-2" />
          <TextGenerateEffect className="text-blue-400" words={words} />
        </a>
      </div>
    </>
  );
}

export default Experience;
