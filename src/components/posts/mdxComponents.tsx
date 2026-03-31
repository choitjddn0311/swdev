import type { MDXComponents } from "mdx/types";
import { slugify } from "@/lib/toc"; // ← 추가

// 더 안전한 버전
function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node) {
    const props = (node as { props: { children?: React.ReactNode } }).props;
    return extractText(props.children);
  }
  return "";
}
function HeadingId(children: React.ReactNode): string {
  return slugify(extractText(children));
}

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1
      id={HeadingId(children)}
      className="text-3xl font-bold mt-10 mb-4 text-foreground"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      id={HeadingId(children)}
      className="text-2xl font-bold mt-8 mb-3 text-foreground"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      id={HeadingId(children)}
      className="text-xl font-semibold mt-6 mb-2 text-foreground"
      {...props}
    >
      {children}
    </h3>
  ),

  // 나머지는 그대로 유지
  p: (props) => <p className="my-4 leading-7 text-foreground" {...props} />,
  a: (props) => <a className="text-cyan-500 underline hover:text-cyan-400" {...props} />,
  ul: (props) => <ul className="list-disc list-inside my-4 space-y-1" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside my-4 space-y-1" {...props} />,
  li: (props) => <li className="leading-7" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-cyan-400 pl-4 my-4 italic text-foreground/70" {...props} />
  ),
  code: (props) => (
    <code className="bg-foreground/10 rounded px-1.5 py-0.5 text-sm font-mono" {...props} />
  ),
  pre: (props) => (
    <pre className="rounded-lg overflow-x-auto my-6 p-4 text-sm [&>code]:bg-transparent [&>code]:p-0" {...props} />
  ),
  hr: () => <hr className="my-8 border-foreground/20" />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-lg my-6 max-w-full" alt={props.alt ?? ""} {...props} />
  ),
};