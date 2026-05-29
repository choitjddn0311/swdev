import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center bg-background text-foreground">
      <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 px-5 xl:px-0 min-h-165 flex flex-col justify-center items-center gap-6">
        <p className="text-8xl font-bold text-cyan-400">404</p>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">페이지를 찾을 수 없어요.</h1>
          <p className="text-foreground/50 text-sm">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        </div>
        <Link
          href="/"
          className="px-5 py-2 rounded-lg border border-cyan-400 text-cyan-500 text-sm hover:bg-cyan-400 hover:text-white transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
