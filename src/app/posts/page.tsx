import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/posts/postCard";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "최성우의 개발 블로그 포스트 목록입니다. Web, Linux, AI 등 다양한 주제를 다룹니다.",
  openGraph: {
    title: "Posts | sungwoo dev blog",
    description: "최성우의 개발 블로그 포스트 목록입니다.",
    url: "/posts",
  },
};

const POSTS_PER_PAGE = 12;

const Posts = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
  const { page } = await searchParams;
  const allPosts = getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const posts = allPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <div className="w-full flex justify-center bg-background text-foreground">
      {allPosts.length === 0 ? (
        <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 py-20 h-165 px-5 xl:px-0">
          <h1 className="text-2xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl font-bold mb-10">Posts</h1>
          <div className="w-full flex flex-col gap-3">
            <p className="text-foreground/70">아직 작성된 글이 없습니다.</p>
            <p className="text-cyan-500 underline"><Link href="/">홈으로 돌아가기</Link></p>
          </div>
        </div>
      ) : (
        <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 py-20 px-5 xl:px-0">
          <h1 className="text-2xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl font-bold mb-10">Posts</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-14">
              {currentPage > 1 && (
                <Link
                  href={`/posts?page=${currentPage - 1}`}
                  className="px-4 py-2 rounded-lg border border-foreground/20 text-sm hover:border-cyan-400 hover:text-cyan-500 transition-colors"
                >
                  &larr; 이전
                </Link>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={`/posts?page=${p}`}
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
                  href={`/posts?page=${currentPage + 1}`}
                  className="px-4 py-2 rounded-lg border border-foreground/20 text-sm hover:border-cyan-400 hover:text-cyan-500 transition-colors"
                >
                  다음 &rarr;
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Posts;
