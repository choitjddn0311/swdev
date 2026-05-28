"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface DraggableWidgetProps {
  posts: PostMeta[];
}

const WIDGET_WIDTH = 288;

const DraggableWidget = ({ posts }: DraggableWidgetProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const isDraggingRef = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({
      x: window.innerWidth - WIDGET_WIDTH - 24,
      y: window.innerHeight - 380,
    });
    setInitialized(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const newX = Math.max(0, Math.min(window.innerWidth - WIDGET_WIDTH, e.clientX - dragOffset.current.x));
      const newY = Math.max(0, Math.min(window.innerHeight - 48, e.clientY - dragOffset.current.y));
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const touch = e.touches[0];
      const newX = Math.max(0, Math.min(window.innerWidth - WIDGET_WIDTH, touch.clientX - dragOffset.current.x));
      const newY = Math.max(0, Math.min(window.innerHeight - 48, touch.clientY - dragOffset.current.y));
      setPosition({ x: newX, y: newY });
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const startDrag = (clientX: number, clientY: number) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    dragOffset.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  if (!initialized || isClosed) return null;

  return (
    <div
      className="fixed z-50 shadow-2xl rounded-xl overflow-hidden border border-foreground/10 bg-background text-foreground"
      style={{
        left: position.x,
        top: position.y,
        width: WIDGET_WIDTH,
        userSelect: "none",
        opacity: initialized ? 1 : 0,
      }}
    >
      {/* 드래그 핸들 (헤더) */}
      <div
        className={`flex items-center justify-between px-4 py-3 bg-foreground text-background ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={(e) => {
          e.preventDefault();
          startDrag(e.clientX, e.clientY);
        }}
        onTouchStart={(e) => {
          const touch = e.touches[0];
          startDrag(touch.clientX, touch.clientY);
        }}
      >
        <span className="text-sm font-semibold select-none">최신 글</span>
        <div className="flex items-center gap-2">
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setIsMinimized((v) => !v)}
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-white/20 transition-colors text-xs"
            aria-label={isMinimized ? "펼치기" : "최소화"}
          >
            {isMinimized ? "+" : "─"}
          </button>
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setIsClosed(true)}
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-white/20 transition-colors text-xs"
            aria-label="닫기"
          >
            ×
          </button>
        </div>
      </div>

      {/* 본문 */}
      {!isMinimized && (
        <>
          <ul className="flex flex-col divide-y divide-foreground/5">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/posts/${post.slug}`}
                  className="flex items-start justify-between gap-2 px-4 py-3  transition-colors group"
                >
                  <span className="text-sm line-clamp-1 group-hover:text-cyan-500 transition-colors flex-1">
                    {post.title}
                  </span>
                  <time className="text-xs text-foreground/40 shrink-0 mt-0.5">
                    {post.date.slice(0, 7)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 py-3 border-t border-foreground/10">
            <Link
              href="/posts"
              className="text-xs text-foreground/50 hover:text-cyan-500 transition-colors flex justify-end"
            >
              전체 글 보기 →
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default DraggableWidget;
