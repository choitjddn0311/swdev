import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);
  const fontData = readFileSync(join(process.cwd(), "src/fonts/Griun.ttf"));

  const titleSize = meta.title.length > 30 ? "46px" : "56px";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          padding: "70px 90px",
          fontFamily: "Griun",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "6px",
            backgroundColor: "#22d3ee",
            marginBottom: "32px",
            borderRadius: "3px",
          }}
        />

        {meta.tags.length > 0 && (
          <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
            {meta.tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: "rgba(34, 211, 238, 0.15)",
                  color: "#22d3ee",
                  padding: "6px 18px",
                  borderRadius: "9999px",
                  fontSize: "22px",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            fontSize: titleSize,
            fontWeight: "bold",
            color: "#111111",
            lineHeight: "1.3",
            flex: "1",
          }}
        >
          {meta.title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "22px", color: "#aaaaaa" }}>{meta.date}</span>
          <span style={{ fontSize: "24px", color: "#22d3ee", fontWeight: "bold" }}>
            sungwoo dev blog
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Griun", data: fontData, style: "normal" }],
    }
  );
}
