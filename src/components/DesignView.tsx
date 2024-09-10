import { designs } from "@/data/GraphicDesign";
import { IconFingerprint } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Define the type for a design item
interface Design {
  id: number;
  title: string;
  font_used: string;
  colors: string[];
  description: string;
  link: string;
  thumbnail: string;
}

function DesignView() {
  const { id } = useParams<{ id: string }>();
  console.log(id); // UseParams expects the 'id' to be a string
  const [design, setDesign] = useState<Design | null>(null); // State to store the matched design

  useEffect(() => {
    // Find the design with the matching id
    const foundDesign = designs.find((d) => d.id === parseInt(id as string));

    // Update the state with the found design
    setDesign(foundDesign || null);
  }, [id]);

  // If the design is not found
  if (!design) {
    return <div>Design not found</div>;
  }

  // Render the design details
  return (
    <>
      <div className="sticky top-0 p-6 backdrop-blur-sm bg-slate-900/50 gap-10 flex items-center justify-center group">
        <Link
          to="/designer" // Updated path
          className="text-white group-hover:text-emerald-400 items-center" // Apply hover effect
        >
          <img
            className="w-16 ml-10 mr-2 inline-block  group-hover:animate-bounce"
            src="/tajiri-whitetxt.svg"
            alt="Tajiri Logo"
          />
          Back to Studio
        </Link>
        <Link
          to={"/"}
          className=" group-hover:text-purple-400  flex items-center text-base"
        >
          Visit designer
          <IconFingerprint className="inline-block ml-2 group-hover:animate-bounce" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row p-10 justify-center gap-4">
        <div>
          <img
            className="w-[40rem]"
            src={design.thumbnail}
            alt={design.title}
          />
        </div>
        <div className="">
          <h1 className="font-bold text-4xl mb-4">{design.title}</h1>
          <p className="flex flex-col text-xl my-4">
            <span className="text-xs mb-1">Font Used</span> {design.font_used}
          </p>
          <p className="flex flex-col text-xl my-4">
            <span className="text-xs mb-1">Colors</span>
            <span className="flex gap-2 mt-2">
              {design.colors.map((color) => (
                <span
                  className="inline-block w-10 h-10 rounded-md border border-white/40 "
                  style={{ backgroundColor: `#${color}` }}
                  key={color}
                ></span>
              ))}
            </span>
          </p>{" "}
          <p className="flex flex-col text-xl my-4 w-full md:w-[40rem]">
            <span className="text-xs mb-1">About</span>
            {design.description || "No description available"}
          </p>
        </div>
      </div>
    </>
  );
}

export default DesignView;
