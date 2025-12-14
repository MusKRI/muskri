import {
  PiProjectorScreenChartDuotone,
  PiKanbanDuotone,
  PiStudentDuotone,
} from "react-icons/pi";
import Link from "next/link";

import { cn } from "@/lib/classes";
import { projects } from "@/data/projects";
import { SKILLS } from "@/data/skills";
import { EDUCATION, WORK_EXPERIENCE } from "@/data/work-experience";

import { ProjectTeaser } from "components/project-teaser";
import { MyAvatar } from "components/my-avatar";
import ExperienceCard from "components/experience-card";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-8 sm:items-center sm:gap-16 mt-20">
      <div className="relative flex items-center justify-center">
        <div
          className="absolute -inset-px rounded-[14px] bg-linear-to-tr
            from-amber-600 via-sky-600 to-sky-400 opacity-75 blur-2xl
          "
        ></div>
        <div
          className="absolute -inset-0.5 rounded-[14px] bg-linear-to-tr
            from-amber-600 via-sky-600 to-sky-400"
        ></div>
        <MyAvatar className="relative size-24 rounded-xl sm:size-40" />
      </div>

      <div className="z-10 space-y-6 sm:text-center">
        <h1 className="text-4xl font-semibold tracking-normal">
          Krishna Saini
        </h1>
        <p
          className="max-w-prose text-pretty text-white/70
            sm:text-lg"
        >
          I’m a <b className="text-white">Frontend Engineer</b> focused on
          crafting intuitive interfaces and delightful micro-interactions.
          Full‑stack capable, I take projects from conception to deployment.
        </p>
      </div>

      <div className="relative">
        <div className="absolute -top-1/12 left-1/5 h-80 w-40 rotate-45 bg-neutral-500/40 blur-2xl"></div>
        <div className="absolute -top-12 left-2/5 h-50 w-24 rotate-45 bg-neutral-500/50 blur-3xl lg:-top-1/5 lg:left-2/5 lg:h-96 lg:w-36"></div>
        <div
          className="relative grid grid-cols-1 gap-8 rounded-3xl border-t border-white/10
            bg-linear-to-b from-neutral-900/90 to-neutral-950/50 p-4 py-6
            max-sm:-mx-4 sm:grid-cols-2 sm:p-8 lg:grid-cols-3"
        >
          <div className="absolute -top-px left-1/4 h-px w-1/3 bg-linear-to-r from-transparent via-white/60 to-transparent"></div>
          <div className="flex flex-col gap-2 sm:row-span-2">
            <h2 className="flex items-center gap-1 text-2xl font-semibold tracking-normal">
              <PiProjectorScreenChartDuotone size={28} />
              Projects
            </h2>
            <p className="max-w-prose text-white/70">
              Here are some of the projects I have worked on. This is a growing
              list of my work, showcasing my skills and interests in web
              development and design.
            </p>
          </div>

          {/* TODO: Add animation to this element */}
          <div
            className="order-last animate-pulse rounded-lg bg-neutral-900 p-4
              text-center text-white/70 offset-border"
          >
            More projects are listed here soon!
          </div>

          {projects.map((project, index) => (
            <ProjectTeaser key={project.title} {...project} />
          ))}
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex max-w-2xl flex-col gap-2">
          <h2 className="flex items-center gap-1 text-2xl font-semibold tracking-normal">
            <PiKanbanDuotone size={28} />
            Skills
          </h2>
          <p className="mb-3 max-w-prose text-white/70">
            I ship with TypeScript, honing Effect now a days.
          </p>

          <div className="flex flex-wrap gap-4">
            {Object.entries(SKILLS).map(([category, skillSet]) => {
              return (
                <div
                  key={category}
                  className="flex flex-col gap-1 overflow-x-hidden rounded-lg
                    border border-border bg-background shadow-md offset-border"
                >
                  <ul
                    className="relative flex snap-x snap-mandatory gap-4
                      overflow-x-auto border-b border-border bg-neutral-900 p-4 shadow"
                  >
                    {skillSet.map(({ name, logo: Logo, url }) => (
                      <li key={name} className="scroll-mx-4 group shrink-0">
                        <Link
                          className="flex flex-col items-center gap-2 text-xs
                            whitespace-nowrap text-white/70"
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Logo className="size-8 rounded grayscale-100 group-hover:grayscale-0" />
                          <span>{name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <h3
                    className="py-0.5 pb-1.5 text-center text-sm
                      text-white/70"
                  >
                    {category}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="flex items-center gap-1 text-2xl font-semibold tracking-normal">
            <PiStudentDuotone size={28} />
            Work and Education
          </h2>
          <p className="mb-3 max-w-prose text-white/70">
            I have worked in various roles and companies, gaining experience in
            web development, design, and project management. Here are some of my
            work experiences and educational background.
          </p>
          <div className="flex flex-col gap-4">
            {WORK_EXPERIENCE.map((experience) => {
              return <ExperienceCard key={experience.url} {...experience} />;
            })}
            {EDUCATION.map((education) => {
              return <ExperienceCard key={education.url} {...education} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
