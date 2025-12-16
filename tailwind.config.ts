import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/_components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
              background: "var(--background)",
              foreground: "var(--foreground)",
              maincolor: "var(--maincolor)",
            }
        },
    },
    plugins: [],
};


export default config;