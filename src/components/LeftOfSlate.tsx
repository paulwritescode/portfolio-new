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
          <NavBar />
          <FloatingDockDemo />
          <MyTools />
        </div>
      </div>
    </>
  );
}

export default LeftOfSlate;
