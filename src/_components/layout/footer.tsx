import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-background text-foreground w-full h-25 flex justify-center border-t-1 border-gray-300">
            <div className="w-300 h-full flex justify-between items-center">
                <p>©2025 choitjddn0311. All rights reserved.</p>
                <ul>
                    <li>
                        developer: sungwoo choi(최성우)
                    </li>
                    <li>
                        <Link href="mailto:choitjddn0311@naver.com">email: choitjddn0311@naver.com</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;