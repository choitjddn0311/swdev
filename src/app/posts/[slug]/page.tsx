import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/posts/mdxComponents";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";
import { extractToc } from "@/lib/toc";
import TableOfContents from "@/components/posts/TableOfContents";
import Comments from "@/components/posts/Comments";
import { siteConfig } from "@/lib/siteConfig";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);
  return {
    title: meta.title,
    description: meta.summary,
    keywords: meta.tags,
    openGraph: {
      type: "article",
      locale: "ko_KR",
      siteName: siteConfig.name,
      title: meta.title,
      description: meta.summary,
      url: `${siteConfig.url}/posts/${slug}`,
      publishedTime: meta.date,
      tags: meta.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.summary,
    },
  };
}

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const { meta, content } = getPostBySlug(slug);
  const tocItems = extractToc(content); // ← 추가

  return (
    <div className="w-full flex justify-center bg-background text-foreground min-h-165">
      {/* ↓ 레이아웃을 article + TOC 나란히 배치하도록 변경 */}
      <div className="flex gap-10 w-full max-w-screen-xl px-6 py-20 items-start">
        <article className="w-300 min-w-0 flex-1 pb-70">
          <Link
            href="/posts"
            className="text-cyan-500 hover:text-cyan-400 mb-8 inline-block"
          >
            &larr; 목록으로
          </Link>

          <header className="mb-10">
            <h1 className="text-2xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl font-bold mb-3">{meta.title}</h1>
            <time className="text-foreground/50 text-sm 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-s ">{meta.date}</time>
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
          <Comments />
        </article>

        {/* ↓ TOC — article 오른쪽에 배치 */}
        <TableOfContents items={tocItems} />
      </div>
    </div>
  );
};

export default PostPage;