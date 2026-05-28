import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { siteConfig } from "@/lib/siteConfig";

export const runtime = "nodejs";
export const alt = "sungwoo dev blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const fontData = readFileSync(join(process.cwd(), "src/fonts/Griun.ttf"));

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
            marginBottom: "48px",
            borderRadius: "3px",
          }}
        />

        <div
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "#22d3ee",
            letterSpacing: "-2px",
            lineHeight: "1",
          }}
        >
          sungwoo dev blog
        </div>

        <div
          style={{
            fontSize: "30px",
            color: "#555555",
            marginTop: "24px",
            flex: "1",
          }}
        >
          개발자를 꿈꾸는 최성우의 포트폴리오
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span style={{ fontSize: "22px", color: "#aaaaaa" }}>
            {new URL(siteConfig.url).host}
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
