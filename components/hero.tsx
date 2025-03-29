import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="">
        <Link href="/" className="rounded-full group my-7 items-center flex text-sm font-geist-mono ">
          Read Blogs <ChevronRight className="group-hover:translate-x-1 transition duration-200 w-4 h-4" />
        </Link>
        <div className="font-geist-mono text-3xl font-semibold mb-5">
          Empowering Ideas, Elevating Experiences!
        </div>
        <p className="text-muted-foreground text-sm w-[50rem]">
          I bring every project to life with precision, creativity, and
          purpose. Whether you're looking to enhance experiences, streamline
          processes, or build the next big thing, let's make it happen.
        </p>
        <Link
          href="/"
          className="my-7 group rounded-sm bg-none flex font-geist-mono items-center text-sm">
          About Me<ChevronRight className="group-hover:translate-x-1 transition duration-200 w-4 h-4" />
        </Link>
      </div>
    </>
  );
}
