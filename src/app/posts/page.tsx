import { getAllPosts, getTagList } from "@/lib/posts";
import PostCard from "@/components/posts/postCard";
import PostsFilter from "@/components/posts/PostsFilter";
import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Posts",
  description: "최성우의 개발 블로그 포스트 목록입니다. Web, Linux, AI 등 다양한 주제를 다룹니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: siteConfig.name,
    title: `Posts | ${siteConfig.name}`,
    description: "최성우의 개발 블로그 포스트 목록입니다.",
    url: `${siteConfig.url}/posts`,
  },
};

const POSTS_PER_PAGE = 12;

const Posts = async ({ searchParams }: { searchParams: Promise<{ page?: string; q?: string; tag?: string }> }) => {
  const { page, q, tag } = await searchParams;
  const query = q?.trim() ?? "";
  const selectedTag = tag?.trim() ?? "";

  const allPosts = getAllPosts();
  const tagList = getTagList();

  const filteredPosts = allPosts
    .filter((post) => !selectedTag || post.tags.includes(selectedTag))
    .filter((post) =>
      !query ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.summary.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
    );

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const posts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const paginationHref = (p: number) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (selectedTag) params.set("tag", selectedTag);
    params.set("page", String(p));
    return `/posts?${params.toString()}`;
  };

  return (
    <div className="w-full flex justify-center bg-background text-foreground">
      <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 py-20 px-5 xl:px-0 ">

        <h1 className="text-2xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl font-bold mb-6">Posts</h1>

        <Suspense fallback={<div className="h-20 rounded-lg bg-foreground/10 animate-pulse mb-10" />}>
          <PostsFilter tags={tagList} />
        </Suspense>

        {allPosts.length === 0 ? (
          <div className="flex flex-col gap-3 h-100 justify-start">
            <p className="text-foreground/70">아직 작성된 글이 없습니다.</p>
            <p className="text-cyan-500 underline"><Link href="/">홈으로 돌아가기</Link></p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-60 gap-3 text-foreground/50">
            <p className="text-lg">검색 결과가 없습니다.</p>
            <p className="text-sm text-center">
              {selectedTag && <><span className="text-cyan-500">#{selectedTag}</span> 태그{query && " · "}</>}
              {query && <>&apos;<span className="text-cyan-500">{query}</span>&apos;</>}
              {" "}와 일치하는 포스트를 찾을 수 없어요.
            </p>
          </div>
        ) : (
          <>
            {(query || selectedTag) && (
              <p className="text-sm text-foreground/50 mb-6">
                {selectedTag && <span className="text-cyan-500 mr-1">#{selectedTag}</span>}
                {query && <>&apos;<span className="text-cyan-500">{query}</span>&apos; </>}
                검색 결과 {filteredPosts.length}개
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 min-h-120">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-14">
                {currentPage > 1 && (
                  <Link
                    href={paginationHref(currentPage - 1)}
                    className="px-4 py-2 rounded-lg border border-foreground/20 text-sm hover:border-cyan-400 hover:text-cyan-500 transition-colors"
                  >
                    &larr; 이전
                  </Link>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={paginationHref(p)}
                    className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm transition-colors ${
                      p === currentPage
                        ? "bg-cyan-400 text-white font-semibold"
                        : "border border-foreground/20 hover:border-cyan-400 hover:text-cyan-500"
                    }`}
                  >
                    {p}
                  </Link>
                ))}
                {currentPage < totalPages && (
                  <Link
                    href={paginationHref(currentPage + 1)}
                    className="px-4 py-2 rounded-lg border border-foreground/20 text-sm hover:border-cyan-400 hover:text-cyan-500 transition-colors"
                  >
                    다음 &rarr;
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Posts;
