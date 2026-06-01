import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { getTranslations } from "next-intl/server";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "최성우가 진행한 프로젝트 목록입니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: siteConfig.name,
    title: `Projects | ${siteConfig.name}`,
    description: "최성우가 진행한 프로젝트 목록입니다.",
    url: `${siteConfig.url}/projects`,
  },
};

// ✏️ 프로젝트를 추가하려면 아래 배열에 항목을 추가하세요.
// 구조: title(프로젝트명), period(기간), description(설명), techs(기술스택), github(선택), demo(선택)
const projects = [
  {
    title: "sungwoo dev blog",
    period: "2026.02 ~",
    description: "Next.js와 MDX로 만든 개인 포트폴리오 겸 개발 블로그입니다.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/choitjddn0311/swdev",
    url: "https://swdev-coral.vercel.app",
  },
  {
    title: "나의 감정을 한눈에 볼수있는 그림일기",
    period: "2026.05 ~ 2026.06",
    description: "react와 python flask를 활용한 그림일기 형태의 프로젝트입니다. image generation api를 활용해 일기에 관해 그림도 그려줍니다.",
    techs: ["React","Python","Flask","Sqlite","api"],
    github: "https://github.com/choitjddn0311/softwareThinkingProject"
  }
];

const Projects = async () => {
  const t = await getTranslations("projects");

  return (
    <div className="w-full flex justify-center bg-background text-foreground">
      <div className="w-full sm:w-150 md:w-200 lg:w-250 xl:w-300 2xl:w-300 py-20 px-5 xl:px-0 min-h-165">
        <h1 className="text-2xl 2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl font-bold mb-10">
          Projects
        </h1>

        {projects.length === 0 ? (
          <p className="text-foreground/50">{t("noProjects")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={index}
                className="flex flex-col gap-4 p-5 rounded-xl border border-foreground/10 hover:border-cyan-400/50 transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <h2 className="text-base xl:text-lg font-bold leading-snug">{project.title}</h2>
                  <time className="text-xs text-foreground/40">{project.period}</time>
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-cyan-400/10 text-cyan-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-1 border-t border-foreground/10">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-cyan-500 transition-colors"
                    >
                      <FaGithub className="text-sm" />
                      {t("github")}
                    </Link>
                  )}
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-cyan-500 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      {t("demo")}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
