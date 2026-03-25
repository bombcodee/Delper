/* ===== TECH STACK CATEGORIES DATA ===== */
var TECH_CATEGORIES = [
  {
    title: "프론트엔드",
    color: "purple",
    items: [
      { name: "React / Next.js", desc: "가장 큰 생태계, SSR 지원" },
      { name: "Vue / Nuxt", desc: "학습 곡선 낮음, 점진 적용" },
      { name: "Astro", desc: "정적 사이트, 블로그 최적" },
      { name: "Tailwind CSS", desc: "유틸리티 기반 CSS" },
      { name: "shadcn/ui", desc: "React UI 컴포넌트" },
      { name: "TypeScript", desc: "정적 타입, 규모 커지면 필수" }
    ]
  },
  {
    title: "백엔드 / BaaS",
    color: "teal",
    items: [
      { name: "Supabase", desc: "PostgreSQL + Auth + Storage" },
      { name: "Firebase", desc: "NoSQL + Auth + 빠른 프로토타입" },
      { name: "Node.js / Express", desc: "JavaScript 풀스택" },
      { name: "Python / FastAPI", desc: "AI/ML 연동에 강점" },
      { name: "Serverless Functions", desc: "Vercel, AWS Lambda, CF Workers" }
    ]
  },
  {
    title: "데이터베이스",
    color: "blue",
    items: [
      { name: "PostgreSQL", desc: "관계형 DB 표준, 확장성" },
      { name: "MongoDB", desc: "비정형 데이터, 유연한 스키마" },
      { name: "SQLite", desc: "임베디드, 소규모 프로젝트" },
      { name: "Redis", desc: "캐싱, 세션, 실시간 데이터" }
    ]
  },
  {
    title: "배포 / 인프라",
    color: "coral",
    items: [
      { name: "Vercel", desc: "Next.js 최적, 자동 배포" },
      { name: "Netlify", desc: "정적 사이트, JAMstack" },
      { name: "Railway / Fly.io", desc: "커스텀 서버, 컨테이너" },
      { name: "Cloudflare", desc: "CDN, DNS, WAF, Workers" },
      { name: "Docker", desc: "컨테이너화, 환경 일관성" }
    ]
  },
  {
    title: "인증 / 결제",
    color: "amber",
    items: [
      { name: "Supabase Auth", desc: "PostgreSQL 통합 인증" },
      { name: "NextAuth / Clerk", desc: "Next.js 인증 솔루션" },
      { name: "Stripe", desc: "글로벌 결제, 구독 관리" },
      { name: "토스페이먼츠", desc: "한국 PG, 사업자 필수" },
      { name: "Lemon Squeezy", desc: "디지털 상품 판매 + 세금 자동" }
    ]
  },
  {
    title: "AI / 모니터링",
    color: "pink",
    items: [
      { name: "Anthropic Claude", desc: "API, Claude Code" },
      { name: "OpenAI", desc: "GPT API, Whisper" },
      { name: "Google AI", desc: "Gemini, Vertex AI" },
      { name: "Hugging Face", desc: "오픈소스 모델 허브" },
      { name: "Replicate", desc: "AI 모델 호스팅" },
      { name: "Sentry", desc: "에러 추적" },
      { name: "PostHog", desc: "제품 분석, A/B 테스트" },
      { name: "Google Analytics", desc: "웹 트래픽 분석" },
      { name: "LogRocket", desc: "세션 녹화 + 에러" }
    ]
  },
  {
    title: "실시간 통신",
    color: "green",
    items: [
      { name: "WebSocket", desc: "양방향 실시간 통신" },
      { name: "Socket.io", desc: "WebSocket 라이브러리" },
      { name: "Supabase Realtime", desc: "DB 실시간 구독" },
      { name: "Pusher", desc: "실시간 메시징 서비스" }
    ]
  },
  {
    title: "이메일 / 알림",
    color: "coral",
    items: [
      { name: "Resend", desc: "개발자 친화 이메일 API" },
      { name: "SendGrid", desc: "대량 이메일 전송" },
      { name: "Firebase Cloud Messaging", desc: "푸시 알림" },
      { name: "OneSignal", desc: "멀티 채널 알림" }
    ]
  },
  {
    title: "테스팅 도구",
    color: "amber",
    items: [
      { name: "Jest / Vitest", desc: "Unit Test 프레임워크" },
      { name: "Playwright", desc: "E2E 테스트 + 스크래핑" },
      { name: "Cypress", desc: "E2E 테스트 (UI 중심)" }
    ]
  },
  {
    title: "자동화 / 스크래핑",
    color: "purple",
    items: [
      { name: "Puppeteer", desc: "Chrome 자동화" },
      { name: "Playwright", desc: "멀티 브라우저 자동화" },
      { name: "Selenium", desc: "레거시 웹 자동화" },
      { name: "n8n", desc: "오픈소스 워크플로우 자동화" },
      { name: "Make (Zapier 대체)", desc: "노코드 자동화" }
    ]
  },
  {
    title: "영상 / 오디오 처리",
    color: "teal",
    items: [
      { name: "FFmpeg", desc: "영상/오디오 변환 핵심" },
      { name: "MoviePy", desc: "Python 영상 편집" },
      { name: "Whisper", desc: "음성→텍스트 (STT)" },
      { name: "ElevenLabs", desc: "텍스트→음성 (TTS)" }
    ]
  },
  {
    title: "게임 엔진",
    color: "red",
    items: [
      { name: "Unity", desc: "2D/3D, C#, 가장 큰 생태계" },
      { name: "Godot", desc: "오픈소스, 경량, 인디 게임" },
      { name: "Unreal", desc: "AAA급 3D, C++" },
      { name: "Phaser", desc: "웹 브라우저 기반 2D 게임" }
    ]
  },
  {
    title: "모바일",
    color: "blue",
    items: [
      { name: "React Native", desc: "JS 기반 크로스플랫폼" },
      { name: "Flutter", desc: "Dart 기반 크로스플랫폼" },
      { name: "Swift", desc: "iOS 네이티브" },
      { name: "Kotlin", desc: "Android 네이티브" }
    ]
  },
  {
    title: "임베디드",
    color: "green",
    items: [
      { name: "Arduino IDE", desc: "입문용 임베디드 개발" },
      { name: "PlatformIO", desc: "프로 임베디드 IDE" },
      { name: "ESP-IDF", desc: "ESP32 공식 프레임워크" }
    ]
  },
  {
    title: "CMS / 콘텐츠 관리",
    color: "coral",
    items: [
      { name: "Strapi", desc: "오픈소스 Headless CMS" },
      { name: "Sanity", desc: "실시간 협업 CMS" },
      { name: "Ghost", desc: "블로그/뉴스레터 엔진" },
      { name: "Docusaurus", desc: "기술 문서 사이트" },
      { name: "GitBook", desc: "위키/문서 호스팅" }
    ]
  },
  {
    title: "SEO / 마케팅 도구",
    color: "amber",
    items: [
      { name: "Google Search Console", desc: "검색 노출 분석" },
      { name: "Google Tag Manager", desc: "태그 관리" },
      { name: "메타 픽셀", desc: "광고 추적" },
      { name: "Hotjar / Clarity", desc: "히트맵, 세션 녹화" }
    ]
  },
  {
    title: "데이터 / 분석",
    color: "purple",
    items: [
      { name: "BigQuery", desc: "대용량 데이터 웨어하우스" },
      { name: "Metabase / Redash", desc: "오픈소스 BI 도구" },
      { name: "Mixpanel / Amplitude", desc: "이벤트 기반 분석" },
      { name: "ChartMogul / Baremetrics", desc: "SaaS 수익 분석" }
    ]
  },
  {
    title: "보안 도구",
    color: "red",
    items: [
      { name: ".env / Vault", desc: "비밀 관리" },
      { name: "Cloudflare WAF", desc: "웹 방화벽 + DDoS 방어" },
      { name: "Let's Encrypt", desc: "무료 SSL 인증서" },
      { name: "Stripe Radar", desc: "부정 결제 방어" }
    ]
  },
  {
    title: "국제화 / 리텐션 / 고객지원",
    color: "teal",
    items: [
      { name: "i18next / Crowdin", desc: "다국어 번역 관리" },
      { name: "Shepherd.js / Intro.js", desc: "온보딩 가이드 투어" },
      { name: "Canny / Featurebase", desc: "기능 요청 투표" },
      { name: "Mintlify", desc: "기술 문서 호스팅" },
      { name: "Crisp / Intercom", desc: "라이브 챗 위젯" },
      { name: "Testimonial.to", desc: "사용자 후기 수집" }
    ]
  },
  {
    title: "수익화 / 그로스",
    color: "pink",
    items: [
      { name: "Lemon Squeezy", desc: "디지털 상품 판매 + 세금 자동" },
      { name: "Gumroad", desc: "디지털 상품 간편 판매" },
      { name: "ConvertKit / Beehiiv", desc: "뉴스레터 마케팅" },
      { name: "Keygen", desc: "라이선스 키 발급" },
      { name: "Supabase RLS", desc: "페이월/접근 제어" }
    ]
  },
  {
    title: "상태 관리 (React)",
    color: "blue",
    items: [
      { name: "Zustand", desc: "클라이언트 상태 관리 (경량)" },
      { name: "Jotai", desc: "원자적 상태 관리" },
      { name: "Redux Toolkit", desc: "대규모 상태 관리 표준" },
      { name: "TanStack Query", desc: "서버 상태 관리 (캐싱, 동기화)" }
    ],
    note: "실무 표준: Zustand(클라이언트) + TanStack Query(서버) 조합"
  },
  {
    title: "백업 / 재해 복구",
    color: "green",
    items: [
      { name: "pg_dump", desc: "PostgreSQL 백업 (크론잡)" },
      { name: "Supabase 자동 백업", desc: "Pro 플랜 자동 백업" },
      { name: "GitHub", desc: "코드 백업 (설정 파일은 별도 보관)" },
      { name: "DNS 설정 기록", desc: "도메인 이전/복구 시 필수" }
    ]
  },
  {
    title: "수익 보호",
    color: "red",
    items: [
      { name: "Stripe Radar", desc: "부정 결제/환불 사기 방어" },
      { name: "디바이스 핑거프린팅", desc: "계정 공유 방지, 동시 접속 제한" },
      { name: "Cloudflare Bot Management", desc: "크롤링/스크래핑 방어" },
      { name: "사용량 대시보드", desc: "API 키 남용/이상 패턴 감지" }
    ]
  }
];
