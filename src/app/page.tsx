import Button from "@/components/common/button";
import RecentPostsWidget from "@/components/home/RecentPostsWidget";
import HeroSpotlight from "@/components/home/HeroSpotlight";
import { getTranslations, getLocale } from "next-intl/server";
import { FaGithub, FaInstagram, FaLongArrowAltDown,FaHtml5,FaCss3Alt,FaJs,FaReact,FaPhp,FaNodeJs,FaJava,FaLinux,FaUbuntu,FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import StackCard from "@/components/common/stackCard";
import { GrOracle } from "react-icons/gr";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: { absolute: siteConfig.name },
  description: "개발자를 꿈꾸는 최성우의 포트폴리오 홈페이지입니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: "개발자를 꿈꾸는 최성우의 포트폴리오 홈페이지입니다.",
    url: siteConfig.url,
  },
};

const Home = async () => {
  const t = await getTranslations("home");
  const locale = await getLocale();
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
    {stack: "oracle" , icon: <GrOracle /> , iconColor: "text-red-600"},
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
          <div className="relative w-full h-160 2xl:h-210 xl:h-210 lg:h-210 md:h-210 sm:h-210 flex justify-center">
              <HeroSpotlight />
              <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 flex flex-col justify-center items-center gap-50">
                <div className="flex flex-col gap-2 px-5">
                  {locale === "ko" ? (
                    <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-center">
                      {t("greeting")} <span className="bg-cyan-300">{t("greetingHighlight")}</span>를 꿈꾸는 <span className="text-cyan-500">{t("greetingName")}</span>{t("greetingEnd")}
                    </h1>
                  ) : (
                    <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-center">
                      {t("greeting")} <span className="text-cyan-500">{t("greetingName")}</span>{t("greetingEnd")}
                    </h1>
                  )}
                  <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-center">
                    {t("greetingSub")} <span className="text-cyan-500">{t("greetingSubName")}</span> && <span className="bg-cyan-300">{t("greetingSubEnd")}</span>
                  </h2>
                </div>
                <div className="border-2 border-cyan-400 w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-15 lg:h-15 xl:w-15 xl:h-15 2xl:w-15 2xl:h-15 flex justify-center items-center rounded-[50%] animate-bounce text-xl hover:cursor-pointer">
                  <FaLongArrowAltDown className="text-maincolor"/>
                </div>
              </div>
          </div>
          <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 h-150 2xl:h-210 xl:h-210 lg:h-210 md:h-210 sm:h-210 flex flex-col justify-start gap-0 2xl:gap-20 xl:gap-20 lg:gap-15 md:gap-15 sm:gap-10">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl pl-5 sm:block md:block lg:block xl:block 2xl:block w-full py-10">{t("stackTitle")}</h1>
              {/* flex-wrap justify-between items-center flex */}
              <div className="w-full h-130 2xl:h-130 xl:h-130 grid grid-cols-2 gap-5 px-5 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-0 content-center">
                {/* 구조를 수정하려면 components -> common -> stackCard.tsx */}
                {/* 스텍을 추가하려면 상단에 ~~Stack 변수에 추가하면 된다 */}
                <StackCard title="frontend" items={FrontStack}/>
                <StackCard title="backend" items={BackStack}/>
                <StackCard title="database" items={DbStack}/>
                <StackCard title="server" items={ServerStack}/>
              </div>
          </div>
          <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 flex flex-col md:flex-row gap-10 pt-16 pb-32 px-5 xl:px-0">

            {/* 왼쪽: 프로필 */}
            <div className="flex flex-col items-center md:items-start gap-5 md:w-56 shrink-0">
              <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0">
                <Image
                  src="/img/profile2.jpg"
                  alt="profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg font-bold">{t("profileName")}</h2>
                <p className="text-sm text-foreground/50">{t("profileNameSub")}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full border border-cyan-400/60 text-cyan-500">
                Web · AI
              </span>
              <div className="flex flex-col gap-2 w-full">
                <Link href="mailto:choitjddn0311@naver.com" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-cyan-500 transition-colors">
                  <MdOutlineEmail className="shrink-0" /> choitjddn0311@naver.com
                </Link>
                <Link href="https://www.instagram.com/choitjddn31" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-cyan-500 transition-colors">
                  <FaInstagram className="shrink-0" /> choitjddn31
                </Link>
                <Link href="https://www.github.com/choitjddn0311" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-cyan-500 transition-colors">
                  <FaGithub className="shrink-0" /> choitjddn0311
                </Link>
              </div>
            </div>

            {/* 오른쪽: 소개 */}
            <div className="flex-1 flex flex-col gap-6">
              <p className="text-lg md:text-xl font-medium">{t("introTitle")}</p>

              {/* 소속 / 경력 */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1 p-4 rounded-xl border border-foreground/10">
                  <span className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">{t("affiliation")}</span>
                  <p className="text-sm text-foreground/70 leading-relaxed">{t("affiliationText")}</p>
                </div>
                <div className="flex flex-col gap-1 p-4 rounded-xl border border-foreground/10">
                  <span className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">{t("career")}</span>
                  <p className="text-sm text-foreground/70 leading-relaxed">{t("careerText")}</p>
                </div>
              </div>

              {/* 수상실적 */}
              <div>
                <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-3">{t("awards")}</p>
                <div className="flex flex-wrap gap-2">
                  {AwardRecord.map((items, index) => (
                    <span key={index} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-foreground/10 text-foreground/70">
                      <span className="font-semibold">{items.year}</span>
                      {items.contestName.split(" ").slice(-2).join(" ")}
                      <span className="font-semibold">{items.award}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* 자격증 */}
              <div>
                <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider mb-3">{t("licenses")}</p>
                <div className="flex flex-wrap gap-2">
                  {license.map((items, index) => (
                    <span key={index} className="text-xs px-3 py-1.5 rounded-full border border-foreground/10 text-foreground/70">
                      {items.licenseName}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </main>
        {/* mdx, https://nextjs.org/docs/app/getting-started/project-structure , https://velog.io/@hg024246/Next.js-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0%EC%99%80-%ED%99%9C%EC%9A%A9-%EC%A0%84%EB%9E%B5 */}
      <RecentPostsWidget />
    </div>
  );
}

export default Home;