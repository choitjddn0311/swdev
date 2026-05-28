"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface TagFilterProps {
  tags: { tag: string; count: number }[];
}

const TagFilter = ({ tags }: TagFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get("tag") ?? "";
  const query = searchParams.get("q") ?? "";

  const handleSelect = (tag: string) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (tag && tag !== selectedTag) params.set("tag", tag);
    const qs = params.toString();
    router.push(qs ? `/posts?${qs}` : "/posts");
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleSelect("")}
        className={`px-3 py-1 rounded-full text-sm transition-colors ${
          !selectedTag
            ? "bg-cyan-400 text-white font-semibold"
            : "border border-foreground/20 text-foreground/60 hover:border-cyan-400 hover:text-cyan-500"
        }`}
      >
        전체
      </button>
      {tags.map(({ tag, count }) => (
        <button
          key={tag}
          onClick={() => handleSelect(tag)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            selectedTag === tag
              ? "bg-cyan-400 text-white font-semibold"
              : "border border-foreground/20 text-foreground/60 hover:border-cyan-400 hover:text-cyan-500"
          }`}
        >
          {tag}
          <span className="ml-1 text-xs opacity-70">{count}</span>
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
