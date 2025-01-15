import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center gap-2 items-center ">
        <div className="lg:static lg:z-auto z-10 absolute p-4 flex-1">
          <Button className="rounded-full my-7 w-max" variant="outline">
            Read Blogs <MoveRight />
          </Button>
          <div className="font-geist-mono text-3xl font-semibold mb-5">
            Empowering Ideas, Elevating Experiences!
          </div>
          <p className="w-96">
            I bring every project to life with precision, creativity, and
            purpose. Whether you're looking to enhance experiences, streamline
            processes, or build the next big thing, let's make it happen.
          </p>
          <Button
            className="my-7 hover:shadow-xl transition duration-200 shadow-input dark:shadow-none hover:translate-x-1"
            variant="secondary"
          >
            About Me
          </Button>
        </div>
        <div>
          <div className="relative lg:static lg:z-auto z-0">
            <div className="h-[60rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.09] relative flex items-center justify-center">
              {/* Radial gradient for the container to give a faded look */}
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]">
                {" "}
              </div>

              <p className="w-80 relative z-5 bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
