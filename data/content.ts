export type Locale = "en" | "ko";

export type Project = {
  id: string;
  title: string;
  description: Record<Locale, string>;
  href?: string;
  hrefLabel?: Record<Locale, string>;
};

export type Achievement = {
  id: number;
  title: Record<Locale, string>;
  org: string;
  date: string;
  isoDate: string;
};

export const quote = {
  en: "I am not just a Scientist, but an Engineer who improves the world around me for the convenience of people.",
  ko: "저는 단순한 학자가 아니라, 사람들의 편의를 위해 세상을 개선하는 엔지니어입니다."
};

export const projects: Project[] = [
  {
    id: "vlp16",
    title: "Velodyne Lidar VLP-16 Research",
    description: {
      en: "Research, analysis, and application of the Velodyne VLP-16 Lidar system.",
      ko: "Velodyne VLP-16 LiDAR 시스템의 연구, 분석 및 응용 프로젝트입니다."
    },
    href: "https://blog.naver.com/sunnatulla_mamur",
    hrefLabel: { en: "Read more on my blog", ko: "블로그에서 더 보기" }
  },
  {
    id: "care-link",
    title: "Care Link (IoT Elderly Care System)",
    description: {
      en: "An IoT-based elderly care system using wearables to monitor heart rate, temperature, and fall detection in real time, with LSTM/CNN anomaly detection and GPS SOS tracking.",
      ko: "웨어러블 기기로 심박수, 체온, 낙상 여부를 실시간 모니터링하고 LSTM/CNN 이상 감지 및 GPS 기반 긴급 위치 추적/SOS를 제공하는 IoT 노인 돌봄 시스템입니다."
    }
  },
  {
    id: "sch-bus",
    title: "SCH Bus (Campus Shuttle Bus System)",
    description: {
      en: "A Raspberry Pi-based smart shuttle system with ultrasonic passenger counting and GPS modules, predicting seat availability and real-time location via Mobius server.",
      ko: "Raspberry Pi, 초음파 센서, GPS 모듈을 활용해 승하차 인원과 실시간 위치를 추적하고 Mobius 서버 기반 좌석 가용성을 예측하는 스마트 셔틀 시스템입니다."
    }
  },
  {
    id: "eduble",
    title: 'Eduble (Braille Learning Device)',
    description: {
      en: 'An affordable smart Braille learning device with a 35-cell refreshable electromagnet display, 5-cell latching-switch input, ESP32 control, Bluetooth app, voice output, and reading/writing training.',
      ko: "35셀 점자 출력(전자석), 5셀 입력(래칭 스위치), ESP32 제어, 블루투스 앱, 음성 출력과 읽기/쓰기 학습 기능을 제공하는 합리적인 가격의 스마트 점자 학습 기기입니다."
    }
  },
  {
    id: "telegram-bot",
    title: "Korean Vocabulary Telegram Bot",
    description: {
      en: "An educational Telegram bot with ranking, adjustable difficulty, and an AI-driven placement test to identify user proficiency. *1K + Users daily.",
      ko: "랭킹 시스템, 난이도 조절, AI 기반 레벨 테스트를 제공하여 학습자의 수준을 진단하는 한국어 단어 학습 텔레그램 봇입니다. *1K + 하루 사용자 수."
    },
    href: "https://t.me/Sunnatulla_Quiz_bot",
    hrefLabel: { en: "Try the bot", ko: "봇 사용해 보기" }
  }
];

