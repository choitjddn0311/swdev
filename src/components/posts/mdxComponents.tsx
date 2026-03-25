import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="text-3xl font-bold mt-10 mb-4 text-foreground" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-bold mt-8 mb-3 text-foreground" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground" {...props} />
  ),
  p: (props) => (
    <p className="my-4 leading-7 text-foreground" {...props} />
  ),
  a: (props) => (
    <a className="text-cyan-500 underline hover:text-cyan-400" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside my-4 space-y-1" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside my-4 space-y-1" {...props} />
  ),
  li: (props) => (
    <li className="leading-7" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-cyan-400 pl-4 my-4 italic text-foreground/70"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-foreground/10 rounded px-1.5 py-0.5 text-sm font-mono"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="rounded-lg overflow-x-auto my-6 p-4 text-sm [&>code]:bg-transparent [&>code]:p-0"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-foreground/20" />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-lg my-6 max-w-full" alt={props.alt ?? ""} {...props} />
  ),
};
