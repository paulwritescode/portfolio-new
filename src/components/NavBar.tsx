import {
  IconArchive,
  IconHome,
  IconPhoto,
  IconUser,
} from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";
function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-5 w-5 text-black dark:text-white" />,
    },
    {
      name: "Experience",
      link: "experience",
      icon: <IconUser className="h-5 w-5 text-black dark:text-white" />,
    },
    {
      name: "Projects",
      link: "archive",
      icon: <IconArchive className="h-5 w-5 text-black dark:text-white" />,
    },
    {
      name: "Graphic-design",
      link: "designer",
      icon: <IconPhoto className="h-5 w-5 text-black dark:text-white" />,
    },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
    </>
  );
}

export default NavBar;