export const achievements: Achievement[] = [
  { id: 1, title: { 
    en: "KIIP - Level 5 (85 points)", 
    ko: "KIIP 5급 (85점)" }, 
    org: "Ministry of Justice", date: "June 18, 2025", isoDate: "2025-06-18" },
  { id: 2, title: { 
    en: "TOPIK - Level 6 (259 points)", 
    ko: "TOPIK 6급 (259점)" }, 
    org: "NIIED", date: "Oct 19, 2025", isoDate: "2025-10-19" },
  { id: 3, title: { 
    en: "2025 SW-Centered University Outstanding Project Competition - Sponsor Company Award (AWS)", 
    ko: "2025 SW중심대학 우수 프로젝트 경진대회 - 후원기업상(AWS)" }, 
    org: "SW-Centered University Council", date: "Dec 2, 2025", isoDate: "2025-12-02" },
  { id: 4, title: { 
    en: "2025 International Student K-BOOK Reading Mentoring - Certificate", 
    ko: "2025 유학생 K-BOOK 독서 멘토링 - 수료" }, 
    org: "Soonchunhyang Univ. Central Library", date: "Nov 27, 2025", isoDate: "2025-11-27" },
  { id: 5, title: { 
    en: "2022-2nd Semester Job Preparation & Computer Training for International Students", 
    ko: "2022-2학기 유학생 취업준비 및 컴퓨터 교육 수료" }, 
    org: "Soonchunhyang Univ. Office of Global Education Exchange", date: "Dec 5, 2022", isoDate: "2022-12-05" },
  { id: 6, title: { 
    en: "SCH International Student Career Practical Camp Certificate", 
    ko: "SCH 외국인 유학생 진로실무캠프 수료" }, 
    org: "Korea Employment Center", date: "Nov 21, 2025", isoDate: "2025-11-21" },
  { id: 7, title: {
    en: 'Braille Learning Device "Eduble" - Excellence Award (Industry-Academia)', 
    ko: '점자 학습 장치 "Eduble" - 우수상(산학연계)' }, 
    org: "Soonchunhyang Univ. Medical IT Engineering", date: "Nov 4, 2025", isoDate: "2025-11-04" },
  { id: 8, title: { 
    en: "2024 Capstone Design & AI Hackathon - Participation Award", 
    ko: "2024 캡스톤 디자인 & AI 해커톤 - 참가상" }, 
    org: "Korean Association of Computer Education", date: "Oct 27, 2024", isoDate: "2024-10-27" },
  { id: 9, title: { 
    en: "2022 Global Korea Scholarship (GKS-UIC)", 
    ko: "2022 정부초청장학생(GKS-UIC)" }, 
    org: "NIIED", date: "July 1, 2022", isoDate: "2022-07-01" },
  { id: 10, title: { 
    en: "2025-2nd Semester GKS Korean Language Trainee Mentoring", 
    ko: "2025-2학기 GKS 한국어 연수생 멘토링" }, 
    org: "Soonchunhyang Univ. Office of Global Affairs", date: "Oct 24, 2025", isoDate: "2025-10-24" },
  { id: 11, title: { 
    en: "2024 International Student Library Tour - Supporter Certificate", 
    ko: "2024 유학생 도서관 투어 - 서포터즈 수료" }, 
    org: "Soonchunhyang Univ. Central Library", date: "Sep 30, 2024", isoDate: "2024-09-30" },
  { id: 12, title: { 
    en: "2024 English Essay Contest - Excellence Award", 
    ko: "2024 영어 에세이 대회 - 우수상" }, 
    org: "Soonchunhyang Univ. Educational Innovation Institute", date: "May 29, 2024", isoDate: "2024-05-29" },
  { id: 13, title: { 
    en: "Soonchunhyang Univ. Multinational Student Broadcasting Club & Video Contest - Participation Award", ko: "순천향대 다국적 방송 동아리 및 영상 공모전 - 참가상" }, org: "Soonchunhyang University", date: "Mar 6, 2024", isoDate: "2024-03-06" },
  { id: 14, title: { 
    en: "SomeSome Project: SomeSome BLUE in Gyeongnam - Training Certificate", 
    ko: "썸썸 프로젝트: 경남 썸썸 BLUE - 교육 수료" }, 
    org: "Kyungnam Univ. LINC 3.0", date: "Nov 4, 2023", isoDate: "2023-11-04" },
  { id: 15, title: { 
    en: "SomeSome Project: SomeSome BLUE in Gyeongnam PBL Course - Certificate of Completion", 
    ko: "썸썸 프로젝트: 경남 썸썸 BLUE PBL 과정 - 수료증" }, 
    org: "Kyungnam Univ. LINC 3.0", date: "Nov 4, 2023", isoDate: "2023-11-04" },
  { id: 16, title: { 
    en: "SomeSome Project Season 2: SomeSome BLUE in Gyeongnam - Excellence Award", 
    ko: "썸썸 프로젝트 시즌2: 경남 썸썸 BLUE - 우수상" }, 
    org: "Gyeongnam Center for Creative Economy & Innovation", 
    date: "Nov 4, 2023", 
    isoDate: "2023-11-04" },
  { id: 17, title: { 
    en: "Soonchunhyang Univ. College International Student Academic Assistant - Certificate", 
    ko: "순천향대학교 유학생 학습지원 조교 - 수료" }, 
    org: "Soonchunhyang University", 
    date: "June 16, 2023", 
    isoDate: "2023-06-16" },
  { id: 18, title: { 
    en: "GKS Mentoring Program - Certificate", 
    ko: "GKS 멘토링 프로그램 - 수료" }, org: "Soonchunhyang Univ. Office of Global Affairs", date: "Nov 13, 2023", isoDate: "2023-11-13" },
  { id: 19, title: { en: "Large & Global Corporate Career Mentoring - Certificate", ko: "대기업 및 글로벌 기업 진로 멘토링 - 수료" }, org: "Soonchunhyang Univ. University Job Plus Center", date: "May 2, 2024", isoDate: "2024-05-02" },
  { id: 20, title: { en: "2024-1st Semester GKS Mentoring Program - Certificate", ko: "2024-1학기 GKS 멘토링 프로그램 - 수료" }, org: "Soonchunhyang Univ. Office of Global Affairs", date: "May 22, 2024", isoDate: "2024-05-22" },
  { id: 21, title: { en: "2023 International Student Library Tour - Supporter", ko: "2023 유학생 도서관 투어 - 서포터즈" }, org: "Soonchunhyang Univ. Central Library", date: "Oct 16, 2023", isoDate: "2023-10-16" },
  { id: 22, title: { en: "2021 Korean Traditional Play Festival - Event Assistant", ko: "2021 한국 전통놀이 축제 - 행사 도우미" }, org: "Tashkent Korean Education Center", date: "Nov 4, 2021", isoDate: "2021-11-04" },
  { id: 23, title: { en: "The 12th World Taekkyon Championship - Excellence Award", ko: "제12회 세계 택견 선수권대회 - 우수상" }, org: "Korea Taekkyon Association", date: "Oct 17, 2021", isoDate: "2021-10-17" },
  { id: 24, title: { en: "2020 Korean Speech Contest - Bronze Award", ko: "2020 한국어 말하기 대회 - 동상" }, org: "King Sejong Institute Tashkent & Soonchunhyang Univ.", date: "Dec 17, 2020", isoDate: "2020-12-17" },
  { id: 25, title: { en: "Intermediate Korean Language Course - Certificate", ko: "중급 한국어 과정 - 수료" }, org: "King Sejong Institute Tashkent", date: "Dec 14, 2020", isoDate: "2020-12-14" },
  { id: 26, title: { en: "The 5th Martial Arts Open School in Uzbekistan", ko: "우즈베키스탄 제5회 무예 오픈스쿨" }, org: "UNESCO ICM", date: "Aug 1, 2021", isoDate: "2021-08-01" },
  { id: 27, title: { en: "2019 Korean Language Olympiad (High School) - Excellence Award", ko: "2019 한국어 올림피아드(고등부) - 우수상" }, org: "Tashkent Korean Education Center", date: "Dec 25, 2019", isoDate: "2019-12-25" },
  { id: 28, title: { en: "Korean Tour Guide Training Course - Certificate", ko: "한국어 관광통역안내 교육 과정 - 수료" }, org: "King Sejong Institute Tashkent", date: "Oct 30, 2020", isoDate: "2020-10-30" },
  { id: 29, title: { en: "Korean Language Course (Study Abroad Class) - Certificate", ko: "한국어 과정(유학반) - 수료" }, org: "Tashkent Korean Education Center", date: "June 1, 2021", isoDate: "2021-06-01" }
];

export const labels = {
  en: {
    home: "Home",
    projects: "Projects & Research",
    achievements: "Achievements",
    contact: "Contact",
    intro: "Engineering Better Everyday Life",
    projectsSubtitle: "Selected works in IoT, AI, embedded systems, and educational technology.",
    achievementsSubtitle: "Milestones, awards, and certificates across language, research, and leadership.",
    recent: "Recent Achievements",
    past: "Past Achievements",
    social: "Social",
    footerText: "Created with sophistication, empathy, and countless attempts."
  },
  ko: {
    home: "홈",
    projects: "프로젝트 & 연구",
    achievements: "성과",
    contact: "연락처",
    intro: "일상을 더 나은 방향으로 설계합니다",
    projectsSubtitle: "IoT, AI, 임베디드 시스템, 교육 기술 분야의 주요 프로젝트입니다.",
    achievementsSubtitle: "언어, 연구, 리더십 분야의 수상 및 주요 이력입니다.",
    recent: "최근 성과",
    past: "이전 성과",
    social: "소셜",
    footerText: "정교함, 공감, 그리고 수많은 시도로 만들어졌습니다."
  }
};
