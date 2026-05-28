import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { FaGithub, FaInstagram } from "react-icons/fa";
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

const About = () => {
  const hashTags = [
    "developer",
    "photographer",
    "videographer",
    "travel the world",
    "do my dream",
  ];

  // ✏️ 연대기 내용을 여기서 수정하세요
  const timeline = [
    {
      year: "2026",
      items: [
        { icon: "🎓", text: "국민대학교 인공지능학부 26학번 입학" },
      ],
    },
    {
      year: "2025",
      items: [
        { icon: "🏅", text: "광주 전국기능경기대회 웹 디자인 및 개발 장려상(14위)" },
        { icon: "🏅", text: "인천 지방기능경기대회 웹 디자인 및 개발 은메달" },
        { icon: "🏅", text: "progate hackathon 2등" },
        { icon: "📜", text: "정보처리산업기사(과정평가형) 취득" },
        { icon: "📜", text: "웹디자인개발기능사 취득" },
      ],
    },
    {
      year: "2024",
      items: [
        { icon: "🏅", text: "인천 지방기능경기대회 웹 디자인 및 개발 동메달" },
        { icon: "💼", text: "산학일체형도제학교 8기 (유)슬렉슨 근무 시작" },
        { icon: "📜", text: "프로그래밍기능사(구 정보처리기능사) 취득" },
      ],
    },
  ];

  // ✏️ 목표 내용을 여기서 수정하세요
  const goals = [
    {
      icon: "🎯",
      title: "목표 제목을 여기에 입력하세요",
      description: "목표에 대한 설명을 여기에 입력하세요.",
    },
    {
      icon: "🚀",
      title: "목표 제목을 여기에 입력하세요",
      description: "목표에 대한 설명을 여기에 입력하세요.",
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
            <h1 className="text-4xl md:text-5xl font-bold">최성우</h1>
            <p className="text-foreground/50 text-base md:text-lg">Sungwoo Choi</p>
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
          <SectionHeader title="About Me" />
          {/* ✏️ 자기소개 내용을 여기서 수정하세요 */}
          <div className="text-foreground/70 leading-relaxed text-base md:text-lg space-y-4 max-w-2xl">
            <p>자기소개 내용을 여기에 입력하세요.</p>
            <p>여러 문단을 사용할 수 있어요.</p>
          </div>
        </section>

        {/* ── What I Love ── */}
        <section>
          <SectionHeader title="What I Love" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ✏️ 카드 내용을 여기서 수정하세요 */}
            <div className="p-6 rounded-xl border border-foreground/10 hover:border-cyan-400/50 transition-colors">
              <div className="text-3xl mb-4">🖥️</div>
              <h3 className="text-lg font-bold mb-3">개발</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                웹 개발을 주로 했기 때문에, 프론트와 백을 다루는 것을 좋아합니다.
                또 잘 다루는건 아니지만 AI 분야 중 CV에 특히 관심이 있어요.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-foreground/10 hover:border-cyan-400/50 transition-colors">
              <div className="text-3xl mb-4">📷</div>
              <h3 className="text-lg font-bold mb-3">사진 · 영상</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                세상을 작은 프레임 안에 담는 사진과 영상을 찍는 걸 좋아합니다.
                사진 촬영, 색보정, 영상편집까지 할 정도로 엄청난 흥미를 가지고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* ── 나의 목표 ── */}
        <section>
          <SectionHeader title="나의 목표" />
          <div className="flex flex-col gap-4">
            {goals.map((goal, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-5 rounded-xl border border-foreground/10 hover:border-cyan-400/50 transition-colors"
              >
                <span className="text-2xl shrink-0 mt-0.5">{goal.icon}</span>
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
          <SectionHeader title="나의 연대기" />
          <div className="relative pl-8 border-l-2 border-foreground/10">
            {timeline.map((group, gi) => (
              <div key={gi} className="relative mb-10 last:mb-0">
                {/* 타임라인 점 */}
                <div className="absolute -left-[33px] w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                <time className="text-cyan-500 font-bold text-lg">{group.year}</time>

                <ul className="mt-3 flex flex-col gap-2">
                  {group.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-sm md:text-base text-foreground/70">
                      <span className="shrink-0 mt-0.5">{item.icon}</span>
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
          <SectionHeader title="연락처" />
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
