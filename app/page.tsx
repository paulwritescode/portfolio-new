import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="w-full justify-center flex">
      <div className="w-[1440px] p-4">
        <Hero />
        <p>
          This is a paragraph that we are working on and we have to make it work{" "}
        </p>
      </div>
    </div>
  );
}

