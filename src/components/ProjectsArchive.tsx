import { projects } from "@/data/Projects";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { ArrowUpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import NavBar from "./NavBar";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  ...projects.map((project, index) => ({
    title: index + 1 + ". " + project.name,
    description: project.description,
    url: project.url,
    content: (
      <CardContainer className="inter-var">
        <CardBody className="relative group/card dark:hover:shadow-2xl hover:shadow-emerald-500 dark:bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-5">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white dark:text-white"
          >
            {project.name}
          </CardItem>

          <CardItem translateZ="90" className="w-full mt-4">
            <img
              src={project.image}
              alt={project.name}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>

          <CardItem
            translateZ="50"
            className="flex flex-col gap-1 my-2 flex-wrap capitalize"
          >
            <div className="font-bold mt-5">Artifacts</div>
            <div className="flex flex-wrap gap-2">
              {project.artifacts &&
                project.artifacts.map((artifact, i) => (
                  <p key={`${artifact}-${i}`} className="text-white/40">
                    {artifact}
                  </p>
                ))}
            </div>
          </CardItem>

          <CardItem
            translateZ="50"
            className="flex flex-col gap-1 my-2 flex-wrap capitalize"
          >
            <a
              href={project.url}
              aria-label={`Checkout ${project.name} on GitHub`}
              className="flex items-center hover:text-purple-500 my-5 w-max"
            >
              <IconBrandGithubFilled className="w-5 h-5 mr-2" />
              Checkout GitHub
            </a>
          </CardItem>
        </CardBody>
      </CardContainer>
    ),
  })),
];

export function ProjectsArchive() {
  return (
    <div className="  p-10 flex justify-center ">
      <div>
        <div className="sticky top-12 md:block p-4">
          <Link
            to="/"
            className="flex gap-2 text-teal-500 w-max hover:gap-3 mb-4  font-bold group"
          >
            <NavBar />
            <p>Paul Mbugua</p>
            <ArrowUpCircle className="group-hover:text-purple-500 group-hover:animate-bounce " />
          </Link>
          <span className="text-center text-5xl font-bold">All Projects</span>
        </div>

        <StickyScroll content={content} />
      </div>
    </div>
  );
}
