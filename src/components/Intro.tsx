// import { HeroHighlight, Highlight } from "@/components/ui/highlight";
import { FlipWords } from "./ui/flip-words";
import { Highlight } from "./ui/hero-highlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
function Intro() {
  const word = ["seamless", "visually captivating", "responsive"];
  const introName = [
    { text: "Paul" },
    { text: "Mbugua" },
    { text: "Kinyatti" },
  ];
  return (
    <>
      <TypewriterEffectSmooth className="text-white" words={introName} />

      <p className="text-xl md:text-2xl lg:text-2xl   text-white/60 leading-relaxed lg:leading-snug  ">
        I craft <br className=" lg:hidden" />
        <FlipWords
          className="text-2xl font-bold  text-purple-400"
          words={word}
        />
        <br />
        experiences.I bring ideas to life by transforming UI/UX concepts{" "}
        <br className="hidden lg:block" />
        <Highlight className="text-black dark:text-slate-400 text-xl font-bold ">
          into intuitive and responsive interfaces.
        </Highlight>
      </p>
    </>
  );
}

export default Intro;
