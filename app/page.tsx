"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Instagram, MoonStar, SunMedium, Send, Github, BookOpenText, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { achievements, labels, projects, quote, type Locale } from "@/data/content";

const profileSrc = "/profile.png";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const skillsI18n = {
  en: {
    nav: "My Skills",
    title: "My Skills & Tech Stack",
    subtitle:
      "Practical tools and technologies I use across research, product development, and real-world engineering projects.",
    aiTitle: "Artificial Intelligence & Data Science",
    webTitle: "Web & Mobile Development",
    embeddedTitle: "Embedded Systems & Robotics",
    cyberTitle: "Cybersecurity & Networking",
    teamworkTitle: "Teamwork & Productivity",
    languagesTitle: "Language Proficiency Level",

    labels: {
      languages: "Languages",
      dataAnalysis: "Data Analysis",
      machineLearning: "Machine Learning",
      deepLearning: "Deep Learning",
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      frameworks: "Frameworks",
      hardware: "Hardware",
      hardwareLang: "Languages for Hardware",
      securityTools: "Security Tools",
      networkingTools: "Networking Tools",
      protocols: "Protocols",
      apiTesting: "API Testing",
      networkSkills: "Network Skills",
      versionControl: "Version Control",
      management: "Management",
      documentation: "Documentation",
      officeSuites: "Office Suites",
      uzbekRussian: "Uzbek / Russian",
      english: "English",
      korean: "Korean",
      frenchGerman: "French / German"
    },
    values: {
      aiLanguages: "Python, R Language",
      aiDataAnalysis: "NumPy, pandas, Matplotlib",
      aiMachineLearning: "scikit-learn",
      aiDeepLearning: "TensorFlow, PyTorch",
      frontend: "HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript",
      backend: "Node.js, Next.js, Java, Spring Boot",
      databases: "MySQL, MongoDB",
      frameworks: "ROS 2, Mobius, oneM2M",
      hardware: "Raspberry Pi, Arduino, Velodyne Lidar",
      hardwareLang: "C , C++",
      securityTools: "Kali Linux, Metasploit, Burp Suite, Wireshark",
      networkingTools: "Cisco Packet Tracer, PuTTY",
      protocols: "HTTP/HTTPS, TCP/IP",
      apiTesting: "Postman",
      networkSkills: "VPN Setup, Network Traffic Analysis",
      versionControl: "Git, GitHub",
      management: "Jira, Slack, Microsoft Teams",
      documentation: "Notion, Obsidian, Naver Blog",
      officeSuites: "Microsoft Office, Hancom Office, WPS Office",
      uzbekRussian: "Native",
      english: "Advanced (my main scientific language)",
      korean: "Advanced (TOPIK 6 lvl)",
      frenchGerman: "Beginner"
    }
  },
  ko: {
    nav: "나의 역량",
    title: "나의 역량 & 기술 스택",
    subtitle: "연구, 제품 개발, 실제 엔지니어링 프로젝트에서 활용하는 핵심 기술과 도구입니다.",
    aiTitle: "인공지능 & 데이터 과학",
    webTitle: "웹 & 모바일 개발",
    embeddedTitle: "임베디드 시스템 & 로보틱스",
    cyberTitle: "사이버 보안 & 네트워킹",
    teamworkTitle: "협업 & 생산성",
    languagesTitle: "언어 능력 수준",

    labels: {
      languages: "언어",
      dataAnalysis: "데이터 분석",
      machineLearning: "머신러닝",
      deepLearning: "딥러닝",
      frontend: "프론트엔드",
      backend: "백엔드",
      databases: "데이터베이스",
      frameworks: "프레임워크",
      hardware: "하드웨어",
      hardwareLang: "하드웨어 언어",
      securityTools: "보안 도구",
      networkingTools: "네트워킹 도구",
      protocols: "프로토콜",
      apiTesting: "API 테스트",
      networkSkills: "네트워크 역량",
      versionControl: "버전 관리",
      management: "협업 도구",
      documentation: "문서화",
      officeSuites: "오피스 도구",
      uzbekRussian: "우즈베크어 / 러시아어",
      english: "영어",
      korean: "한국어",
      frenchGerman: "프랑스어 / 독일어"
    },
    values: {
      aiLanguages: "Python, R",
      aiDataAnalysis: "NumPy, pandas, Matplotlib",
      aiMachineLearning: "scikit-learn",
      aiDeepLearning: "TensorFlow, PyTorch",
      frontend: "HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript",
      backend: "Node.js, Next.js, Java, Spring Boot",
      databases: "MySQL, MongoDB",
      frameworks: "ROS 2, Mobius, oneM2M",
      hardware: "Raspberry Pi, Arduino, Velodyne Lidar",
      hardwareLang: "C , C++",
      securityTools: "Kali Linux, Metasploit, Burp Suite, Wireshark",
      networkingTools: "Cisco Packet Tracer, PuTTY",
      protocols: "HTTP/HTTPS, TCP/IP",
      apiTesting: "Postman",
      networkSkills: "VPN 설정, 네트워크 트래픽 분석",
      versionControl: "Git, GitHub",
      management: "Jira, Slack, Microsoft Teams",
      documentation: "Notion, Obsidian, Naver Blog",
      officeSuites: "Microsoft Office, Hancom Office",
      uzbekRussian: "원어민",
      english: "고급 (주요 연구 언어)",
      korean: "고급 (TOPIK 6급)",
      frenchGerman: "초급"
    }
  }
} as const;

