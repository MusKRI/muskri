import { IconType } from "react-icons";
import {
  PiGithubLogoDuotone,
  PiLinkedinLogoDuotone,
  PiXLogoDuotone,
} from "react-icons/pi";

type SocialProfile = {
  name: string;
  href: string;
  logo: IconType;
};

export const SOCIAL_MEDIA_PROFILES = [
  {
    name: "GitHub",
    href: "https://github.com/MusKRI",
    logo: PiGithubLogoDuotone,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muskri/",
    logo: PiLinkedinLogoDuotone,
  },
  {
    name: "X",
    href: "https://x.com/_MusKRii",
    logo: PiXLogoDuotone,
  },
] as const satisfies SocialProfile[];
