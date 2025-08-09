import Link from "next/link";
import { PiCalendarDotsDuotone, PiClockCountdownDuotone } from "react-icons/pi";

import { cn } from "@/lib/classes";
import { formatDate } from "@/lib/format";
import type { Post } from "@/lib/posts.server";

const DATE_TIME_FORMAT_OPTIONS = {
  year: "numeric",
  day: "2-digit",
  month: "short",
} satisfies Intl.DateTimeFormatOptions;

interface PostTeaserProps extends React.ComponentProps<"li"> {
  post: Post;
}

export function PostTeaser({ post, className, ...props }: PostTeaserProps) {
  const {
    title,
    description,
    publicationDate,
    modificationDate,
    authors,
    tags,
    cover,
    readingTime,
  } = post;

  const formattedPublicationDate = formatDate(
    publicationDate,
    DATE_TIME_FORMAT_OPTIONS
  );

  return (
    <li
      className={cn(
        `group relative flex flex-col rounded-lg border border-border bg-neutral-900
        offset-border transition-colors hover:bg-neutral-800`,
        className
      )}
      {...props}
    >
      <Link
        className="absolute inset-0 z-20"
        href={`/blog/${post.slug}`}
        prefetch={true}
      >
        <span className="sr-only">Link to article</span>
      </Link>
      <div
        className="z-10 flex flex-col gap-3 rounded-lg border-neutral-700 p-4
          hover:bg-neutral-800"
      >
        <div className="flex gap-2 text-xs text-white/70">
          <span>
            <time
              className={cn(
                `inline-flex max-w-fit w-full shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-border px-1.5 py-1 text-xs whitespace-nowrap transition-colors bg-sky-950 text-sky-400`
              )}
              dateTime={publicationDate.toISOString()}
            >
              <PiCalendarDotsDuotone size={16} />
              {formattedPublicationDate}
            </time>
          </span>
          <span
            className={cn(
              `inline-flex max-w-fit w-full shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent px-1.5 py-1 text-xs whitespace-nowrap transition-colors bg-[#262626] text-[#fafafa] group-hover:bg-neutral-700`
            )}
          >
            <PiClockCountdownDuotone size={16} />
            {readingTime} min read
          </span>
        </div>
        <h2 className="text-xl font-semibold tracking-normal">{title}</h2>
        <p className="line-clamp-2 text-sm text-white/70">{description}</p>
      </div>
    </li>
  );
}
