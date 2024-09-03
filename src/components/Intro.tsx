// import { HeroHighlight, Highlight } from "@/components/ui/highlight";
import { FlipWords } from "./ui/flip-words";
import { Highlight } from "./ui/hero-highlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
function Intro() {
  const words = "Paul Mbugua KInyatti";
  const word = ["seamless", "visually captivating", "responsive"];
  return (
    <>
      <TextGenerateEffect words={words} />
      <p className="text-2xl md:text-2xl lg:text-2xl   text-white/60 leading-relaxed lg:leading-snug  ">
        I specialize in crafting
        <FlipWords
          className="text-2xl font-bold  text-purple-400"
          words={word}
        />
        <br />
        experiences. With a keen eye for design and a solid foundation in modern
        web technologies , I bring ideas to life by transforming
        <Highlight className="text-black dark:text-slate-400 text-xl font-bold mx-2">
          complex UI/UX concepts into intuitive and responsive interfaces.
        </Highlight>
      </p>
    </>
  );
}

export default Intro;
