import Kamui from "@/assets/images/projects/kamui.png";
import JaipurPaisley from "@/assets/images/projects/jaipur-paisley.png";
import ApolloIndia from "@/assets/images/projects/apollo-india.png";
import ApolloGreenEnergy from "@/assets/images/projects/apollo-green-energy.png";
import PizzaJoint from "@/assets/images/projects/pizza-joint.png";
import MaximeDesignSystem from "@/assets/images/projects/maxime-design-system.png";

export type Project = {
  title: string;
  description: string;
  image: React.ComponentProps<"img">;
  tags: string[];
  url?: string;
  github?: string;
};

export const projects = [
  {
    title: "Kamui",
    description: "UI hub",
    image: {
      src: Kamui.src,
      height: 1201,
      width: 1600,
    },
    tags: ["Design", "Code"],
    url: "https://kam-ui.com",
    // github: "https://github.com/kamui-ui/kamui",
  },
  {
    title: "Jaipur Paisley",
    description: "E-commerce website for Jaipur Paisley",
    image: {
      src: JaipurPaisley.src,
      height: 1201,
      width: 1600,
    },
    tags: ["Shopify"],
    url: "https://jaipurpaisley.com",
  },
  {
    title: "Apollo India",
    description: "Apollo India main website",
    image: {
      src: ApolloIndia.src,
      height: 1201,
      width: 1600,
    },
    tags: ["Code"],
    url: "https://apolloindia.com",
  },
  {
    title: "Maxime Design System",
    description: "A fun design system",
    image: {
      src: MaximeDesignSystem.src,
      height: 1201,
      width: 1600,
    },
    tags: ["Code"],
    url: "https://maxime-design-system.vercel.app/",
    github: "https://github.com/MusKRI/maxime-design-system",
  },
  {
    title: "Pizza Joint",
    description: "Framer Motion Experiment",
    image: {
      src: PizzaJoint.src,
      height: 1201,
      width: 1600,
    },
    tags: ["Code"],
    url: "https://pizaa-joint.vercel.app/",
    github: "https://github.com/MusKRI/Pizaa-Joint",
  },
  {
    title: "Apollo Green Energy",
    description: "Apollo Green Energy website",
    image: {
      src: ApolloGreenEnergy.src,
      height: 1201,
      width: 1600,
    },
    tags: ["Code"],
    url: "https://apollo-greenenergy.com",
  },
] as const satisfies Project[];
