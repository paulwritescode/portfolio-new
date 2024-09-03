import { MapPin, Milestone } from "lucide-react";
import { experience } from "../data/Experience";
import { HoverEffect } from "./ui/card-hover-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = "View Full Resume";

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
