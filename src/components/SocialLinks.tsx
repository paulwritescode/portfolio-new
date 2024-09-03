import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "Email",
      icon: <IconMail className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "Linkedin",
      icon: <IconBrandLinkedin className="h-full w-full text-white" />,
      href: "#",
    },
  ];
  return (
    <div className=" h-max items-start w-max md:flex flex-col gap-2 hidden mt-10">
      <p>Find me @</p>
      <FloatingDock items={links} />
    </div>
  );
}
