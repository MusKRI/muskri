// Real icons
import {
  TypeScriptIcon,
  TailwindcssIcon,
  ReactIcon,
  NextjsIcon,
  ZustandIcon,
  ReactRouterIcon,
  MotionDevIcon,
  NodejsIcon,
  ExpressjsIcon,
  MongodbIcon,
  CursorIcon,
  ViteIcon,
  GithubIcon,
  NuqsIcon,
  MdxIcon,
  TanStackIcon,
  SupabaseIcon,
  PrismaIcon,
} from "@/core/icones/skills";

type Skill = {
  name: string;
  logo: React.FunctionComponent<
    React.ComponentProps<"svg"> & {
      title?: string;
      titleId?: string;
      desc?: string;
      descId?: string;
    }
  >;
  url: string;
};

export const SKILLS = {
  Frontend: [
    // {
    //   name: "HTML",
    //   logo: HTML,
    //   url: "https://developer.mozilla.org/de/docs/Web/HTML",
    // },
    // {
    //   name: "CSS",
    //   logo: CSS,
    //   url: "https://developer.mozilla.org/de/docs/Web/CSS",
    // },
    // {
    //   name: "JavaScript",
    //   logo: JavaScript,
    //   url: "https://developer.mozilla.org/de/docs/Web/JavaScript",
    // },
    {
      name: "TypeScript",
      logo: TypeScriptIcon,
      url: "https://www.typescriptlang.org",
    },
    {
      name: "Tailwind CSS",
      logo: TailwindcssIcon,
      url: "https://tailwindcss.com",
    },
    {
      name: "React",
      logo: ReactIcon,
      url: "https://react.dev",
    },
    {
      name: "React Router",
      logo: ReactRouterIcon,
      url: "https://reactrouter.com",
    },
    {
      name: "Next.js",
      logo: NextjsIcon,
      url: "https://nextjs.org",
    },
    {
      name: "Motion",
      logo: MotionDevIcon,
      url: "https://motion.dev",
    },
    {
      name: "Zustand",
      logo: ZustandIcon,
      url: "https://zustand-demo.pmnd.rs/",
    },
    {
      name: "Nuqs",
      logo: NuqsIcon,
      url: "https://nuqs.47ng.com/",
    },
    {
      name: "MDX",
      logo: MdxIcon,
      url: "https://mdxjs.com/",
    },
    {
      name: "TanStack",
      logo: TanStackIcon,
      url: "https://tanstack.com/",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      logo: NodejsIcon,
      url: "https://nodejs.org",
    },
    {
      name: "Express.js",
      logo: ExpressjsIcon,
      url: "https://expressjs.com",
    },
    {
      name: "MongoDB",
      logo: MongodbIcon,
      url: "https://www.mongodb.com/",
    },
    {
      name: "Supabase",
      logo: SupabaseIcon,
      url: "https://supabase.com/",
    },
  ],
  // Design: [
  //   {
  //     name: "Figma",
  //     logo: Figma,
  //     url: "https://www.figma.com",
  //   },
  //   {
  //     name: "Creative Cloud",
  //     logo: CreativeCloud,
  //     url: "https://www.adobe.com/creativecloud.html",
  //   },
  // ],
  // CMS: [
  //   {
  //     name: "WordPress",
  //     logo: Wordpress,
  //     url: "https://wordpress.org",
  //   },
  //   {
  //     name: "Payload",
  //     logo: Payload,
  //     url: "https://payloadcms.com",
  //   },
  //   {
  //     name: "Sanity",
  //     logo: Sanity,
  //     url: "https://www.sanity.io",
  //   },
  // ],
  Tools: [
    {
      name: "Cursor",
      logo: CursorIcon,
      url: "https://cursor.com",
    },
    {
      name: "Vite",
      logo: ViteIcon,
      url: "https://vite.dev",
    },
    {
      name: "GitHub",
      logo: GithubIcon,
      url: "https://github.com",
    },
    {
      name: "Prisma",
      logo: PrismaIcon,
      url: "https://prisma.io",
    },
  ],
} as const satisfies { [key: string]: Skill[] };
