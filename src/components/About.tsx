// import { CanvasRevealEffectDemo } from "./WorkEthics";

import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="flex flex-wrap text-xl md:p-0 px-2">
        My journey in the tech world is driven by a love for problem-solving and
        a dedication to staying at the forefront of the ever-evolving digital
        landscape. Whether I'm collaborating with teams or leading projects, my
        goal is to create impactful solutions that resonate with users and
        elevate their digital experience.
        <br />
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
