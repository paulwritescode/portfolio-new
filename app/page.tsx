import { Conversation } from "@/components/conversation";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="w-full justify-center flex">
      <div className="container">
        <div className="container justify-start w-max border p-10 rounded-full"><Conversation /></div>
        <Hero />
      </div>
    </div>
  );
}

