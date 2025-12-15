import Button from "@/_components/common/button";
import { FaGithub, FaInstagram  } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import Link from "next/link";

const Home = () => {
  return (
    <div>
        <main className="w-full flex justify-center">
          <div className="w-300 flex flex-col justify-center h-200">
              <div>
                <h1 className="text-4xl text-center">안녕하세요. <span className="bg-cyan-300">무궁무진한 개발자</span>를 꿈꾸는 <span className="text-cyan-500">최성우</span>입니다!</h1>
                <h2 className="text-2xl text-center text-zinc-600">hello. thank you for comming! i'm <span className="text-cyan-500">sungwoo Choi</span> && <span className="bg-cyan-300 text-black">dreaming fullstack developer</span></h2>
              </div>

          </div>
          
        </main>
        {/* mdx, https://nextjs.org/docs/app/getting-started/project-structure , https://velog.io/@hg024246/Next.js-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0%EC%99%80-%ED%99%9C%EC%9A%A9-%EC%A0%84%EB%9E%B5 */}
    </div>
  );
}

export default Home;