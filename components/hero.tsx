import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <>
      <div className="p-4">
        <Button className="rounded-full group my-7" variant="outline">
          Read Blogs <ChevronRight className="group-hover:translate-x-1 transition duration-200" />
        </Button>
        <div className="font-geist-mono text-3xl font-semibold mb-5">
          Empowering Ideas, Elevating Experiences!
        </div>
        <p className="text-neutral-500">
          I bring every project to life with precision, creativity, and
          purpose. Whether you're looking to enhance experiences, streamline
          processes, or build the next big thing, let's make it happen.
        </p>
        <Button
          className="my-7 group rounded-sm">
          About Me<ChevronRight className="group-hover:translate-x-1 transition duration-200" />
        </Button>
      </div>
    </>
  );
}
