import Button from "@/components/common/button";
import { FaGithub, FaInstagram, FaLongArrowAltDown,FaHtml5,FaCss3Alt,FaJs,FaReact,FaPhp,FaNodeJs,FaJava,FaLinux,FaUbuntu,FaDocker } from "react-icons/fa";
import { SiVelog,SiOracle,SiMysql } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import StackCard from "@/components/common/stackCard";

const Home = () => {
  // stack을 정의할때 구조는 다음과 같다: 스텍명(language name) , icon() from react-icons, iconColor()
  const FrontStack = [
    {stack: "html", icon: <FaHtml5/> , iconColor: "text-orange-500"},
    {stack: "css" , icon: <FaCss3Alt/> , iconColor: "text-sky-500"},
    {stack: "js" , icon: <FaJs/> , iconColor: "text-amber-400"},
    {stack: "react" , icon: <FaReact/> , iconColor: "text-blue-400"}
  ]
  const BackStack = [
    {stack: "php", icon: <FaPhp/> , iconColor: "text-foreground"},
    {stack: "nodejs" , icon: <FaNodeJs/> , iconColor: "text-green-600"},
    {stack: "jsp" , icon: <FaJava/> , iconColor: "text-red-500"}
  ]
  const DbStack = [
    {stack: "oracle" , icon: <SiOracle/> , iconColor: "text-red-600"},
    {stack: "jsp" , icon: <SiMysql/> , iconColor: "text-cyan-700"}
  ]
  const ServerStack = [
    {stack: "linux", icon: <FaLinux/> , iconColor: "text-foreground"},
    {stack: "ubuntu" , icon: <FaUbuntu/> , iconColor: "text-orange-500"},
    {stack: "docker" , icon: <FaDocker/> , iconColor: "text-blue-600"}
  ]
  // 입상 기록을 정의할때 구조는 다음과 같다: 대회진행 년도(contest Year), 대회명(contestName), 수상명(award)
  const AwardRecord = [
    {year: "2024", contestName: "인천지방기능경기대회 웹 디자인 및 개발" , award: "동메달"},
    {year: "2025", contestName: "인천지방기능경기대회 웹 디자인 및 개발" , award: "은메달"},
    {year: "2025", contestName: "광주전국기능경기대회 웹 디자인 및 개발" , award: "장려상(14위)"},
    {year: "2025", contestName: "progate hackathon" , award: "2등"}
  ]
  // 자격증을 정의할때 구조는 다음과 같다: 취득 상세일자(license get detail Date), 자격증명(license name) 만약 자격증의 이름이 바뀌었다면 현재 바뀐 이름이 먼저 나오고 뒤에 (구 ~~)라고 붙인다.
  const license = [
    {getDate: "2025.01.06" , licenseName: "프로그래밍기능사(구 정보처리기능사)"},
    {getDate: "2025.06.05" , licenseName: "웹디자인개발기능사"},
    {getDate: "2025.03.19" , licenseName: "정보처리산업기사(과정평가형)"}
  ]
  return (
    <div className="w-full">
        <main className="w-full flex items-center flex-col bg-background text-foreground">
          <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300  flex flex-col justify-center items-center h-160 2xl:h-210 xl:h-210 lg:h-210 md:h-210 sm:h-210 gap-50">
              <div className="flex flex-col gap-2 px-5">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-center">안녕하세요. <span className="bg-cyan-300">무궁무진한 개발자</span>를 꿈꾸는 <span className="text-cyan-500">최성우</span>입니다! </h1>
                <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl  text-center">hello. thank you for comming! i'm <span className="text-cyan-500">sungwoo Choi</span> && <span className="bg-cyan-300">dreaming fullstack developer</span></h2>
              </div>
              <div className="border-2 border-cyan-400 w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-15 lg:h-15 xl:w-15 xl:h-15 2xl:w-15 2xl:h-15 flex justify-center items-center rounded-[50%] animate-bounce text-xl hover:cursor-pointer">
                <FaLongArrowAltDown className="text-maincolor"/>
              </div>
          </div>
          <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-30 h-150 2xl:h-210 xl:h-210 lg:h-210 md:h-210 sm:h-210 flex flex-col justify-start gap-0 2xl:gap-20 xl:gap-20">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl pl-5 sm:block md:block lg:block xl:block 2xl:block w-full ">아래는 제가 다룰 수 있는 <span className="bg-cyan-300">기술들</span>이에요.</h1>
              {/* flex-wrap justify-between items-center flex */}
              <div className="w-full h-130 2xl:h-130 xl:h-130 flex flex-col justify-center items-center gap-5 2xl:flex-wrap 2xl:justify-between 2xl:items-center 2xl: flex xl:flex-wrap xl:justify-between xl:items-center xl: flex px-5 2xl:p-0 xl:p-0 lg:p-0 md:p-0 sm:p-0">
                {/* 구조를 수정하려면 components -> common -> stackCard.tsx */}
                {/* 스텍을 추가하려면 상단에 ~~Stack 변수에 추가하면 된다 */}
                <StackCard title="frontend" items={FrontStack}/>
                <StackCard title="backend" items={BackStack}/>
                <StackCard title="database" items={DbStack}/>
                <StackCard title="server" items={ServerStack}/>
              </div>
          </div>
          <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-30 h-250 2xl:h-160 xl:h-160 flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row">
            {/* gap 10 pt-20 */}
            <div className="w-full 2xl:w-100 xl:w-100 h-130 2xl:h-full xl:h-full flex flex-col justify-center items-center gap-5 2xl:gap-10 xl:gap-10 py-10 2xl:py-15 xl:py-15">
              <div className="profile w-50 h-50 2xl:w-60 2xl:h-60 xl:w-60 xl:h-60 rounded-[50%]">
                <Image
                  src="/img/profile2.jpg"
                  alt="profile"
                  width={240}
                  height={240}
                  className="rounded-full"
                />
              </div>
              <div className="name">
                <h2 className="text-xl">최성우 <span className="font-bold">|</span> Sungwoo choi</h2>
              </div>
              <div className="interesting">
                <p><span>분야</span>: Web, AI</p>
              </div>
              <div>
                <p><span>연락처</span></p>
                <ul>
                  <li className="flex items-center gap-1"><MdOutlineEmail/>:<Link href="mailto:choitjddn0311@naver.com">choitjddn0311@naver.com</Link></li>
                  <li className="flex items-center gap-1"><FaInstagram/>:<Link href="https://www.instagram.com/choitjddn31">choitjddn31</Link></li>
                  <li className="flex items-center gap-1"><FaGithub/>:<Link href="https://www.github.com/choitjddn0311">choitjddn0311</Link></li>
                </ul>
              </div>
            </div>
            {/* w-200 h-150*/}
            <div className="w-full h-120 py-10 px-5 2xl:w-200 xl:w-200 2xl:h-150 xl:h-150 2xl:p-20 xl:p-20 flex flex-col justify-start gap-10">
                <h1 className="text-xl 2xl:text-2xl xl:text-2xl">빠르진않지만 꾸준히, 열심히 배우고 있습니다.</h1>
                <ul className="aboutme flex flex-col justify-start gap-2 text-sm 2xl:text-base xl:text-base">
                  <li><span className="font-bold">소속:</span> <span className="bg-maincolor">국민대학교</span> 인공지능학부 26학번 | <Link href="https://inpyung.icehs.kr/main.do" className="underline decoration-1">인평자동차고등학교</Link> <span className="bg-maincolor">자동차IT과</span>(졸업)</li>
                  <li><span className="font-bold">경력:</span> 산학일체형도제학교 8기 <span className="bg-maincolor"><Link href="https://www.slexn.com/" className="underline decoration-1">(유)슬렉슨</Link></span> 근무 | 2024.08.01 ~ 2026.01.30</li>
                  <li><span className="font-bold">수상실적:</span> 
                    <ul>
                      {AwardRecord.map((items,index) => (
                        <li key={index}>{items.year} {items.contestName} <span className="bg-maincolor">{items.award}</span></li>
                      ))}
                    </ul>
                  </li>
                  <li><span className="font-bold">자격증:</span> 
                    <ul>
                      {license.map((items,index) => (
                        <li key={index}>{items.getDate} {items.licenseName}</li>
                      ))}
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