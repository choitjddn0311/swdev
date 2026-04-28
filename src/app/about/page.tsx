import Image from "next/image";
const About = () => {
    const hashTag = [
        'frontend',
        'react',
        'next',
        'javascript',
        'typescript',
        'tailwindcss',
        'backend',
        'php',
        'nodejs',
        'express.js',
        'etc'
    ]
    return(
        <div className="bg-background w-full flex flex-col items-center">
            <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 flex py-5">
                <div className="w-80 h-80">
                    <Image
                      src="/img/about_profile.jpg"
                      alt="profile"
                      width={320}
                      height={320}
                      className="rounded-full"
                    />
                </div>
                <div className="flex flex-col justify-between p-20 py-0 w-220">
                    <div className="h-20 w-full flex flex-col justify-center gap-2">
                        <h1 className="w-full text-3xl text-start content-center">Make life what i dream! </h1>
                        <p className="w-full">꿈꾸는 삶과 세상을 만들어나가고싶습니다!</p>
                    </div>
                    <div className="h-20 w-full flex items-center">
                        <h1 className="text-4xl">최성우 | (원하는 직업 또는 수식어)</h1>
                    </div>
                    <div className="w-full h-20 flex items-center">
                        <ul className="flex gap-5 overflow-y-scroll">
                            {hashTag.map((items,index) => (
                                <li className="underline" key={index}>#{items}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300"></div>
        </div>
    )
}
export default About;