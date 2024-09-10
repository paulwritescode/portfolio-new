import NavBar from "./components/NavBar";
import { HeroParallax } from "./components/ui/hero-parallax";
import { designs } from "./data/GraphicDesign";
function GraphicDesign() {
  return (
    <>
      <div>
        <NavBar />
        <HeroParallax products={designs} />;
      </div>
    </>
  );
}

export default GraphicDesign;
