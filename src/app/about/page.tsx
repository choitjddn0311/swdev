import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";
import {
  FaGithub, FaInstagram,
  FaGraduationCap, FaMedal, FaCertificate,
  FaBriefcase, FaLaptopCode, FaSchool,
  FaBullseye, FaRocket, FaDesktop, FaCamera,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const metadata: Metadata = {
  title: "About",
  description: "개발자 최성우를 소개합니다. Web, AI 분야에 관심이 있으며 사진·영상도 즐기는 개발자입니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: siteConfig.name,
    title: `About | ${siteConfig.name}`,
    description: "개발자 최성우를 소개합니다.",
    url: `${siteConfig.url}/about`,
  },
};

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex items-center gap-3 mb-10">
    <div className="w-6 h-0.5 bg-cyan-400 shrink-0" />
    <h2 className="text-xl md:text-2xl font-bold whitespace-nowrap">{title}</h2>
    <div className="h-px flex-1 bg-foreground/10" />
  </div>
);

const About = async () => {
  const t = await getTranslations("about");
  const hashTags = [
    "developer",
    "photographer",
    "videographer",
    "travel the world",
    "do my dream",
  ];

  // ✏️ 연대기 내용을 여기서 수정하세요
  const timeline: { year: string; items: { icon: ReactNode; text: string }[] }[] = [
    {
      year: "2026",
      items: [
        { icon: <FaGraduationCap />, text: t("t2026_1") },
      ],
    },
    {
      year: "2025",
      items: [
        { icon: <FaMedal />, text: t("t2025_1") },
        { icon: <FaMedal />, text: t("t2025_2") },
        { icon: <FaCertificate />, text: t("t2025_3") },
        { icon: <FaMedal />, text: t("t2025_4") },
        { icon: <FaCertificate />, text: t("t2025_5") },
      ],
    },
    {
      year: "2024",
      items: [
        { icon: <FaCertificate />, text: t("t2024_1") },
        { icon: <FaBriefcase />, text: t("t2024_2") },
        { icon: <FaMedal />, text: t("t2024_3") },
      ],
    },
    {
      year: "2023",
      items: [
        { icon: <FaLaptopCode />, text: t("t2023_1") },
        { icon: <FaSchool />, text: t("t2023_2") },
      ],
    },
  ];

  // ✏️ 목표 내용을 여기서 수정하세요
  const goals: { icon: ReactNode; title: string; description: string }[] = [
    {
      icon: <FaBullseye />,
      title: t("goal1Title"),
      description: t("goal1Desc"),
    },
    {
      icon: <FaRocket />,
      title: t("goal2Title"),
      description: t("goal2Desc"),
    },
  ];

  return (
    <div className="bg-background text-foreground w-full flex flex-col items-center">
      <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 px-5 xl:px-0 flex flex-col gap-20 py-20">

        {/* ── Hero ── */}
        <section className="flex flex-col items-center text-center gap-6 py-6">
          <div className="relative w-36 h-36 md:w-48 md:h-48 shrink-0">
            <Image
              src="/img/about_profile.jpg"
              alt="profile"
              fill
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center gap-1">
            <h1 className="text-4xl md:text-5xl font-bold">{t("profileName")}</h1>
            <p className="text-foreground/50 text-base md:text-lg">{t("profileNameSub")}</p>
          </div>

          <p className="text-lg md:text-xl">
            Make{" "}
            <span className="text-cyan-500 font-semibold">life</span>{" "}
            what i{" "}
            <span className="text-cyan-500 font-semibold">dream!</span>
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {hashTags.map((tag, i) => (
              <span
                key={i}
                className={`text-sm px-3 py-1 rounded-full border ${
                  i % 2 === 0
                    ? "border-cyan-400/60 text-cyan-500"
                    : "border-foreground/15 text-foreground/50"
                }`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        {/* ── About Me ── */}
        <section>
          <SectionHeader title={t("aboutMe")} />
          {/* ✏️ 자기소개 내용을 여기서 수정하세요 */}
          <div className="text-foreground/70 leading-relaxed text-base md:text-lg space-y-4 max-w-2xl">
            <p>{t("aboutMeContent1")}</p>
            <p>{t("aboutMeContent2")}</p>
          </div>
        </section>

        {/* ── What I Love ── */}
        <section>
          <SectionHeader title={t("whatILove")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ✏️ 카드 내용을 여기서 수정하세요 */}
            <div className="p-6 rounded-xl border border-foreground/10 hover:border-cyan-400/50 transition-colors">
              <FaDesktop className="text-3xl mb-4 text-foreground/60" />
              <h3 className="text-lg font-bold mb-3">{t("devTitle")}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{t("devContent")}</p>
            </div>
            <div className="p-6 rounded-xl border border-foreground/10 hover:border-cyan-400/50 transition-colors">
              <FaCamera className="text-3xl mb-4 text-foreground/60" />
              <h3 className="text-lg font-bold mb-3">{t("photoTitle")}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{t("photoContent")}</p>
            </div>
          </div>
        </section>

        {/* ── 나의 목표 ── */}
        <section>
          <SectionHeader title={t("myGoals")} />
          <div className="flex flex-col gap-4">
            {goals.map((goal, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-5 rounded-xl border border-foreground/10 hover:border-cyan-400/50 transition-colors"
              >
                <span className="text-2xl shrink-0 mt-0.5 text-cyan-500">{goal.icon}</span>
                <div>
                  <h3 className="font-semibold mb-1">{goal.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 나의 연대기 ── */}
        <section>
          <SectionHeader title={t("timeline")} />
          <div className="relative pl-8 border-l-2 border-foreground/10">
            {timeline.map((group, gi) => (
              <div key={gi} className="relative mb-10 last:mb-0">
                {/* 타임라인 점 */}
                <div className="absolute -left-[45px] w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                <time className="text-foreground font-bold text-lg">{group.year}</time>

                <ul className="mt-3 flex flex-col gap-2">
                  {group.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-sm md:text-base text-foreground/70 hover:text-foreground transition-colors">
                      <span className="shrink-0 mt-1">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 연락처 ── */}
        <section>
          <SectionHeader title={t("contact")} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="mailto:choitjddn0311@naver.com"
              className="flex items-center gap-4 p-5 rounded-xl border border-foreground/10 hover:border-cyan-400 transition-colors group"
            >
              <MdOutlineEmail className="text-2xl text-foreground/40 group-hover:text-cyan-500 transition-colors shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-foreground/40 mb-0.5">Email</p>
                <p className="text-sm font-medium group-hover:text-cyan-500 transition-colors truncate">
                  choitjddn0311@naver.com
                </p>
              </div>
            </Link>

            <Link
              href="https://github.com/choitjddn0311"
              className="flex items-center gap-4 p-5 rounded-xl border border-foreground/10 hover:border-cyan-400 transition-colors group"
            >
              <FaGithub className="text-2xl text-foreground/40 group-hover:text-cyan-500 transition-colors shrink-0" />
              <div>
                <p className="text-xs text-foreground/40 mb-0.5">GitHub</p>
                <p className="text-sm font-medium group-hover:text-cyan-500 transition-colors">
                  choitjddn0311
                </p>
              </div>
            </Link>

            <Link
              href="https://www.instagram.com/choitjddn31"
              className="flex items-center gap-4 p-5 rounded-xl border border-foreground/10 hover:border-cyan-400 transition-colors group"
            >
              <FaInstagram className="text-2xl text-foreground/40 group-hover:text-cyan-500 transition-colors shrink-0" />
              <div>
                <p className="text-xs text-foreground/40 mb-0.5">Instagram</p>
                <p className="text-sm font-medium group-hover:text-cyan-500 transition-colors">
                  choitjddn31
                </p>
              </div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
