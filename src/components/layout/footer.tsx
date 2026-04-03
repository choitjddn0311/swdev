import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full h-15 2xl:h-25 xl:h-25 lg:h-20 md:h-20 sm:h-15 flex justify-center border-t-1 border-gray-300 bg-background text-foreground">
            <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 h-full flex justify-center items-center 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between ">
                <p className="text-sm">©2026 choitjddn0311. All rights reserved.</p>
                <ul>
                    <li className="hidden 2xl:block xl:block lg:block md:block sm:block text-sm">
                        developer: sungwoo choi(최성우)
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;