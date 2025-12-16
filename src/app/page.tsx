import Button from "@/_components/common/button";
import { FaGithub, FaInstagram, FaLongArrowAltDown  } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import Link from "next/link";
import { PiHandWaving } from "react-icons/pi";

const Home = () => {
  return (
    <div>
        <main className="w-full flex items-center flex-col">
          <div className="w-300 flex flex-col justify-center items-center h-200 gap-30">
              <div>
                <h1 className="text-4xl text-center flex justify-center">안녕하세요. <span className="bg-cyan-300">무궁무진한 개발자</span>를 꿈꾸는 <span className="text-cyan-500">최성우</span>입니다!<PiHandWaving/> </h1>
                <h2 className="text-2xl text-center">hello. thank you for comming! i'm <span className="text-cyan-500">sungwoo Choi</span> && <span className="bg-cyan-300">dreaming fullstack developer</span></h2>
              </div>
              <div className="border-2 border-cyan-400 w-15 h-15 flex justify-center items-center rounded-[50%] animate-bounce text-xl hover:cursor-pointer">
                <FaLongArrowAltDown/>
              </div>
          </div>
          <div className="w-300 h-200">

          </div>
        </main>
        {/* mdx, https://nextjs.org/docs/app/getting-started/project-structure , https://velog.io/@hg024246/Next.js-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0%EC%99%80-%ED%99%9C%EC%9A%A9-%EC%A0%84%EB%9E%B5 */}
    </div>
  );
}

export default Home;