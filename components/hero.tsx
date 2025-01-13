import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";


export default function Hero() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center gap-2 items-center">
        <div className="flex-1">
          <Button className="rounded-full my-5 w-max" variant="outline">Read Blogs <MoveRight /></Button>
          <div className="font-geist-mono text-3xl font-semibold mb-1">Empowering Ideas, Elevating Experiences!</div>
          <p>I bring every project to life with precision, creativity, and purpose. Whether you're looking to enhance experiences, streamline processes, or build the next big thing, let's make it happen.</p>
          <Button className="my-4 hover:shadow-xl transition duration-200 shadow-input dark:shadow-none hover:translate-x-1" variant="secondary">About Me</Button>
        </div>
        <div>

          <div>
            <div className="h-[60rem] w-max dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.09] relative flex items-center justify-center">
              {/* Radial gradient for the container to give a faded look */}
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

              <p className=" relative z-20 bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">

                <Image src="/dummyImage.jpg" width={400} height={200} alt="splash image" />
              </p>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
