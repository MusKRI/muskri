import type { Project } from "@/data/projects";
import Link from "next/link";
import { cn } from "@/lib/classes";
import { PiLinkSimpleDuotone, PiGithubLogoDuotone } from "react-icons/pi";

export function ProjectTeaser({
  tags,
  description,
  image,
  title,
  github,
  url,
  className,
  ...props
}: Project & React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        `relative row-span-4 flex flex-col justify-start gap-2 overflow-hidden
        rounded-xl bg-neutral-900 p-4 offset-border lg:last:col-start-3
        lg:last:row-start-2`,
        className
      )}
      {...props}
    >
      <div className="absolute top-2 right-2 z-10 flex items-center gap-2 text-xs">
        {tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              `inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-border px-1.5 py-1 text-xs whitespace-nowrap transition-colors bg-sky-950/80 text-sky-400 backdrop-blur-sm`
            )}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="relative transition-[filter_color] duration-300">
        <div
          className="absolute inset-0 bg-linear-to-b from-transparent
            via-transparent to-neutral-900 to-95%"
        ></div>
        <img
          {...image}
          alt={title}
          className="aspect-[4/3] rounded-lg object-cover"
        />
      </div>

      <div
        className="absolute right-4 bottom-4 left-4 flex items-end
          justify-between gap-4"
      >
        <div className="flex flex-col">
          <h3 className="truncate text-lg font-semibold tracking-normal">
            {title}
          </h3>
          <p className="text-xs text-white/60">{description}</p>
        </div>

        {github || url ? (
          <div className="flex items-center gap-2">
            {url ? (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 rounded-[12px] px-3 py-1.5 text-white bg-(--color-sky-600) drop-shadow-[0px_0px_3px_var(--color-sky-700)] text-sm text-shadow-[0_1px_0_0_#e07000] shadow-[inset_0_0_0_1px_var(--color-sky-600),inset_0_2px_0_0_var(--color-sky-700)] [transition:translate_200ms_ease-out,scale_120ms_ease-out] active:translate-y-0.5 active:scale-98"
              >
                <PiLinkSimpleDuotone size={16} />
                Visit
              </Link>
            ) : null}
            {github ? (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 size-8 bg-sky-950 text-sky-400 hover:bg-sky-900 rounded-[12px] text-sm text-shadow-[0_1px_0_0_#e07000] [transition:translate_200ms_ease-out,scale_120ms_ease-out] active:translate-y-0.5 active:scale-98"
              >
                <PiGithubLogoDuotone size={18} />
              </Link>
            ) : null}
          </div>
        ) : (
          <div className="flex items-center gap-2"></div>
        )}
      </div>
    </div>
  );
}
