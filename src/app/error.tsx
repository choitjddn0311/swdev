"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="w-full flex justify-center bg-background text-foreground">
      <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 px-5 xl:px-0 min-h-165 flex flex-col justify-center items-center gap-6">
        <p className="text-8xl font-bold text-cyan-400">500</p>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">오류가 발생했어요.</h1>
          <p className="text-foreground/50 text-sm">일시적인 문제입니다. 잠시 후 다시 시도해주세요.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={reset}
            className="px-5 py-2 rounded-lg bg-cyan-400 text-white text-sm hover:bg-cyan-500 transition-colors"
          >
            다시 시도
          </button>
          <Link
            href="/"
            className="px-5 py-2 rounded-lg border border-foreground/20 text-foreground/60 text-sm hover:border-cyan-400 hover:text-cyan-500 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
