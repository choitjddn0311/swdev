"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../common/themeToggle";
import LanguageToggle from "../common/LanguageToggle";
import { useTranslations } from "next-intl";

const Header = ({ locale }: { locale: string }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const t = useTranslations("nav");

    const headerMenu = [
        { label: t("home"), href: "/" },
        { label: t("posts"), href: "/posts" },
        { label: t("projects"), href: "/projects" },
        { label: t("about"), href: "/about" }
    ];

    return (
        <header className="w-full h-20 2xl:h-25 xl:h-25 lg:h-25 md:h-25 sm:h-20 flex justify-center sticky top-0 z-10 bg-background text-foreground">
            <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 flex justify-between items-center px-5 sm:px-0">
                <Link href="/" className="h-full content-center font-bold text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl text-cyan-400">
                    <h1>S<sub className="text-s">ung</sub>W<sub className="text-s">oo</sub> dev</h1>
                </Link>

                <div className="h-full flex items-center gap-3 2xl:gap-6 xl:gap-6 lg:gap-6 md:gap-6 sm:gap-6">
                    {/* 햄버거 버튼: 모바일(0~639px)에서만 표시 */}
                    <button
                        className="sm:hidden flex flex-col justify-center gap-0.75 w-8 h-8"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="메뉴 열기"
                    >
                        <span className={`block h-0.75 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}/>
                        <span className={`block h-0.75 w-5 rounded-full bg-current transition-all duration-150 ${menuOpen ? "opacity-0" : ""}`}/>
                        <span className={`block h-0.75 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}/>
                    </button>

                    {/* 일반 nav: sm(640px) 이상에서만 표시 */}
                    <nav className="hidden sm:flex">
                        <ul className="flex gap-10 items-center">
                            {headerMenu.map((item, index) => (
                                <li key={index} className="font-semibold">
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <LanguageToggle currentLocale={locale} />
                    <ThemeToggle />
                </div>
            </div>

            {/* 모바일 드롭다운 메뉴 */}
            {menuOpen && (
                <nav className="sm:hidden absolute top-20 left-0 w-full bg-background shadow-md">
                    <ul className="flex flex-col items-center gap-6 py-6 bg-background text-foreground">
                        {headerMenu.map((item, index) => (
                            <li key={index} className="font-semibold w-full flex justify-center items-center">
                                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
