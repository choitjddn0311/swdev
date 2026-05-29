export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-foreground/10" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-maincolor animate-spin" />
      </div>
      <span className="text-sm text-foreground/40 tracking-widest animate-pulse">loading</span>
    </div>
  );
}
