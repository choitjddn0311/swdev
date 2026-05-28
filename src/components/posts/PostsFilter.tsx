"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { FaSearch } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface PostsFilterProps {
  tags: { tag: string; count: number }[];
}

const PostsFilter = ({ tags }: PostsFilterProps) => {
  const t = useTranslations("posts");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [searchValue, setSearchValue] = useState(searchParams.get("q") ?? "");
  const [expanded, setExpanded] = useState(false);
  const selectedTag = searchParams.get("tag") ?? "";

  const VISIBLE_COUNT = 5;
  const hasMore = tags.length > VISIBLE_COUNT;
  const hiddenCount = tags.length - VISIBLE_COUNT;

  // 선택된 태그가 접힌 영역에 있으면 항상 노출
  const selectedTagHidden =
    !expanded &&
    selectedTag !== "" &&
    !tags.slice(0, VISIBLE_COUNT).some((t) => t.tag === selectedTag);

  const visibleTags = expanded
    ? tags
    : [
        ...tags.slice(0, VISIBLE_COUNT),
        ...(selectedTagHidden ? tags.filter((t) => t.tag === selectedTag) : []),
      ];

  // ref로 최신 selectedTag를 유지 — debounce 클로저에서 stale 값 방지
  const selectedTagRef = useRef(selectedTag);
  selectedTagRef.current = selectedTag;

  // 검색 디바운스 (300ms) — tag 파라미터 유지
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      if (searchValue.trim()) params.set("q", searchValue.trim());
      if (selectedTagRef.current) params.set("tag", selectedTagRef.current);
      const qs = params.toString();
      startTransition(() => {
        router.replace(qs ? `/posts?${qs}` : "/posts");
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue, router]);

  const handleTagSelect = (tag: string) => {
    const params = new URLSearchParams();
    if (searchValue.trim()) params.set("q", searchValue.trim());
    if (tag && tag !== selectedTag) params.set("tag", tag);
    const qs = params.toString();
    startTransition(() => {
      router.push(qs ? `/posts?${qs}` : "/posts");
    });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
      {/* 태그 필터 */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleTagSelect("")}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            !selectedTag
              ? "bg-cyan-400 text-white font-semibold"
              : "border border-foreground/20 text-foreground/60 hover:border-cyan-400 hover:text-cyan-500"
          }`}
        >
          {t("allLabel")}
        </button>
        {visibleTags.map(({ tag, count }) => (
          <button
            key={tag}
            onClick={() => handleTagSelect(tag)}
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

        {hasMore && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="px-3 py-1 rounded-full text-sm border border-foreground/20 text-foreground/40 hover:border-cyan-400 hover:text-cyan-500 transition-colors"
          >
            {t("showMore", { count: hiddenCount })}
          </button>
        )}
        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="px-3 py-1 rounded-full text-sm border border-foreground/20 text-foreground/40 hover:border-cyan-400 hover:text-cyan-500 transition-colors"
          >
            {t("collapse")}
          </button>
        )}
      </div>

      {/* 검색창 */}
      <div className="relative w-full sm:w-72 shrink-0">
        <FaSearch
          className={`absolute left-3 top-1/2 -translate-y-1/2 text-sm transition-colors ${
            isPending ? "text-cyan-400 animate-pulse" : "text-foreground/40"
          }`}
        />
        <input
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="w-full pl-9 pr-4 py-2 rounded-lg border border-foreground/20 bg-background text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:border-cyan-400 transition-colors"
        />
      </div>
    </div>
  );
};

export default PostsFilter;
