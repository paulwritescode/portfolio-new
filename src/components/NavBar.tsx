import { IconArchive, IconHome, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";
function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-5 w-5 text-white" />,
    },
    {
      name: "Experience",
      link: "/",
      icon: <IconUser className="h-5 w-5 text-white" />,
    },
    {
      name: "Projects",
      link: "archive",
      icon: <IconArchive className="h-5 w-5 text-white" />,
    },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
    </>
  );
}

export default NavBar;
