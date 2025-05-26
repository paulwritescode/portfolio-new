import { Activity, Mic, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
    return <section className={cn('flex flex-col items-center text-white h-[40rem] justify-center gap-10')} >
        <Link
            href="/blog"
            className="rounded-full group my-7 items-center flex text-xs font-geist-mono border border-black text-white bg-black/50 px-4 py-2"
        >
            <Zap className="text-blue-500 mr-2 w-4 h-4" />
            I write about tech and stuff!
            {/*<ChevronRight className="group-hover:translate-x-1 transition duration-200 w-4 h-4" />*/}
        </Link >

        <div className="flex flex-col items-center gap-5" >
            <div className="font-geist-mono text-5xl font-bold max-w-4xl text-center" >
                Empowering ideas, Elevating experiences!
            </div >

            <p className="max-w-2xl text-center" >
                I bring every project to life with precision, creativity, and
                purpose. Whether you're looking to enhance experiences,
                streamline
                processes, or build the next big thing, let's make it happen.
            </p >
        </div >

        <div className="bg-black/20 rounded-full min-w-40 flex flex-row">
            {/* TODO add conversation ai agent over here */}
            <Link
                href="/"
                className="rounded-full group items-center flex text-xs font-geist-mono px-4 py-2"
            >
                <Mic className="text-blue-500 mr-2 w-4 h-4" />
                Converse with Luna
            </Link >
            <Link
                href="/"
                className="rounded-full group  items-center flex text-xs font-geist-mono border border-black text-white bg-black/80 px-4 py-2"
            >
                <Activity className="text-blue-500 mr-2 w-4 h-4" />
                Whoami
            </Link >
        </div>
    </section >
}