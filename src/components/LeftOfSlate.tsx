import Intro from "./Intro";
import MyTools from "./MyTools";
import NavBar from "./NavBar";
import { FloatingDockDemo } from "./SocialLinks";

function LeftOfSlate() {
  return (
    <>
      <div className=" flex flex-col justify-between">
        <div>
          <Intro />
        </div>
        <div>
          <FloatingDockDemo />
          <NavBar />
          <MyTools />
        </div>
      </div>
    </>
  );
}

export default LeftOfSlate;
// w-[50%] md:sticky md:top-0
