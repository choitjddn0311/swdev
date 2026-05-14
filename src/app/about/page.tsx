import Image from "next/image";
import IntroCard from "@/components/common/introCard"
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
                        <h1 className="w-full text-3xl text-start content-center">Make <span className="text-cyan-500">life</span> what i <span className="text-cyan-500">dream!</span></h1>
                        <p className="w-full">꿈꾸는 삶과 세상을 만들어나가고싶습니다!</p>
                    </div>
                    <div className="h-20 w-full flex items-center">
                        <h1 className="text-4xl">최성우</h1>
                    </div>
                    <div className="w-full h-20 flex items-center">
                        <ul className="flex gap-5 overflow-y-scroll">
                            {hashTag.map((items,index) => (
                                <li
                                      className={`underline ${index % 2 === 0 ? "text-cyan-500" : ""}`}
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