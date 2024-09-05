import { IconPdf } from "@tabler/icons-react";
import { MapPin } from "lucide-react";
import { experience } from "../data/Experience";
import { HoverEffect } from "./ui/card-hover-effect";

const content = [
  ...experience
    .sort((a, b) => b.id - a.id) // Sort the array by ID in descending order
    .slice(0, 2) // Select the first two experiences
    .map((experience) => ({
      title: experience.title,
      description1: experience.description,
      date: experience.date,
      location: experience.location,
      icon: <MapPin className="w-4 h-4 mr-1 text-teal-400" />,
      role: experience.roles,
      artifacts: experience.artifacts,
      id: experience.id,
      company: experience.company,
      link: experience.company,
    })),
];
function Experience() {
  return (
    <>
      <div className=" mx-auto ">
        <HoverEffect className="w-full gap-10" items={content} />
      </div>
      <div className="my-8 ">
        <a
          href="/src/data/Kinyatti Paul resume.pdf" // Replace with the actual path to your resume
          className="text-white flex items-center group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8 mr-2  rounded-sm transition duration-300 ease-in-out group-hover:bg-red-500">
            <IconPdf className="w-full h-full" />
          </div>
          <p className="font-semibold text-sm">View full resume</p>
        </a>
      </div>
    </>
  );
}

export default Experience;
