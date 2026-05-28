import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "sungwoo dev blog",
    short_name: "SW Blog",
    description: "개발자를 꿈꾸는 최성우의 포트폴리오 블로그",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#22d3ee",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
