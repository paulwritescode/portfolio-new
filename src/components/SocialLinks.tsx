import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBriefcase2,
  IconFingerprint,
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

    {
      title: "Experience",
      icon: <IconBriefcase2 className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "Projects",
      icon: <IconFingerprint className="h-full w-full text-white" />,
      href: "#",
    },
  ];
  return (
    <div className=" h-max items-start w-max md:flex   hidden mt-10">
      <FloatingDock items={links} />
    </div>
  );
}
