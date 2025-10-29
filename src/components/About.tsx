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
        <p className="flex flex-wrap">
          Software Engineer with 2 years of experience building scalable, cloud-native distributed systems, AI-driven solutions and microservices architecture. Skilled in cross-functional collaboration and implementing DevOps practices. I practice using Agile methodologies and infrastructure as code.
        </p>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-teal-400">Core Competencies</h3>
          <div className="flex flex-wrap gap-2">
            {coreCompetencies.map((competency, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-xl bg-teal-200/10 text-teal-400 text-sm"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>

        <br />
        <Link to={"/designer"} className="group flex flex-wrap">
          I am also a
          <div className="text-teal-400 w-max flex animate-pulse group-hover:text-purple-500 group-hover:animate-bounce font-bold mx-1">
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
