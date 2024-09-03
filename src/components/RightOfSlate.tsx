import About from "./About";
import Experience from "./Experience";
import NavBar from "./NavBar";

import Projects from "./Projects";

function RightOfSlate() {
  return (
    <>
      <div className="gap-5 flex flex-col ">
        <NavBar />
        <About />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default RightOfSlate;
