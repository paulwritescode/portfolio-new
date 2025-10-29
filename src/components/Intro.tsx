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
      <div className="flex flex-col">
        <TypewriterEffectSmooth
          className="text-white justify-center md:justify-start flex text-center items-center"
          words={introName}
        />
        <Highlight className="text-black dark:text-slate-400 text-xl font-bold ">
          Software Engineer, AWS Certified Cloud Practitioner
        </Highlight>
        <p className="text-xl md:text-2xl lg:text-2xl text-center md:text-left text-white/60 leading-relaxed lg:leading-snug  ">
          I bring every project to life with precision, creativity, and
          purpose. Whether you're looking to enhance experiences, streamline
          processes, or build the next big thing, let's make it happen. <br className="hidden lg:block" />
          <FlipWords
            className="text-2xl font-bold  text-purple-400 uppercase"
            words={word}
          />
        </p>
      </div>
    </>
  );
}

export default Intro;
