"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") ?? "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      if (value.trim()) params.set("q", value.trim());
      const query = params.toString();
      router.replace(query ? `/posts?${query}` : "/posts");
    }, 300);
    return () => clearTimeout(timer);
  }, [value, router]);

  return (
    <div className="relative w-full sm:w-80">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 text-sm" />
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="제목, 내용, 태그 검색..."
        className="w-full pl-9 pr-4 py-2 rounded-lg border border-foreground/20 bg-background text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:border-cyan-400 transition-colors"
      />
    </div>
  );
};

export default SearchInput;
