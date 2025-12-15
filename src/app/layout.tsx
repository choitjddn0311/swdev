import "./globals.css";
import type { Metadata } from "next";
import Header from "@/_components/layout/header";
import Footer from "@/_components/layout/footer";
import { Griun } from "@/fonts/fonts"
import Theme from "@/_provider/themeProvider";

export const metadata: Metadata = {
  title: "SW dev",
  description: "this is sungwoo dev blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme>
      <html lang="ko" className={Griun.className} suppressHydrationWarning>
        <body className="bg-background text-foreground">
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </Theme>
  )
}