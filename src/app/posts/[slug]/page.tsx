import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/posts/mdxComponents";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);
  return { title: `${meta.title} | SW dev` };
}

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const { meta, content } = getPostBySlug(slug);

  return (
    <div className="w-full flex justify-center bg-background text-foreground min-h-165">
      <article className="w-300 py-20">
        <Link
          href="/posts"
          className="text-cyan-500 hover:text-cyan-400 mb-8 inline-block"
        >
          &larr; 목록으로
        </Link>

        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-3">{meta.title}</h1>
          <time className="text-foreground/50">{meta.date}</time>
          {meta.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div>
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
};

export default PostPage;