const educationI18n = {
  en: {
    nav: "Education",
    title: "Education",
    subtitle: "Academic journey and formal learning milestones."
  },
  ko: {
    nav: "학력",
    title: "학력",
    subtitle: "학업 과정과 주요 교육 이력입니다."
  }
} as const;

const educationTimeline = [
  {
    id: 1,
    school: {
      en: "Soonchunhyang University - Bachelor's Degree (GKS Student)",
      ko: "순천향대학교 - 학사 학위 (GKS 장학생)"
    },
    program: {
      en: "Major: Internet of Things (IoT)",
      ko: "전공: 사물인터넷 (IoT)"
    },
    period: {
      en: "2022 September ~ 2026 August",
      ko: "2022년 9월 ~ 2026년 8월"
    }
  },
  {
    id: 2,
    school: {
      en: "Ubicomp Laboratory" ,
      ko: "유비콤 연구실"
    },
    program: {
      en: "Undergraduate Internship",
      ko: "학부생 인턴십"
    },
    period: {
      en: "2024 December ~ 2025 February",
      ko: "2024년 12월 ~ 2025년 2월"
    }
  },

  {
    id: 3,
    school: {
      en: "Sejong Haktang",
      ko: "세종학당"
    },
    program: {
      en: "Korean Learning Program",
      ko: "한국어 학습 과정"
    },
    period: {
      en: "2018 ~ 2020",
      ko: "2018년 ~ 2020년"
    }
  },
  {
    id: 4,
    school: {
      en: "Tashkent Professional College Information and Technology",
      ko: "타슈켄트 정보기술 전문대학"
    },
    program: {
      en: "Major: Software Engineering",
      ko: "전공: 소프트웨어 공학"
    },
    period: {
      en: "2017 September ~ 2020 August",
      ko: "2017년 9월 ~ 2020년 8월"
    }
  },
  {
    id: 5,
    school: {
      en: "279 Middle School in Tashkent City",
      ko: "타슈켄트 279번 중학교"
    },
    program: {
      en: "Math & Physics Oriented School",
      ko: "수학 · 물리 특성화 학교"
    },
    period: {
      en: "2014 September ~ 2017 May",
      ko: "2014년 9월 ~ 2017년 5월"
    }
  },
  {
    id: 6,
    school: {
      en: "107 Gymnasium School in Tashkent City",
      ko: "타슈켄트 107번 김나지움 학교"
    },
    program: {
      en: "French and German Oriented School",
      ko: "프랑스어 · 독일어 특성화 학교"
    },
    period: {
      en: "2008 September ~ 2014 May",
      ko: "2008년 9월 ~ 2014년 5월"
    }
  }
] as const;

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [locale, setLocale] = useState<Locale>("en");
  const [timelineFilter, setTimelineFilter] = useState<"all" | "recent" | "past" | "korean" | "swaiit" | "mentoring">("all");
  const [isLargeText, setIsLargeText] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [typedQuote, setTypedQuote] = useState("");

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle("text-scale-large", isLargeText);
  }, [isLargeText]);

  useEffect(() => {
    const currentQuote = quote[locale];
    setTypedQuote("");
    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setTypedQuote(currentQuote.slice(0, index));
      if (index >= currentQuote.length) {
        window.clearInterval(id);
      }
    }, 55);
    return () => window.clearInterval(id);
  }, [locale]);

  const t = labels[locale];
  const s = skillsI18n[locale];
  const e = educationI18n[locale];
  const sortedAchievements = [...achievements].sort((a, b) => (a.isoDate > b.isoDate ? -1 : 1));
  const recentAchievements = sortedAchievements.filter((item) => Number(item.isoDate.slice(0, 4)) >= 2024);
  const pastAchievements = sortedAchievements.filter((item) => Number(item.isoDate.slice(0, 4)) < 2024);
  const koreanRelatedIds = new Set([2, 1, 29, 24, 25, 28, 27]);
  const swAiItIds = new Set([3, 7, 8, 5]);
  const mentoringIds = new Set([4, 10, 11, 20, 19, 18, 21, 17, 22]);

  const koreanRelatedAchievements = sortedAchievements.filter((item) => koreanRelatedIds.has(item.id));
  const nonKoreanAchievements = sortedAchievements.filter((item) => !koreanRelatedIds.has(item.id));
  const swAiItAchievements = sortedAchievements.filter((item) => swAiItIds.has(item.id));
  const nonSwAiItAchievements = sortedAchievements.filter((item) => !swAiItIds.has(item.id));
  const mentoringAchievements = sortedAchievements.filter((item) => mentoringIds.has(item.id));
  const nonMentoringAchievements = sortedAchievements.filter((item) => !mentoringIds.has(item.id));
  const timelineData =
    timelineFilter === "all"
      ? sortedAchievements
      : timelineFilter === "recent"
        ? [...recentAchievements, ...pastAchievements]
        : timelineFilter === "past"
          ? [...pastAchievements, ...recentAchievements]
          : timelineFilter === "korean"
            ? [...koreanRelatedAchievements, ...nonKoreanAchievements]
            : timelineFilter === "swaiit"
              ? [...swAiItAchievements, ...nonSwAiItAchievements]
              : [...mentoringAchievements, ...nonMentoringAchievements];

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <Image src="/logo.png" alt="SM logo" width={32} height={32} className="h-8 w-8" />
          </a>
          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#home" className="text-muted transition-colors hover:text-foreground">{t.home}</a>
            <a href="#skills" className="text-muted transition-colors hover:text-foreground">{s.nav}</a>
            <a href="#projects" className="text-muted transition-colors hover:text-foreground">{t.projects}</a>
            <a href="#education" className="text-muted transition-colors hover:text-foreground">{e.nav}</a>
            <a href="#achievements" className="text-muted transition-colors hover:text-foreground">{t.achievements}</a>
            <a href="#contact" className="text-muted transition-colors hover:text-foreground">{t.contact}</a>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="language switcher"
              onClick={() => setLocale((v) => (v === "en" ? "ko" : "en"))}
              className="glass-card inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs text-muted transition-colors hover:text-foreground"
            >
              <Globe size={14} />
              {locale === "en" ? "EN" : "KR"}
            </button>
            <button
              aria-label="theme switcher"
              onClick={() => setTheme((v) => (v === "dark" ? "light" : "dark"))}
              className="glass-card inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs text-muted transition-colors hover:text-foreground"
            >
              {theme === "dark" ? <SunMedium size={14} /> : <MoonStar size={14} />}
            </button>
            <button
              aria-label="font size switcher"
              onClick={() => setIsLargeText((prev) => !prev)}
              className="glass-card hidden items-center gap-1 rounded-full px-3 py-2 text-xs text-muted transition-colors hover:text-foreground sm:inline-flex"
            >
              A{isLargeText ? "+" : ""}
            </button>
            <button
              aria-label="open navigation"
              className="inline-flex items-center justify-center rounded-full border border-border p-2 text-muted transition-colors hover:text-foreground md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
        {mobileOpen && (
          <div className="border-t border-border bg-background/95 px-6 pb-4 pt-2 md:hidden">
            <div className="flex flex-col gap-2 text-sm">
              <a href="#home" className="py-1 text-muted transition-colors hover:text-foreground" onClick={() => setMobileOpen(false)}>
                {t.home}
              </a>
              <a href="#skills" className="py-1 text-muted transition-colors hover:text-foreground" onClick={() => setMobileOpen(false)}>
                {s.nav}
              </a>
              <a href="#projects" className="py-1 text-muted transition-colors hover:text-foreground" onClick={() => setMobileOpen(false)}>
                {t.projects}
              </a>
              <a href="#education" className="py-1 text-muted transition-colors hover:text-foreground" onClick={() => setMobileOpen(false)}>
                {e.nav}
              </a>
              <a href="#achievements" className="py-1 text-muted transition-colors hover:text-foreground" onClick={() => setMobileOpen(false)}>
                {t.achievements}
              </a>
              <a href="#contact" className="py-1 text-muted transition-colors hover:text-foreground" onClick={() => setMobileOpen(false)}>
                {t.contact}
              </a>
              <button
                onClick={() => setIsLargeText((prev) => !prev)}
                className="mt-1 inline-flex w-max items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                A{isLargeText ? "+" : ""}
              </button>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          className="order-1 relative mx-auto w-full max-w-md overflow-hidden rounded-[2.5rem] border border-border/70 shadow-premium md:order-1"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/50 to-transparent" />
          <Image
            src={profileSrc}
            alt="Sunnatulla Mamur portrait"
            width={800}
            height={1050}
            className="h-auto w-full object-cover"
            priority
          />
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={container} className="order-2 md:order-2">
          <motion.h1
            className={`typing-caret text-4xl leading-tight md:text-6xl ${locale === "ko" ? "font-korean-display" : "font-[var(--font-serif)]"}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          >
            {typedQuote}
          </motion.h1>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="font-[var(--font-serif)] text-4xl md:text-5xl"
        >
          {s.title}
        </motion.h2>
        <p className="mt-4 max-w-3xl text-muted">
          {s.subtitle}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="glass-card rounded-3xl p-6"
          >
            <h3 className="text-xl font-semibold">{s.aiTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><span className="text-foreground">{s.labels.languages}:</span> {s.values.aiLanguages}</li>
              <li><span className="text-foreground">{s.labels.dataAnalysis}:</span> {s.values.aiDataAnalysis}</li>
              <li><span className="text-foreground">{s.labels.machineLearning}:</span> {s.values.aiMachineLearning}</li>
              <li><span className="text-foreground">{s.labels.deepLearning}:</span> {s.values.aiDeepLearning}</li>
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="glass-card rounded-3xl p-6"
          >
            <h3 className="text-xl font-semibold">{s.webTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><span className="text-foreground">{s.labels.frontend}:</span> {s.values.frontend}</li>
              <li><span className="text-foreground">{s.labels.backend}:</span> {s.values.backend}</li>
              <li><span className="text-foreground">{s.labels.databases}:</span> {s.values.databases}</li>
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="glass-card rounded-3xl p-6"
          >
            <h3 className="text-xl font-semibold">{s.embeddedTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><span className="text-foreground">{s.labels.frameworks}:</span> {s.values.frameworks}</li>
              <li><span className="text-foreground">{s.labels.hardware}:</span> {s.values.hardware}</li>
              <li><span className="text-foreground">{s.labels.hardwareLang}:</span> {s.values.hardwareLang}</li>
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="glass-card rounded-3xl p-6"
          >
            <h3 className="text-xl font-semibold">{s.teamworkTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><span className="text-foreground">{s.labels.versionControl}:</span> {s.values.versionControl}</li>
              <li><span className="text-foreground">{s.labels.management}:</span> {s.values.management}</li>
              <li><span className="text-foreground">{s.labels.documentation}:</span> {s.values.documentation}</li>
              <li><span className="text-foreground">{s.labels.officeSuites}:</span> {s.values.officeSuites}</li>
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="glass-card rounded-3xl p-6"
          >
            <h3 className="text-xl font-semibold">{s.cyberTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><span className="text-foreground">{s.labels.securityTools}:</span> {s.values.securityTools}</li>
              <li><span className="text-foreground">{s.labels.networkingTools}:</span> {s.values.networkingTools}</li>
              <li><span className="text-foreground">{s.labels.protocols}:</span> {s.values.protocols}</li>
              <li><span className="text-foreground">{s.labels.apiTesting}:</span> {s.values.apiTesting}</li>
              <li><span className="text-foreground">{s.labels.networkSkills}:</span> {s.values.networkSkills}</li>
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="glass-card rounded-3xl p-6"
          >
            <h3 className="text-xl font-semibold">{s.languagesTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><span className="text-foreground">{s.labels.uzbekRussian}:</span> {s.values.uzbekRussian}</li>
              <li><span className="text-foreground">{s.labels.english}:</span> {s.values.english}</li>
              <li><span className="text-foreground">{s.labels.korean}:</span> {s.values.korean}</li>
              <li><span className="text-foreground">{s.labels.frenchGerman}:</span> {s.values.frenchGerman}</li>
            </ul>
          </motion.article>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container} className="font-[var(--font-serif)] text-4xl md:text-5xl">
          {t.projects}
        </motion.h2>
        <p className="mt-4 max-w-2xl text-muted">{t.projectsSubtitle}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="glass-card rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 min-h-[4.5rem] whitespace-pre-line text-sm leading-relaxed text-muted">
                {project.description[locale]}
              </p>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-full bg-sky-400 px-4 py-2 text-sm text-slate-950 transition-colors hover:bg-sky-300"
                >
                  {project.hrefLabel?.[locale] ?? (locale === "ko" ? "자세히 보기" : "Read more")}
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container} className="font-[var(--font-serif)] text-4xl md:text-5xl">
          {e.title}
        </motion.h2>
        <p className="mt-4 max-w-2xl text-muted">{e.subtitle}</p>

        <div className="relative mt-10">
          <div className="absolute left-4 top-0 h-full w-px bg-sky-400/70" />
          <div className="space-y-6">
            {educationTimeline.map((item) => (
              <article key={item.id} className="relative ml-10 rounded-2xl border border-border bg-card/50 p-5">
                <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-sky-400" />
                <h3 className="text-base font-semibold">{item.school[locale]}</h3>
                <p className="mt-1 text-sm text-muted">{item.program[locale]}</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted">{item.period[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container} className="font-[var(--font-serif)] text-4xl md:text-5xl">
          {t.achievements}
        </motion.h2>
        <p className="mt-4 max-w-2xl text-muted">{t.achievementsSubtitle}</p>
        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          <button
            onClick={() => setTimelineFilter("all")}
            className={`rounded-full px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
              timelineFilter === "all" ? "bg-sky-400 text-slate-950" : "glass-card text-muted"
            }`}
          >
            {locale === "ko" ? "전체" : "ALL"}
          </button>
          <button
            onClick={() => setTimelineFilter("recent")}
            className={`rounded-full px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
              timelineFilter === "recent" ? "bg-green-500 text-white" : "glass-card text-muted"
            }`}
          >
            {t.recent}
          </button>
          <button
            onClick={() => setTimelineFilter("past")}
            className={`rounded-full px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
              timelineFilter === "past" ? "bg-yellow-400 text-slate-950" : "glass-card text-muted"
            }`}
          >
            {t.past}
          </button>
          <button
            onClick={() => setTimelineFilter("korean")}
            className={`rounded-full px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
              timelineFilter === "korean" ? "bg-purple-500 text-white" : "glass-card text-muted"
            }`}
          >
            {locale === "ko" ? "한국어 관련 성과" : "Korean achievements"}
          </button>
          <button
            onClick={() => setTimelineFilter("swaiit")}
            className={`rounded-full px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
              timelineFilter === "swaiit" ? "bg-red-500 text-white" : "glass-card text-muted"
            }`}
          >
            {locale === "ko" ? "SW · AI · IT 성과" : "SW & AI & IT Achievements"}
          </button>
          <button
            onClick={() => setTimelineFilter("mentoring")}
            className={`rounded-full px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
              timelineFilter === "mentoring" ? "bg-orange-500 text-white" : "glass-card text-muted"
            }`}
          >
            {locale === "ko" ? "멘토링 · 서포터즈" : "Mentoring & Supporter"}
          </button>
        </div>

        <div className="relative mt-10">
          <div className="absolute left-4 top-0 h-full w-px bg-border" />
          <AnimatePresence mode="wait">
            <motion.div
              key={timelineFilter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {timelineData.map((item) => {
                const year = Number(item.isoDate.slice(0, 4));
                const isRecent = year >= 2024;
                const isKoreanRelated = koreanRelatedIds.has(item.id);
                const isSwAiItRelated = swAiItIds.has(item.id);
                const isMentoringRelated = mentoringIds.has(item.id);
                const highlighted =
                  timelineFilter === "all"
                    ? true
                    : timelineFilter === "recent"
                      ? isRecent
                      : timelineFilter === "past"
                        ? !isRecent
                        : timelineFilter === "korean"
                          ? isKoreanRelated
                          : timelineFilter === "swaiit"
                            ? isSwAiItRelated
                            : isMentoringRelated;
                return (
                  <article
                    key={item.id}
                    className={`relative ml-10 rounded-2xl border bg-card/50 p-5 transition ${
                      highlighted ? "border-border" : "border-border/40 opacity-70"
                    }`}
                  >
                    <span
                      className={`absolute -left-[31px] top-6 h-3 w-3 rounded-full ${
                        highlighted
                          ? timelineFilter === "all"
                            ? "bg-sky-400"
                            : timelineFilter === "recent"
                              ? "bg-green-500"
                              : timelineFilter === "past"
                                ? "bg-yellow-400"
                                : timelineFilter === "korean"
                                  ? "bg-purple-500"
                                  : timelineFilter === "swaiit"
                                    ? "bg-red-500"
                                    : "bg-orange-500"
                          : "bg-border"
                      }`}
                    />
                  <h3 className="text-base font-semibold">{item.title[locale]}</h3>
                  <p className="mt-1 text-sm text-muted">{item.org}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-muted">{item.date}</p>
                  </article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <footer id="contact" className="mx-auto max-w-6xl px-6 pb-10 pt-20">
        <div className="glass-card flex flex-col items-center justify-between gap-6 rounded-3xl p-8 md:flex-row">
          <div>
            <p className="text-sm text-muted">{t.footerText}</p>
            <p className="mt-1 font-[var(--font-serif)] text-2xl">Sunnatulla Mamur</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/sunnatulla_mamur/" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-border p-2 text-muted transition hover:text-foreground"><Instagram size={18} /></a>
            <a href="https://t.me/Sunnatulla_Mamur" target="_blank" rel="noreferrer" aria-label="Telegram" className="rounded-full border border-border p-2 text-muted transition hover:text-foreground"><Send size={18} /></a>
            <a href="https://github.com/minhauser" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-border p-2 text-muted transition hover:text-foreground"><Github size={18} /></a>
            <a href="https://blog.naver.com/sunnatulla_mamur" target="_blank" rel="noreferrer" aria-label="Naver Blog" className="rounded-full border border-border p-2 text-muted transition hover:text-foreground"><BookOpenText size={18} /></a>
            <a href="mailto:mamuroov@gmail.com" aria-label="Email" className="rounded-full border border-border p-2 text-muted transition hover:text-foreground"><Mail size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
