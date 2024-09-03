import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";
function NavBar() {
  const navItems = [
    {
      name: "About",
      link: "/",
      icon: <IconHome className="h-5 w-5 text-white" />,
    },
    {
      name: "Experience",
      link: "/experience",
      icon: <IconUser className="h-5 w-5 text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <IconMessage className="h-5 w-5 text-white" />,
    },
  ];

  return (
    <>
      <FloatingNav navItems={navItems} />
    </>
  );
}

export default NavBar;
