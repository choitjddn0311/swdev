import Image from "next/image";
import IntroCard from "@/components/common/introCard"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "개발자 최성우를 소개합니다. Web, AI 분야에 관심이 있으며 사진·영상도 즐기는 개발자입니다.",
  openGraph: {
    title: "About | sungwoo dev blog",
    description: "개발자 최성우를 소개합니다.",
    url: "/about",
  },
};

const About = () => {
    const hashTag = [
        'developer',
        'photographer',
        'videographer',
        'travel the world',
        'do my dream'
    ]
    return(
        <div className="bg-background w-full flex flex-col items-center">
            <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 flex flex-col md:flex-row py-8 px-5 md:px-0 gap-6 md:gap-0">
                <div className="relative w-32 h-32 md:w-50 md:h-50 xl:w-80 xl:h-80 shrink-0 mx-auto md:mx-0">
                    <Image
                      src="/img/about_profile.jpg"
                      alt="profile"
                      fill
                      className="rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-4 md:gap-0 md:justify-between md:px-10 xl:px-20 w-full">
                    <div className="w-full flex flex-col justify-center gap-2">
                        <h1 className="w-full text-2xl md:text-3xl text-start">Make <span className="text-cyan-500">life</span> what i <span className="text-cyan-500">dream!</span></h1>
                        <p className="w-full text-sm md:text-base">꿈꾸는 삶과 세상을 만들어나가고싶습니다!</p>
                    </div>
                    <div className="w-full flex items-center">
                        <h1 className="text-3xl md:text-4xl">최성우</h1>
                    </div>
                    <div className="w-full flex items-center">
                        <ul className="flex gap-3 md:gap-5 overflow-x-auto">
                            {hashTag.map((items,index) => (
                                <li
                                      className={`underline whitespace-nowrap text-sm md:text-base ${index % 2 === 0 ? "text-cyan-500" : ""}`}
                                      key={index}
                                    >
                                      #{items}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <IntroCard 
                title="저는 이런걸 좋아해요!" 
                description={<>웹 개발을 주로 했기때문에, 프론트와 백을 다루는 것을 좋아합니다. 
                <br /> 또 잘 다루는건 아니지만 ai분야중 cv에 특히 관심히 있어요.</>} 
            />

            <IntroCard
                title="개발외에도 이런걸 좋아해요!"
                description={<>세상을 작은 프레임안에 담는 사진과 영상을 찍는걸 좋아합니다. 
                <br /> 단순히 취미수준이 아닌, 사진을 찍고, 색보정하고, 영상편집까지 할 정도로 사진과 영상에 엄청난 흥미를 가지고있습니다</>}
            />
        </div>
    )
}
export default About;