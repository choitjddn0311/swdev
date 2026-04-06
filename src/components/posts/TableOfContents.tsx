"use client";

import { useEffect, useRef, useState } from "react";
import type { TocItem } from "@/lib/toc";

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const tocRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [items]);

  useEffect(() => {
    if (!activeId) return;
    const activeItem = itemRefs.current[activeId];
    const tocContainer = tocRef.current?.parentElement;
    if (!activeItem || !tocContainer) return;

    const containerTop = tocContainer.scrollTop;
    const containerBottom = containerTop + tocContainer.clientHeight;
    const itemTop = activeItem.offsetTop;
    const itemBottom = itemTop + activeItem.clientHeight;

    if (itemTop < containerTop || itemBottom > containerBottom) {
      activeItem.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeId]);

  if (items.length === 0) return null;

  return (
    <aside className="hidden 2xl:block xl:block lg:block md:hidden sm:hidden w-60 shrink-0">
      <div className="fixed top-30 w-60 max-h-[calc(100vh-500px)] overflow-y-auto overflow-x-hidden">
        <ul className="space-y-1" ref={tocRef}>
          {items.map((item) => (
            <li
              key={item.id}
              ref={(el) => { itemRefs.current[item.id] = el; }}
              style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
            >
              <a
                href={`#${item.id}`}
                className={`block text-sm py-0.5 transition-all duration-150 truncate ease-in-out ${
                  activeId === item.id
                    ? "text-cyan-500 scale-101 font-medium"
                    : "text-foreground/50 hover:text-foreground/80 scale-100"
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}