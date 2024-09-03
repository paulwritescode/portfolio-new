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
    id: 5,
    name: "Notion",
    designation: "UI/UX-Design",
    image: "https://www.svgrepo.com/show/361558/notion-logo.svg",
  },
  {
    id: 6,
    name: "Framer",
    designation: "UI/UX-Design",
    image: "https://www.svgrepo.com/show/315561/framer.svg",
  },
  {
    id: 7,
    name: "Figma",
    designation: "UI/UX-Design",
    image: "https://www.svgrepo.com/show/452202/figma.svg",
  },
  {
    id: 8,
    name: "Python",
    designation: "Back-End",
    image: "https://www.svgrepo.com/show/452091/python.svg",
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
