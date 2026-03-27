import Link from "next/link";
import ThemeToggle from "../common/themeToggle";

const Header = () => {
    const headerMenu = [
        {label: "home" , href: "/"},
        {label: "posts" , href: "/posts"},
        {label: "about me" , href: "/about"}
    ]
    return (
        <header className="w-full h-25 flex justify-center sticky top-0 z-10 bg-background text-foreground dark:bg-foreground">
            <div className="w-300 flex justify-between items-center ">
                <Link href="/" className="w-50 h-full content-center font-bold text-4xl text-cyan-400">
                {/* className="text-s hidden group-hover:inline" sub className */}
                    <h1>S<sub className="text-s">ung</sub>W<sub className="text-s">oo</sub> dev</h1>
                </Link>
                <div className="w-250 flex justify-end gap-10">
                    <nav className="w-200 h-full flex justify-end">
                        <ul className="w-full h-full flex justify-end gap-10 items-center">
                            {headerMenu.map((item,index) => (
                                <li className="font-semibold"><Link href={item.href}>{item.label}</Link></li>
                            ))}
                        </ul>
                    </nav>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    )
}

export default Header;