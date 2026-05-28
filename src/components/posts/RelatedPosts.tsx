import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { getTranslations } from "next-intl/server";

interface RelatedPostsProps {
  posts: PostMeta[];
}

const RelatedPosts = async ({ posts }: RelatedPostsProps) => {
  if (posts.length === 0) return null;
  const t = await getTranslations("post");

  return (
    <div className="mt-8 pt-6 border-t border-foreground/10">
      <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-4">
        {t("relatedPosts")}
      </p>
      <ul className="flex flex-col gap-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/posts/${post.slug}`}
              className="group flex flex-col gap-1"
            >
              <span className="text-sm font-medium line-clamp-2 group-hover:text-cyan-500 transition-colors leading-snug">
                {post.title}
              </span>
              <time className="text-xs text-foreground/40">{post.date}</time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedPosts;
