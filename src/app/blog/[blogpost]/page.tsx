import { notFound } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/classes";
import { getPostBySlug } from "@/lib/posts.server";

import { LinkedHeading } from "@/core/mdx";
import { formatDate } from "@/lib/format";
import { MDXRemote } from "@/core/mdx/mdx-remote";
import { codeToHtml } from "shiki";

interface Props {
  params: Promise<{ blogpost: string }>;
}

export default async function BlogPost({ params }: Props) {
  const html = await codeToHtml("", {
    lang: "ts",
    theme: "vesper",
  });

  const { blogpost } = await params;
  const post = await getPostBySlug(blogpost);

  if (!post) {
    notFound();
  }

  const {
    cover,
    title,
    description,
    publicationDate,
    modificationDate,
    authors,
    tags,
    readingTime,
    content,
  } = post;

  const formattedPublicationDate = formatDate(publicationDate);
  const formattedModificationDate = modificationDate
    ? formatDate(modificationDate)
    : null;

  return (
    <article className="flex w-full flex-col gap-12">
      <header
        className={cn(
          "mx-auto prose w-full prose-invert",
          cover !== undefined ? "sm:text-center" : ""
        )}
      >
        <LinkedHeading className="leading-tight" level={1}>
          {title}
        </LinkedHeading>
        <div className="not-prose inline-flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 text-sm">
            <div className="inline-flex gap-2 text-sm">
              <time dateTime={publicationDate.toISOString()}>
                {formattedPublicationDate}
              </time>
              {readingTime ? (
                <>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                </>
              ) : null}
            </div>
          </div>
        </div>
        {description && <p className="text-white/70">{description}</p>}

        {tags && tags.length > 0 ? (
          <div className="inline-flex flex-wrap gap-2">
            {tags.map((tag) => {
              return (
                <Link
                  key={tag}
                  className={cn(
                    `no-underline inline-flex max-w-fit w-full shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-transparent px-1.5 py-1 text-xs whitespace-nowrap transition-colors bg-[#262626] text-[#fafafa] hover:bg-neutral-700`
                  )}
                  href={`#`}
                >
                  {tag}
                </Link>
              );
            })}
          </div>
        ) : null}
      </header>

      {cover && (
        <div
          className="relative mx-auto aspect-video w-full max-w-[1200px]
            overflow-hidden rounded-2xl sm:border sm:border-border sm:p-2 backdrop-blur-sm"
        >
          <img
            src={cover}
            alt="Post Thumbnail"
            className="absolute aspect-video size-full object-cover blur-3xl"
          />
          <img
            src={cover}
            alt="Post Thumbnail"
            className="relative aspect-video size-full rounded-xl object-cover
              sm:border sm:border-border"
          />
        </div>
      )}

      <div
        className="relative grid grid-cols-1 items-start justify-end gap-8
          md:grid-cols-[1fr_auto_1fr]"
      >
        <section
          className="prose prose-neutral md:col-start-2 dark:prose-invert
            prose-a:decoration-sky-500 prose-a:underline-offset-4"
        >
          {formattedModificationDate ? (
            <time
              className={cn(
                `inline-flex max-w-fit w-full shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border border-border px-1.5 py-1 text-xs whitespace-nowrap transition-colors bg-sky-950 text-sky-400`
              )}
              dateTime={modificationDate?.toISOString()}
            >
              Last updated: {formattedModificationDate}
            </time>
          ) : null}

          <MDXRemote content={content} />
        </section>
      </div>
    </article>
  );
}
