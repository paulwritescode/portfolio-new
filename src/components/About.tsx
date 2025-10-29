// import { CanvasRevealEffectDemo } from "./WorkEthics";

import { Link } from "react-router-dom";

function About() {
  const coreCompetencies = [
    "Cloud-Native Development",
    "Event-Driven Architecture",
    "Microservices Architecture",
    "Cloud Architecture Design",
    "AWS Event-Driven Systems",
    "Container Orchestration",
    "Production Operations",
    "Distributed Team Collaboration",
    "Cloud-Native Backend",
    "AI Integration",
    "DevOps & CI/CD",
    "API Development",
    "Stakeholder Communication",
  ];

  return (
    <>
      <div className="flex flex-col gap-4 text-xl md:p-0 px-2">
        <p className="flex flex-wrap text-black dark:text-white">
          Software Engineer with 2 years of experience building scalable, cloud-native distributed systems, AI-driven solutions and microservices architecture. Skilled in cross-functional collaboration and implementing DevOps practices. I practice using Agile methodologies and infrastructure as code.
        </p>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">Core Competencies</h3>
          <div className="flex flex-wrap gap-2">
            {coreCompetencies.map((competency, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-xl bg-black/10 dark:bg-white/10 text-black dark:text-white text-sm border border-black/20 dark:border-white/20"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>

        <br />
        <Link to={"/designer"} className="group flex flex-wrap">
          I am also a
          <div className="text-black dark:text-white w-max flex animate-pulse group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:animate-bounce font-bold mx-1">
            graphic designer
          </div>
          creating visual content.Check out my work here.
        </Link>
      </div>

      <div>{/* <CanvasRevealEffectDemo /> */}</div>
    </>
  );
}

export default About;
