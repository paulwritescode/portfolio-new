import LeftOfSlate from "./LeftOfSlate";
import RightOfSlate from "./RightOfSlate";
import { TracingBeam } from "./ui/tracing-beam";

function Slate() {
  return (
    <>
      <section className=" ">
        <div className="flex flex-col md:flex-row gap-12 justify-center ">
          <div className="md:sticky md:top-10 md:h-screen md:w-[30%] md:pb-20 justify-center flex">
            <LeftOfSlate />
          </div>
          <div className="w-full md:w-[40%]  ">
            <div className="md:hidden">
              <TracingBeam className="pl-8 h-screen  no-scrollbar overflow-y-visible ">
                <RightOfSlate />
              </TracingBeam>
            </div>
            <div className="   hidden lg:flex">
              <RightOfSlate />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slate;
