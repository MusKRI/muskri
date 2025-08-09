import { readdirSync, existsSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { z } from "zod/v4";

// Raw frontmatter as it can appear in MDX files (supports `author` or `authors`)
const rawFrontmatterSchema = z
  .object({
    title: z.string().min(30, {
      message: "Title must be at least 30 characters long.",
    }),
    description: z.string().min(60, {
      message: "Description must be at least 60 characters long.",
    }),
    publicationDate: z.coerce.date(),
    modificationDate: z.coerce.date().optional(),
    featured: z.boolean().optional(),
    // Accept either `author` or `authors` in source files
    author: z.string().optional(),
    authors: z.array(z.string()).min(1).optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    // Ignore legacy user-provided readingTime; we'll compute it
    readingTime: z.number().optional(),
  })
  .strict();

// Normalized, type-safe frontmatter used throughout the app
export const postFrontmatterSchema = z
  .object({
    title: z.string().min(30),
    description: z.string().min(60),
    publicationDate: z.date(),
    modificationDate: z.date().optional(),
    featured: z.boolean().default(false),
    authors: z.array(z.string()).min(1),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  })
  .strict();

export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
  readingTime: number; // in minutes
};

function normalizeFrontmatter(frontmatter: unknown): PostFrontmatter {
  const parsed = rawFrontmatterSchema.parse(frontmatter);

  const normalizedAuthors =
    parsed.authors ?? (parsed.author ? [parsed.author] : undefined);
  if (!normalizedAuthors || normalizedAuthors.length === 0) {
    throw new Error(
      "Frontmatter must include either `author` or `authors` with at least one name."
    );
  }

  return postFrontmatterSchema.parse({
    title: parsed.title,
    description: parsed.description,
    publicationDate: parsed.publicationDate,
    modificationDate: parsed.modificationDate,
    featured: parsed.featured ?? false,
    authors: normalizedAuthors,
    tags: parsed.tags ?? [],
    cover: parsed.cover,
  });
}

function calculateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

// Get all posts
type GetAllPostsProps = {
  take?: number;
};

export async function getAllPosts({ take }: GetAllPostsProps = {}) {
  const postsDirectory = join(process.cwd(), "src/content/blogs");

  if (!existsSync(postsDirectory)) {
    console.warn(`Posts directory not found: ${postsDirectory}`);
    return [];
  }

  try {
    const contentFiles = readdirSync(postsDirectory).filter((file) =>
      file.endsWith(".mdx")
    );

    let posts: Post[] = [];

    for (const file of contentFiles) {
      try {
        const filePath = join(postsDirectory, file);
        const fileContent = readFileSync(filePath, "utf-8");
        const { data: frontmatter, content } = matter(fileContent);
        const normalized = normalizeFrontmatter(frontmatter);
        const slug = file.replace(/\.mdx$/i, "");
        const readingTime = calculateReadingTime(content);

        posts.push({
          slug,
          content,
          readingTime,
          ...normalized,
        });
      } catch (err) {
        console.warn(`Skipping invalid post file '${file}':`, err);
      }
    }

    if (take) {
      posts = posts.slice(0, take);
    }

    return posts;
  } catch (error) {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const postsDirectory = join(process.cwd(), "src/content/blogs");
  const filePath = join(postsDirectory, `${slug}.mdx`);
  if (!existsSync(filePath)) return null;
  try {
    const fileContent = readFileSync(filePath, "utf-8");
    const { data: frontmatter, content } = matter(fileContent);
    const normalized = normalizeFrontmatter(frontmatter);
    const readingTime = calculateReadingTime(content);
    return { slug, content, readingTime, ...normalized };
  } catch (err) {
    console.warn(`Failed to parse post '${slug}':`, err);
    return null;
  }
}

export async function getAllPostSlugs(): Promise<string[]> {
  const postsDirectory = join(process.cwd(), "src/content/blogs");
  if (!existsSync(postsDirectory)) return [];
  try {
    return readdirSync(postsDirectory)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/i, ""));
  } catch {
    return [];
  }
}

export async function getNextPost(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1 || index === posts.length - 1) return null;

  return posts[index + 1];
}
