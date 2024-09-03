import Intro from "./Intro";
import MyTools from "./MyTools";
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
          <MyTools />
        </div>
      </div>
    </>
  );
}

export default LeftOfSlate;
