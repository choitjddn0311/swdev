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
    <div>
        <main className="w-full flex items-center flex-col bg-background text-foreground">
          <div className="w-300 flex flex-col justify-center items-center h-210 gap-50">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl text-center">안녕하세요. <span className="bg-cyan-300">무궁무진한 개발자</span>를 꿈꾸는 <span className="text-cyan-500">최성우</span>입니다! </h1>
                <h2 className="text-2xl text-center">hello. thank you for comming! i'm <span className="text-cyan-500">sungwoo Choi</span> && <span className="bg-cyan-300">dreaming fullstack developer</span></h2>
              </div>
              <div className="border-2 border-cyan-400 w-15 h-15 flex justify-center items-center rounded-[50%] animate-bounce text-xl hover:cursor-pointer">
                <FaLongArrowAltDown className="text-maincolor"/>
              </div>
          </div>
          <div className="w-300 h-200 flex flex-col justify-start gap-20">
              <h1 className="text-4xl">아래는 제가 다룰 수 있는 <span className="bg-cyan-300">기술들</span>이에요.</h1>
              <div className="flex w-full flex-wrap justify-between items-center h-130">
                {/* 구조를 수정하려면 components -> common -> stackCard.tsx */}
                {/* 스텍을 추가하려면 상단에 ~~Stack 변수에 추가하면 된다 */}
                <StackCard title="frontend" items={FrontStack}/>
                <StackCard title="backend" items={BackStack}/>
                <StackCard title="database" items={DbStack}/>
                <StackCard title="server" items={ServerStack}/>
              </div>
          </div>
          <div className="w-300 h-160 flex">
            <div className="w-100 h-150 flex flex-col justify-start items-center gap-10 pt-20">
              <div className="profile w-60 h-60 rounded-[50%]">
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
            <div className="w-200 h-150 p-20 flex flex-col justify-start gap-10">
                <h1 className="text-2xl">빠르진않지만 꾸준히, 열심히 배우고 있습니다.</h1>
                <ul className="aboutme flex flex-col justify-start gap-2">
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