import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/posts/postCard";
import Link from "next/link";

const Posts = () => {
  const posts = getAllPosts().sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="w-full flex justify-center bg-background text-foreground">
      {posts.length === 0 ? (
        <div className="w-300 py-20 h-165">
        <h1 className="text-4xl font-bold mb-10">Posts</h1>
          <div className="w-full h-15 flex flex-col justify-between">
            <p className="text-foreground/70 text-m">아직 작성된 글이 없습니다.</p>
            <p className="text-cyan-500 underline"><Link href="/">홈으로 돌아가기</Link></p>
          </div>
        </div>
      ): (
        <div className="w-300 py-20">
        <h1 className="text-4xl font-bold mb-10">Posts</h1>
<div className="flex flex-col gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
      </div>
      )}
    </div>
  );
};

export default Posts;
