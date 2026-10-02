"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { useHydrated } from "@/lib/useHydrated";

const CYCLE: Record<string, string> = { light: 'dark', dark: 'system', system: 'light' };

const ThemeToggle = () => {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const hydrated = useHydrated();

    if (!hydrated) return null;

    const icon =
        theme === 'system' ? <MdComputer /> :
        resolvedTheme === 'dark' ? <FaSun /> :
        <FaMoon />;

    return (
        <button
            onClick={() => setTheme(CYCLE[theme ?? 'system'] ?? 'light')}
            className="cursor-pointer"
            title={theme === 'system' ? '시스템 테마' : theme === 'dark' ? '다크 모드' : '라이트 모드'}
        >
            {icon}
        </button>
    );
}

export default ThemeToggle;