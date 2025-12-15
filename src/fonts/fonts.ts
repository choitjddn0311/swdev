// localFont를 사용해 직접 적용
import localFont from 'next/font/local';

export const Griun = localFont({
    src: [
        {
            path: "./Griun.ttf",
            weight: "400",
        }
    ],
    variable: "--font-griun"
});

