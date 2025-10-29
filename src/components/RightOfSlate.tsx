import About from "./About";
import Certifications from "./Certifications";
import Experience from "./Experience";
import NavBar from "./NavBar";

import Projects from "./Projects";

function RightOfSlate() {
  return (
    <>
      <div className="gap-10 flex flex-col md:mt-7 ">
        <NavBar />
        <About />
        <Experience />
        <Projects />
        <Certifications />
      </div>
    </>
  );
}

export default RightOfSlate;
