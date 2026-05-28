import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  slug: string;
}

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      title: data.title ?? slug,
      date: data.date ?? "",
      summary: data.summary ?? "",
      tags: data.tags ?? [],
      slug,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string) {
  const decoded = decodeURIComponent(slug);
  const filePath = path.join(postsDirectory, `${decoded}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      title: data.title ?? slug,
      date: data.date ?? "",
      summary: data.summary ?? "",
      tags: data.tags ?? [],
      slug,
    } as PostMeta,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAdjacentPosts(slug: string): { prev: PostMeta | null; next: PostMeta | null } {
  const posts = getAllPosts(); // newest first
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: posts[index + 1] ?? null, // older post
    next: posts[index - 1] ?? null, // newer post
  };
}

export function getRelatedPosts(slug: string, tags: string[], limit = 4): PostMeta[] {
  const posts = getAllPosts().filter((p) => p.slug !== slug);
  if (tags.length === 0) return posts.slice(0, limit);

  return posts
    .map((post) => ({
      post,
      score: post.tags.filter((t) => tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || (b.post.date > a.post.date ? 1 : -1))
    .slice(0, limit)
    .map(({ post }) => post);
}
