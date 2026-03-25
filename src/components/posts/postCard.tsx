import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

const PostCard = ({ post }: { post: PostMeta }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="border-2 border-foreground/10 rounded-lg p-6 hover:border-maincolor transition-colors">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <time className="text-sm text-foreground/50">{post.date}</time>
        <p className="mt-3 text-foreground/70 line-clamp-2">{post.summary}</p>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
};

export default PostCard;
