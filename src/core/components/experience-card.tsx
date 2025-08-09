import type { WorkExperience } from "@/data/work-experience";
import Link from "next/link";
import Avatar from "boring-avatars";

import { formatDate } from "@/lib/format";
import { cn } from "@/lib/classes";

const DATE_TIME_FORMAT_OPTIONS = {
  year: "numeric",
  month: "long",
} satisfies Intl.DateTimeFormatOptions;

export default function ExperienceCard({
  title,
  description,
  startDate,
  endDate,
  organization,
  logo,
  url,
  avatarColors = [],
}: WorkExperience) {
  const formattedStartDate = formatDate(startDate, DATE_TIME_FORMAT_OPTIONS);
  const formattedEndDate =
    endDate !== null
      ? formatDate(endDate, DATE_TIME_FORMAT_OPTIONS)
      : "Present";
  return (
    <div
      className="flex items-start gap-2 overflow-clip rounded-xl border border-border
        bg-neutral-900 p-4 offset-border transition-colors"
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Company Logo"
        className="relative h-fit shrink-0 rounded-full border border-border bg-neutral-800
          p-1"
      >
        {logo ? (
          <>
            <img
              className="absolute inset-0 size-full rounded-full blur-2xl"
              {...logo}
              loading="lazy"
              alt={organization}
            />
            <img
              className="relative size-10 rounded-full"
              {...logo}
              loading="lazy"
              alt={organization}
            />
          </>
        ) : (
          <>
            <span className="absolute inset-0 size-full rounded-full blur-2xl">
              <Avatar
                size={40}
                name={organization}
                colors={avatarColors}
                variant="beam"
              />
            </span>
            <span className="relative size-10 rounded-full">
              <Avatar
                size={40}
                name={organization}
                colors={avatarColors}
                variant="beam"
              />
            </span>
          </>
        )}

        <span className="sr-only">Link to {url}</span>
      </Link>

      <div className="flex grow flex-col gap-0.5">
        <div className="flex flex-wrap-reverse items-center justify-between gap-1">
          <h3 className="font-bold">{title}</h3>
          <p
            className={cn(
              "text-xs text-muted-foreground",
              !endDate && "text-sky-400"
            )}
          >
            {formattedStartDate} - {formattedEndDate}
          </p>
        </div>
        <p className="text-sm text-white/60 leading-normal" title={description}>
          {description}
        </p>
      </div>
    </div>
  );
}
