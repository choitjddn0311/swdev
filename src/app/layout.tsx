import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Griun } from "@/fonts/fonts"
import Theme from "@/_provider/themeProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "sungwoo dev blog",
    template: "sungwoo dev blog | %s",
  },
  description: "개발자를 꿈꾸는 최성우의 포트폴리오입니다. Web, AI 분야에 관심이 있습니다.",
  keywords: ["최성우", "포트폴리오", "풀스택", "AI", "프론트엔드", "백엔드","웹개발","컴퓨터비전"],
  authors: [{ name: "최성우" }],
  creator: "최성우",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="ko" suppressHydrationWarning>
        <body className={Griun.className}>
          <Theme>
            <Header />
            <main>{children}</main>
            <Footer />
          </Theme>
        </body>
      </html>
  )
}