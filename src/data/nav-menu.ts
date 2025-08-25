import { SVGProps } from "react";
import { BlogIcon, HomeIcon } from "icones/nav-icons";

type NavLink = {
  name: string;
  path: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

export const NavMenu = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Learnings",
    path: "/learnings",
    icon: BlogIcon,
  },
] as const satisfies NavLink[];
