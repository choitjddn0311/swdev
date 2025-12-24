import Link from "next/link";

const Contacts = () => {
    return (
        <main className="w-full flex items-center flex-col bg-background text-foreground">
            <div className="w-300 h-185 bg-background text-foreground pt-5">
                <div className="w-full h-20 flex flex-col justify-center">
                    <h1 className="text-2xl">언제든 편하게 연락주세요.</h1>
                    <h2 className="text-xl">웹과 인공지능을 전공으로 하고있습니다.</h2>
                </div>
                 <div className="w-full flex flex-col items-start justify-start">
                    <ul>
                    </ul>
                 </div>
            </div>
        </main>
    )
}
export default Contacts;