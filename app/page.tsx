import BlogShowcase from "@/components/blogShow";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { MyTools } from "@/components/myTools";
import { ProjectsBento } from "@/components/projectsBento";
import { CanvasRevealEffectDemo } from "@/components/subscribe";

export default function Home() {
    return (
        <section>
            <div className="flex flex-col items-center justify-center">
                {/* Aurora background with Tailwind classes */}
                <div className="relative w-full">
                    {/* Main aurora glow */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(219,48,102,0.4)_0%,rgba(219,48,102,0.3)_10%,rgba(219,48,102,0.2)_20%,rgba(219,48,102,0.1)_40%,rgba(0,0,0,1)_90%,transparent_70%)] opacity-80 rounded-full blur-2xl z-[-1]"></div>
                    <Hero />
                </div>
                <div className="w-full flex flex-col container items-center justify-center gap-10">
                    <MyTools />
                    <ProjectsBento />
                </div>
                <div className="w-full flex flex-col container items-center justify-center mt-24">
                    {/* <Conversation /> */}
                    <BlogShowcase />
                </div>
                <div className="w-full flex flex-col container items-center justify-center mt-24">
                    <CanvasRevealEffectDemo />
                </div>
                <Footer />
            </div>
        </section>
    );
}