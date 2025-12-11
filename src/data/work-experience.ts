import odin from "@/assets/images/logos/odin.png";

export type WorkExperience = {
  title: string;
  description: string;
  startDate: string;
  endDate: string | null;
  logo?: React.ComponentProps<"img">;
  organization: string;
  url: string;
  avatarColors?: string[];
};

export const WORK_EXPERIENCE = [
  {
    title: "Saasaki Technology Pvt. Ltd.",
    description: "Frontend Developer",
    startDate: "2023-02-20",
    endDate: "2025-10-22",
    // logo: { src: vanever.src, width: 193, height: 193 },
    organization: "Web, Mobile & Software Development",
    url: "https://www.teramars.com/",
    avatarColors: ["#3245f7", "#feffff"],
  },
  {
    title: "Odin Infotech",
    description: "Web Developer",
    startDate: "2022-01-17",
    endDate: "2023-02-20",
    logo: { src: odin.src, width: 496, height: 496 },
    organization: "Web, Mobile & Software Development",
    url: "https://theodin.in/",
  },
] satisfies WorkExperience[];

export const EDUCATION = [
  {
    title: "Bachelor of Technology in Computer Science & Engineering",
    description:
      "Studied at the Arya Institute of Engineering & Technology, where I learned the fundamentals of computer science and engineering.",
    startDate: "2019-06-01",
    endDate: "2023-05-31",
    organization: "Arya Institute of Engineering & Technology",
    url: "https://www.aryacollege.org/",
    avatarColors: ["#e31e23", "#ffed00", "#e6e6e6"],
  },
] satisfies WorkExperience[];
