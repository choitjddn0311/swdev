import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

const PostCard = ({ post }: { post: PostMeta }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="w-full h-30 2xl:h-full xl:h-full lg:h-full md:h-full sm:h-30 border-2 border-foreground/10 rounded-lg p-3 2xl:p-6 xl:p-6 lg:p-4 md:p-4 sm:p-3 hover:border-maincolor transition-colors">
        <h2 className="text-md 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-md font-bold mb-0 2xl:mb-2 xl:mb-2 lg:mb-1 md:mb-1 sm:mb-0">{post.title}</h2>
        <time className="text-xs 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs text-foreground/50">{post.date}</time>
        <p className="mt-0 2xl:mt-3 xl:mt-3 lg:mt-1 md:mt-1 sm:mt-0 text-sm hidden 2xl:block xl:block lg:block md:block sm:hidden text-foreground/70 line-clamp-2">{post.summary}</p>
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
