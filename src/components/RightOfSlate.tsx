import About from "./About";
import Experience from "./Experience";

import Projects from "./Projects";

function RightOfSlate() {
  return (
    <>
      <div className="gap-5 flex flex-col ">
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default RightOfSlate;
