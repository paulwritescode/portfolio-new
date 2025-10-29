import { AnimatedTooltip } from "../components/ui/animated-tooltip";

const tools = [
  {
    id: 1,
    name: "React.JS",
    designation: "Front-End",
    image:
      "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
  },
  {
    id: 2,
    name: "Next.JS",
    designation: "Front-End",
    image: "https://www.svgrepo.com/show/378440/nextjs-fill.svg",
  },
  {
    id: 3,
    name: "Go (golang)",
    designation: "Back-End",
    image: "https://www.svgrepo.com/show/353795/go.svg",
  },
  {
    id: 4,
    name: "Python",
    designation: "Back-End",
    image: "https://www.svgrepo.com/show/452091/python.svg",
  },
  {
    id: 5,
    name: "JavaScript",
    designation: "Programming",
    image: "https://www.svgrepo.com/show/452045/js.svg",
  },
  {
    id: 6,
    name: "TypeScript",
    designation: "Programming",
    image: "https://www.svgrepo.com/show/374144/typescript.svg",
  },
  {
    id: 7,
    name: "AWS",
    designation: "Cloud",
    image: "https://www.svgrepo.com/show/448266/aws.svg",
  },
  {
    id: 9,
    name: "Docker",
    designation: "DevOps",
    image: "https://www.svgrepo.com/show/452192/docker.svg",
  },
  {
    id: 10,
    name: "MongoDB",
    designation: "Database",
    image: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    id: 11,
    name: "PostgreSQL",
    designation: "Database",
    image: "https://www.svgrepo.com/show/354200/postgresql.svg",
  },
  {
    id: 12,
    name: "Figma",
    designation: "UI/UX-Design",
    image: "https://www.svgrepo.com/show/452202/figma.svg",
  },
];
function MyTools() {
  return (
    <>
      <div className="flex flex-row mt-12">
        <AnimatedTooltip items={tools} />
      </div>
    </>
  );
}

export default MyTools;
