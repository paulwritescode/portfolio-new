import About from "./About";
import Experience from "./Experience";
import NavBar from "./NavBar";
import WorkEthics from "./WorkEthics";

import Projects from "./Projects";

function RightOfSlate() {
  return (
    <>
      <div className="gap-10 flex flex-col md:mt-7 ">
        <NavBar />
        <About />
        <Experience />
        <Projects />
        <WorkEthics />
      </div>
    </>
  );
}

export default RightOfSlate;
