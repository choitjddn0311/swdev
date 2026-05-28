import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { getTranslations } from "next-intl/server";

interface PostNavProps {
  prev: PostMeta | null;
  next: PostMeta | null;
}

const PostNav = async ({ prev, next }: PostNavProps) => {
  if (!prev && !next) return null;
  const t = await getTranslations("post");

  return (
    <nav className="mt-16 pt-10 border-t border-foreground/10 grid grid-cols-2 gap-4">
      {prev ? (
        <Link
          href={`/posts/${prev.slug}`}
          className="group flex flex-col gap-1 p-4 rounded-lg border border-foreground/10 hover:border-cyan-400 transition-colors"
        >
          <span className="text-xs text-foreground/40">{t("prevPost")}</span>
          <span className="text-sm font-medium line-clamp-2 group-hover:text-cyan-500 transition-colors">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/posts/${next.slug}`}
          className="group flex flex-col gap-1 p-4 rounded-lg border border-foreground/10 hover:border-cyan-400 transition-colors text-right"
        >
          <span className="text-xs text-foreground/40">{t("nextPost")}</span>
          <span className="text-sm font-medium line-clamp-2 group-hover:text-cyan-500 transition-colors">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
};

export default PostNav;
