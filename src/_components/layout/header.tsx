import Link from "next/link";
import ThemeToggle from "../common/themeToggle";

const Header = () => {
    return (
        <header className="w-full h-25 flex justify-center bg-[#fafafa] text-foreground sticky top-0 z-10">
            <div className="w-300 flex justify-between items-center ">
                <Link href="/" className="w-50 h-full content-center font-bold text-4xl text-cyan-400">
                {/* className="text-s hidden group-hover:inline" sub className */}
                    <h1 className="group">S<sub className="text-s">ung</sub>W<sub className="text-s">oo</sub> dev</h1>
                </Link>
                <div className="w-250 flex justify-end gap-10">
                    <nav className="w-200 h-full flex justify-end">
                        <ul className="w-full h-full flex justify-end gap-10 items-center">
                            <li className="font-semibold"><Link href="/">home</Link></li>
                            <li className="font-semibold"><Link href="posts">posts</Link></li>
                            <li className="font-semibold"><Link href="/about">about me</Link></li>
                            <li className="font-semibold"><Link href="/contacts">contact</Link></li>
                        </ul>
                    </nav>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    )
}

export default Header;