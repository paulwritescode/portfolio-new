import Intro from "./Intro";
import MyTools from "./MyTools";
import { FloatingDockDemo } from "./SocialLinks";
import WorkEthics from "./WorkEthics";

function LeftOfSlate() {
  return (
    <>
      <div className=" flex flex-col justify-between items-center md:items-start">
        <div>
          <Intro />
        </div>
        <div>
          <WorkEthics />
        </div>
        <div>
          <FloatingDockDemo />
          <MyTools />
        </div>
      </div>
    </>
  );
}

export default LeftOfSlate;
