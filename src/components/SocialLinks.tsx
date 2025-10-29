import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-white" />,
      href: "https://github.com/paulwritescode",
    },
    {
      title: "Email",
      icon: <IconMail className="h-full w-full text-white" />,
      href: "mailto:kinyattipaul@gmail.com?subject=Hello Paul",
    },
    {
      title: "X",
      icon: <IconBrandX className="h-full w-full text-white" />,
      href: "https://x.com/paulkinyatti",
    },
    {
      title: "YouTube",
      icon: <IconBrandYoutube className="h-full w-full text-white" />,
      href: "https://youtube.com/@paulkinyatti",
    },
    // {
    //   title: "Linkedin",
    //   icon: <IconBrandLinkedin className="h-full w-full text-white" />,
    //   href: "https://www.linkedin.com/in/kinyattiPaul",
    // },
  ];
  return (
    <div className=" h-max items-start w-max md:flex flex-col gap-2 hidden mt-10">
      <FloatingDock items={links} />
    </div>
  );
}
