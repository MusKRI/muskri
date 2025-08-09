import { Metadata } from "next";
import { getAllPosts } from "@/lib/posts.server";
import { PostTeaser } from "components/post-teaser";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs",
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col gap-4 sm:items-center">
      <h1 className="text-3xl font-semibold sm:text-center sm:text-4xl">
        Blog
      </h1>
      <p className="max-w-prose text-white/70 sm:text-center">
        A collection of my thoughts, ideas, and experiences. I write about
        various topics, including web development, technology, and personal
        topics.
      </p>

      <ul
        className="mt-2 grid grid-cols-1 gap-4 rounded-md md:grid-cols-2
          lg:max-w-5xl w-full"
      >
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <PostTeaser
              key={post.slug}
              className="animate-in slide-in-from-bottom-25 fade-in"
              style={{
                animationDuration: `${300 + index * 300}ms`,
              }}
              post={post}
            />
          ))
        ) : (
          <p
            className="col-span-2 rounded-lg bg-neutral-900 p-4 py-3 text-center
              text-white/70"
          >
            No posts were found
          </p>
        )}
      </ul>
    </div>
  );
}
