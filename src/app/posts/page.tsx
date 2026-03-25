import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/posts/postCard";

const Posts = () => {
  const posts = getAllPosts();

  return (
    <div className="w-full flex justify-center bg-background text-foreground">
      <div className="w-300 py-20">
        <h1 className="text-4xl font-bold mb-10">Posts</h1>
        {posts.length === 0 ? (
          <p className="text-foreground/50">아직 작성된 글이 없습니다.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
