import Button from "@/components/common/button";
import { FaGithub, FaInstagram, FaLongArrowAltDown,FaHtml5,FaCss3Alt,FaJs,FaReact,FaPhp,FaNodeJs,FaJava,FaLinux,FaUbuntu,FaDocker } from "react-icons/fa";
import { SiVelog,SiOracle,SiMysql } from "react-icons/si";
import Link from "next/link";
import { PiHandWaving } from "react-icons/pi";

const Home = () => {
  return (
    <div>
        <main className="w-full flex items-center flex-col bg-background text-foreground">
          <div className="w-300 flex flex-col justify-center items-center h-210 gap-30">
              <div>
                <h1 className="text-4xl text-center flex justify-center">안녕하세요. <span className="bg-cyan-300">무궁무진한 개발자</span>를 꿈꾸는 <span className="text-cyan-500">최성우</span>입니다!<PiHandWaving/> </h1>
                <h2 className="text-2xl text-center">hello. thank you for comming! i'm <span className="text-cyan-500">sungwoo Choi</span> && <span className="bg-cyan-300">dreaming fullstack developer</span></h2>
              </div>
              <div className="border-2 border-cyan-400 w-15 h-15 flex justify-center items-center rounded-[50%] animate-bounce text-xl hover:cursor-pointer">
                <FaLongArrowAltDown className="text-maincolor"/>
              </div>
          </div>
          <div className="w-300 h-200 flex flex-col justify-start gap-20">
              <h1 className="text-4xl">제가 다룰 수 있는 <span className="bg-cyan-300">기술들</span>이에요.</h1>
              <div className="flex w-full flex-wrap justify-between items-center h-130">
                  <ul className="w-130 h-50 p-3 border-2 border-maincolor rounded-lg flex flex-col justify-start gap-3 bg-background">
                    <h1 className="text-xl ">frontend</h1>
                    <div className="flex justify-between items-center">
                      <li className="w-30 text-center text-foreground">html</li>
                      <li className="w-30 text-center text-foreground">css</li>
                      <li className="w-30 text-center text-foreground">js</li>
                      <li className="w-30 text-center text-foreground">react</li>
                    </div>
                    <div className="flex justify-between items-center">
                      <li className="w-30 h-25 flex justify-center items-center text-2xl text-orange-500"><FaHtml5/></li>
                      <li className="w-30 h-25 flex justify-center items-center text-2xl text-sky-500"><FaCss3Alt/></li>
                      <li className="w-30 h-25 flex justify-center items-center text-2xl text-amber-400"><FaJs/></li>
                      <li className="w-30 h-25 flex justify-center items-center text-2xl text-blue-400"><FaReact/></li>
                    </div>
                  </ul>

                  <ul className="w-130 h-50 p-3 border-2 border-maincolor rounded-lg flex flex-col justify-start gap-3">
                    <h1 className="text-xl ">backend</h1>
                    <div className="flex justify-between items-center">
                      <li className="w-30 text-center text-foreground">php</li>
                      <li className="w-30 text-center text-foreground">node.js</li>
                      <li className="w-30 text-center text-foreground">jsp</li>
                      <li className="w-30 text-center text-foreground"></li>
                    </div>
                    <div className="flex justify-between items-center">
                      <li className="w-30 h-25 flex justify-center items-center text-2xl text-foreground"><FaPhp/></li>
                      <li className="w-30 h-25 flex justify-center items-center text-2xl text-green-600"><FaNodeJs/></li>
                      <li className="w-30 h-25 flex justify-center items-center text-2xl text-red-500"><FaJava/></li>
                      <li className="w-30 h-25 flex justify-center items-center"></li>
                    </div>
                  </ul>

                  <ul className="w-130 h-50 p-3 border-2 border-maincolor rounded-lg flex flex-col justify-start gap-3">
                    <h1 className="text-xl ">database</h1>
                    <div className="flex justify-between items-center">
                      <li className="w-30 text-center text-foreground">oracle</li>
                      <li className="w-30 text-center text-foreground">mysql</li>
                      <li className="w-30 text-center text-foreground"></li>
                      <li className="w-30 text-center text-foreground"></li>
                    </div>
                    <div className="flex justify-between items-center">
                      <li className="w-30 h-25 flex justify-center items-center text-2xl text-red-600"><SiOracle/></li>
                      <li className="w-30 h-25 flex justify-center items-center text-2xl text-cyan-700"><SiMysql/></li>
                      <li className="w-30 h-25 flex justify-center items-center"></li>
                      <li className="w-30 h-25 flex justify-center items-center"></li>
                    </div>
                  </ul>

                  <ul className="w-130 h-50 p-3 border-2 border-maincolor rounded-lg flex flex-col justify-start gap-3">
                    <h1 className="text-xl ">server</h1>
                    <div className="flex justify-between items-center">
                      <li className="w-30 text-center text-foreground">linux</li>
                      <li className="w-30 text-center text-foreground">ubuntu</li>
                      <li className="w-30 text-center text-foreground">docker</li>
                      <li className="w-30 text-center text-foreground"></li>
                    </div>
                    <div className="flex justify-between items-center">
                      <li className="w-30 h-25 flex justify-center items-center text-2xl text-foreground"><FaLinux/></li>
                      <li className="w-30 h-25 flex justify-center items-center text-2xl text-orange-500"><FaUbuntu/></li>
                      <li className="w-30 h-25 flex justify-center items-center text-2xl text-blue-600"><FaDocker/></li>
                      <li className="w-30 h-25 flex justify-center items-center"></li>
                    </div>
                  </ul>
              </div>
          </div>
          <div className="w-300 h-160 flex">
            <div className="w-100 h-150bg-gray-100 flex flex-col justify-start items-center gap-10 pt-20">
              <div className="profile w-60 h-60 rounded-[50%] bg-blue-100"></div>
              <div className="name">
                <h2 className="text-xl">최성우 | Sungwoo choi</h2>
              </div>
              <div className="interesting">
                <p><span>분야</span>: Web, AI</p>
              </div>
            </div>
            <div className="w-200 h-150 p-20 flex flex-col justify-start gap-10">
                <h1 className="text-2xl">빠르진않지만 꾸준히, 열심히 배우고 있습니다.</h1>
                <ul className="aboutme flex flex-col justify-start gap-2">
                  <li><span className="font-bold">소속:</span> 인평자동차고등학교 자동차IT과(재학) | <span className="bg-maincolor">국민대학교</span> 인공지능학부 26학번 (입학예정)</li>
                  <li><span className="font-bold">경력:</span> 산학일체형도제학교 8기 <span className="bg-maincolor"><Link href="https://www.slexn.com/" className="underline decoration-1">(유)슬렉슨</Link></span> 근무 | 2024.08.01 ~ 2026.01.30</li>
                  <li><span className="font-bold">수상실적:</span> 
                    <ul>
                      <li>2024 인천지방기능경기대회 웹 디자인 및 개발 <span className="bg-maincolor">동메달</span></li>
                      <li>2025 인천지방기능경기대회 웹 디자인 및 개발 <span className="bg-maincolor">은메달</span></li>
                      <li>2025 광주전국기능경기대회 웹 디자인 및 개발 <span className="bg-maincolor">장려상(14위)</span></li>
                      <li>2025 progate hackathon <span className="">2등</span></li>
                    </ul>
                  </li>
                  <li><span className="font-bold">자격증:</span> 
                    <ul>
                      <li>정보처리기능사</li>
                      <li>웹디자인개발기능사</li>
                      <li>정보처리산업기사(과정평가형)</li>
                    </ul>
                  </li>
                </ul>
            </div>
          </div>
        </main>
        {/* mdx, https://nextjs.org/docs/app/getting-started/project-structure , https://velog.io/@hg024246/Next.js-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0%EC%99%80-%ED%99%9C%EC%9A%A9-%EC%A0%84%EB%9E%B5 */}
    </div>
  );
}

export default Home;