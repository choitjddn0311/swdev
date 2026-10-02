"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { useTranslations } from "next-intl";
import { useHydrated } from "@/lib/useHydrated";

interface DraggableWidgetProps {
  posts: PostMeta[];
}

const WIDGET_WIDTH = 288;

const DraggableWidget = ({ posts }: DraggableWidgetProps) => {
  const t = useTranslations("widget");
  const hydrated = useHydrated();
  // 사용자가 드래그하기 전까지는 null → 화면 우측 하단 기본 위치를 렌더 시점에 계산
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const isDraggingRef = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let isMounted = true;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !isMounted) return;
      const newX = Math.max(0, Math.min(window.innerWidth - WIDGET_WIDTH, e.clientX - dragOffset.current.x));
      const newY = Math.max(0, Math.min(window.innerHeight - 48, e.clientY - dragOffset.current.y));
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      if (!isMounted) return;
      isDraggingRef.current = false;
      setIsDragging(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !isMounted) return;
      e.preventDefault();
      const touch = e.touches[0];
      const newX = Math.max(0, Math.min(window.innerWidth - WIDGET_WIDTH, touch.clientX - dragOffset.current.x));
      const newY = Math.max(0, Math.min(window.innerHeight - 48, touch.clientY - dragOffset.current.y));
      setPosition({ x: newX, y: newY });
    };

    const handleTouchEnd = () => {
      if (!isMounted) return;
      isDraggingRef.current = false;
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      isMounted = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  if (!hydrated || isClosed) return null;

  const currentPosition = position ?? {
    x: window.innerWidth - WIDGET_WIDTH - 24,
    y: window.innerHeight - 380,
  };

  const startDrag = (clientX: number, clientY: number) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    dragOffset.current = {
      x: clientX - currentPosition.x,
      y: clientY - currentPosition.y,
    };
  };

  return (
    <div
      className="fixed z-50 shadow-2xl rounded-xl overflow-hidden border border-foreground/10 bg-background text-foreground"
      style={{
        left: currentPosition.x,
        top: currentPosition.y,
        width: WIDGET_WIDTH,
        userSelect: "none",
      }}
    >
      {/* 드래그 핸들 (헤더) */}
      <div
        className={`flex items-center justify-between px-4 py-3 bg-cyan-500 text-white ${
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
        <span className="text-sm font-semibold select-none">{t("title")}</span>
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
              {t("viewAll")}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default DraggableWidget;
