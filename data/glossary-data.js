const GLOSSARY_DATA = [
  // ===== 기획 문서 (doc) =====
  {
    name: "PRD",
    nameEn: "Product Requirements Document",
    category: "doc",
    level: "essential",
    tags: [
      { text: "피알디", color: "purple" },
      { text: "제품 요구사항 문서", color: "teal" }
    ],
    desc: "\"뭘 만들 건가\"의 정의서. 기능 목록, 사용자 시나리오, 우선순위 포함. 1인 개발에서 가장 중요한 문서이자 AI에게 줄 컨텍스트의 뼈대."
  },
  {
    name: "User Flow",
    nameEn: "사용자 흐름도",
    category: "doc",
    level: "essential",
    tags: [
      { text: "유저 플로우", color: "purple" }
    ],
    desc: "사용자가 앱 안에서 어떤 순서로 행동하는지를 그린 흐름도. 없으면 화면 전환 로직을 매번 즉흥으로 결정하게 됨."
  },
  {
    name: "Wireframe",
    nameEn: "화면 구조 스케치",
    category: "doc",
    level: "essential",
    tags: [
      { text: "와이어프레임", color: "purple" }
    ],
    desc: "화면의 뼈대 배치. 예쁠 필요 없고, 어떤 요소가 어디에 있는지만 잡는 것. 손그림도 충분."
  },
  {
    name: "Tech Spec",
    nameEn: "Technical Specification · 기술 명세서",
    category: "doc",
    level: "essential",
    tags: [
      { text: "테크 스펙", color: "purple" }
    ],
    desc: "기술 스택, DB 스키마, API 구조, 아키텍처 결정 사항. \"어떻게 만들 건가\"의 문서."
  },
  {
    name: "MVP Definition",
    nameEn: "Minimum Viable Product Definition · 최소 기능 제품 범위 정의",
    category: "doc",
    level: "essential",
    tags: [
      { text: "엠브이피", color: "purple" }
    ],
    desc: "뭘 넣고 뭘 뺄지 명시적으로 선 긋는 것. PRD에 포함 가능. MoSCoW 방법(Must/Should/Could/Won't)으로 분류."
  },
  {
    name: "BRD",
    nameEn: "Business Requirements Document · 사업 요구사항 문서",
    category: "doc",
    level: "useful",
    tags: [
      { text: "비알디", color: "purple" }
    ],
    desc: "\"왜 만드는가\"의 사업적 근거. PRD의 상위 개념. PRD 서두에 통합 가능하지만, 사업가라면 별도로 인식해둘 만함."
  },
  {
    name: "AC",
    nameEn: "Acceptance Criteria · 기능 완료 기준",
    category: "doc",
    level: "useful",
    tags: [
      { text: "억셉턴스 크라이테리아", color: "purple" }
    ],
    desc: "각 기능이 \"완료\"로 인정되는 조건. PRD 내 기능별 1~2줄로 포함. \"정리 버튼 누르면 10초 내 결과 표시\" 같은 형태."
  },
  {
    name: "User Story",
    nameEn: "사용자 관점 기능 정의",
    category: "doc",
    level: "useful",
    tags: [
      { text: "유저 스토리", color: "purple" }
    ],
    desc: "\"사용자로서 나는 ~를 하고 싶다, 왜냐하면 ~하기 위해서\"라는 형식. PRD에 포함."
  },
  {
    name: "Edge Case",
    nameEn: "예외 상황 정의",
    category: "doc",
    level: "useful",
    tags: [
      { text: "엣지 케이스", color: "purple" }
    ],
    desc: "정상적이지 않은 사용 상황을 미리 정의. \"빈 텍스트로 정리 버튼 누르면?\" 같은 것. AC와 짝으로 다님."
  },
  {
    name: "IA",
    nameEn: "Information Architecture · 정보 구조도",
    category: "doc",
    level: "reference",
    tags: [
      { text: "아이에이", color: "purple" }
    ],
    desc: "앱 전체 페이지/섹션 구조를 트리 형태로 그린 것. 네비게이션 설계의 기반."
  },
  {
    name: "ERD",
    nameEn: "Entity Relationship Diagram · 개체 관계 다이어그램",
    category: "doc",
    level: "reference",
    tags: [
      { text: "이알디", color: "purple" }
    ],
    desc: "DB 테이블 간의 관계를 시각화. Tech Spec의 하위 산출물."
  },
  {
    name: "API Spec",
    nameEn: "API Specification · API 명세서",
    category: "doc",
    level: "reference",
    tags: [
      { text: "에이피아이 스펙", color: "purple" }
    ],
    desc: "API 엔드포인트 목록과 요청/응답 형태 정의. Swagger/OpenAPI로 자동 생성 가능."
  },
  {
    name: "FRD",
    nameEn: "Functional Requirements Document · 기능 요구사항 문서",
    category: "doc",
    level: "reference",
    tags: [
      { text: "에프알디", color: "purple" }
    ],
    desc: "PRD보다 더 상세한 기능별 명세. 대기업/외주용. 1인 개발에서는 PRD로 대체."
  },
  // ===== 방법론 (method) =====
  {
    name: "PDCA",
    nameEn: "Plan → Do → Check → Act",
    category: "method",
    level: "essential",
    tags: [
      { text: "피디씨에이", color: "purple" },
      { text: "계획-실행-확인-개선 순환", color: "teal" }
    ],
    desc: "가장 범용적 방법론. 프로세스 전체를 관통하는 사고방식. 별도로 \"적용\"하는 게 아니라 반복하는 것 자체가 PDCA."
  },
  {
    name: "Lean Startup",
    nameEn: "Build → Measure → Learn",
    category: "method",
    level: "essential",
    tags: [
      { text: "린 스타트업", color: "purple" }
    ],
    desc: "MVP 기반 시장 검증. 신규 제품에 최적. Build(만들고) → Measure(측정하고) → Learn(배우기) 반복."
  },
  {
    name: "Kanban",
    nameEn: "작업 흐름 시각화 관리",
    category: "method",
    level: "essential",
    tags: [
      { text: "칸반", color: "purple" }
    ],
    desc: "작업을 보드에 시각화하여 흐름 관리. Trello/Notion 보드가 이것. 1인 개발에 가장 실용적."
  },
  {
    name: "Agile / Scrum",
    nameEn: "민첩한 개발 / 스프린트 기반 반복",
    category: "method",
    level: "useful",
    tags: [
      { text: "애자일 / 스크럼", color: "purple" }
    ],
    desc: "Agile은 짧은 주기 반복 개발 철학. Scrum은 2주 스프린트 단위 구현. 팀용이나 \"짧은 주기 결과물\" 원칙은 차용 가능."
  },
  {
    name: "Waterfall",
    nameEn: "폭포수 모델 · 순차적 단계 진행",
    category: "method",
    level: "reference",
    tags: [
      { text: "워터폴", color: "purple" }
    ],
    desc: "순차적 단계 진행, 되돌아가지 않음. 요구사항이 확정된 외주/SI에 적합. 신규 제품에는 비추."
  },
  {
    name: "Spiral",
    nameEn: "나선형 모델 · 리스크 기반 반복",
    category: "method",
    level: "reference",
    tags: [
      { text: "스파이럴", color: "purple" }
    ],
    desc: "반복마다 리스크 분석을 선행. 대형 프로젝트용."
  },
  // ===== 프로세스 단계 (phase) =====
  {
    name: "Ideation",
    nameEn: "아이디어 발상",
    category: "phase",
    level: "essential",
    tags: [
      { text: "아이디에이션", color: "purple" }
    ],
    desc: "아이디어를 발상하고 정제하는 첫 번째 단계."
  },
  {
    name: "Discovery",
    nameEn: "시장/경쟁/사용자 조사",
    category: "phase",
    level: "essential",
    tags: [
      { text: "디스커버리", color: "purple" },
      { text: "= Research", color: "teal" }
    ],
    desc: "시장 조사, 경쟁 분석, 사용자 니즈 파악. 0순위로 해야 하는 단계."
  },
  {
    name: "Prototyping",
    nameEn: "시제품 제작",
    category: "phase",
    level: "essential",
    tags: [
      { text: "프로토타이핑", color: "purple" }
    ],
    desc: "실제 코드 전에 동작하는 시제품 제작. MVP와 다른 점은 MVP는 출시 가능 제품, Prototype은 검증용."
  },
  {
    name: "Retrospective",
    nameEn: "회고",
    category: "phase",
    level: "essential",
    tags: [
      { text: "레트로스펙티브", color: "purple" }
    ],
    desc: "\"내 작업 방식을 어떻게 고칠까\"를 정리. Iteration이 제품 개선이라면, 이건 프로세스 개선."
  },
  // ===== Discovery 단계 용어 (discovery) =====
  {
    name: "Problem Statement",
    nameEn: "문제 정의",
    category: "discovery",
    level: "essential",
    tags: [
      { text: "프라블럼 스테이트먼트", color: "purple" }
    ],
    desc: "\"무슨 문제를 푸는가\"를 한 문장으로 정의. 이게 명확하지 않으면 기획이 산으로 감."
  },
  {
    name: "Value Proposition",
    nameEn: "가치 제안",
    category: "discovery",
    level: "essential",
    tags: [
      { text: "밸류 프로포지션", color: "purple" }
    ],
    desc: "\"이 제품이 사용자에게 주는 핵심 가치가 뭔가\"를 한 문장으로. Problem Statement의 답."
  },
  {
    name: "User Persona",
    nameEn: "사용자 가상 인물",
    category: "discovery",
    level: "useful",
    tags: [
      { text: "유저 페르소나", color: "purple" }
    ],
    desc: "타겟 사용자를 구체적 가상 인물로 정의. \"28세, 프리랜서, ADHD 진단\" 같은 식."
  },
  {
    name: "TAM / SAM / SOM",
    nameEn: "시장 규모 분석",
    category: "discovery",
    level: "useful",
    tags: [
      { text: "탐/샘/솜", color: "purple" }
    ],
    desc: "TAM(전체 시장), SAM(접근 가능 시장), SOM(실제 확보 가능 시장). 투자 유치 시 필수."
  },
  {
    name: "Feasibility Study",
    nameEn: "타당성 분석",
    category: "discovery",
    level: "useful",
    tags: [
      { text: "피저빌리티 스터디", color: "purple" }
    ],
    desc: "기술적으로 만들 수 있는가, 비용 대비 수익이 나는가 사전 검토."
  },
  {
    name: "User Interview / Survey",
    nameEn: "사용자 인터뷰/설문",
    category: "discovery",
    level: "useful",
    tags: [
      { text: "유저 인터뷰/서베이", color: "purple" }
    ],
    desc: "실제 타겟 사용자에게 직접 물어보는 것. 커뮤니티에 간단한 설문 하나 올리는 것만으로도 가치 있음."
  },
  {
    name: "Competitive Analysis",
    nameEn: "경쟁 분석",
    category: "discovery",
    level: "useful",
    tags: [
      { text: "컴피티티브 어낼리시스", color: "purple" }
    ],
    desc: "비슷한 제품이 뭐가 있고 어떻게 다른지 분석."
  },
  // ===== 기획 문서 추가 (doc) =====
  {
    name: "Sitemap",
    nameEn: "사이트맵 · URL 구조",
    category: "doc",
    level: "useful",
    tags: [
      { text: "사이트맵", color: "purple" }
    ],
    desc: "IA보다 구체적. 실제 라우팅 경로를 정의. \"/dashboard\", \"/note/:id\" 같은 구조."
  },
  {
    name: "Data Flow Diagram",
    nameEn: "데이터 흐름도",
    category: "doc",
    level: "useful",
    tags: [
      { text: "데이터 플로우 다이어그램", color: "purple" }
    ],
    desc: "데이터가 시스템 안에서 어떻게 흘러가는지의 도식."
  },
  {
    name: "Third-party Integration 목록",
    nameEn: "외부 서비스 연동 목록",
    category: "doc",
    level: "useful",
    tags: [
      { text: "서드파티 인테그레이션", color: "purple" }
    ],
    desc: "AI API, 인증, 결제 등 외부 서비스 연동 목록을 미리 정리."
  },
  {
    name: "SRS",
    nameEn: "Software Requirements Specification · 소프트웨어 요구사항 명세서",
    category: "doc",
    level: "reference",
    tags: [
      { text: "에스알에스", color: "purple" }
    ],
    desc: "FRD의 엔지니어링 버전. 대형 프로젝트용."
  },
  {
    name: "Design System",
    nameEn: "디자인 시스템",
    category: "doc",
    level: "reference",
    tags: [
      { text: "디자인 시스템", color: "purple" }
    ],
    desc: "색상, 타이포그래피, 컴포넌트 규칙 모음. MVP에서는 Tailwind 기본값으로 대체 가능."
  },
  // ===== 방법론 추가 (method) =====
  {
    name: "XP",
    nameEn: "Extreme Programming · 익스트림 프로그래밍",
    category: "method",
    level: "useful",
    tags: [
      { text: "익스트림 프로그래밍", color: "purple" }
    ],
    desc: "테스트 주도 개발, 짧은 릴리즈. 팀용이나 TDD 개념은 가져갈 만함."
  },
  {
    name: "Shape Up",
    nameEn: "쉐이프 업",
    category: "method",
    level: "useful",
    tags: [
      { text: "쉐이프 업", color: "purple" }
    ],
    desc: "6주 사이클 + 쿨다운. Basecamp가 만든 방법론. 스코프 관리에 강점."
  },
  // ===== 프로세스 단계 추가 (phase) =====
  {
    name: "Planning",
    nameEn: "플래닝 · 기획",
    category: "phase",
    level: "essential",
    tags: [
      { text: "플래닝", color: "purple" }
    ],
    desc: "PRD 작성, 화면 설계, 기술 결정을 하는 단계."
  },
  {
    name: "Design",
    nameEn: "디자인 · UI/UX 설계",
    category: "phase",
    level: "essential",
    tags: [
      { text: "디자인", color: "purple" }
    ],
    desc: "Wireframe을 실제 UI로 발전시키는 단계. MVP에선 Planning과 합쳐지기도 함."
  },
  {
    name: "Development",
    nameEn: "디벨롭먼트 · 개발/코딩",
    category: "phase",
    level: "essential",
    tags: [
      { text: "디벨롭먼트", color: "purple" },
      { text: "= Implementation", color: "teal" }
    ],
    desc: "기획에 따라 실제 코드를 작성하는 단계."
  },
  {
    name: "QA",
    nameEn: "큐에이 · 품질 검증",
    category: "phase",
    level: "essential",
    tags: [
      { text: "큐에이", color: "purple" },
      { text: "= Testing", color: "teal" }
    ],
    desc: "만든 게 제대로 동작하는지 검증하는 단계."
  },
  {
    name: "Launch",
    nameEn: "런치 · 배포/출시",
    category: "phase",
    level: "essential",
    tags: [
      { text: "런치", color: "purple" },
      { text: "= Deployment", color: "teal" }
    ],
    desc: "완성된 제품을 사용자가 접근할 수 있게 배포하는 단계."
  },
  {
    name: "Iteration",
    nameEn: "이터레이션 · 반복 개선",
    category: "phase",
    level: "essential",
    tags: [
      { text: "이터레이션", color: "purple" },
      { text: "= Improvement", color: "teal" }
    ],
    desc: "사용자 피드백과 데이터 기반으로 제품을 반복 개선."
  },
  // ===== Development 실무 (devpractice) =====
  {
    name: "CI/CD",
    nameEn: "Continuous Integration / Continuous Deployment",
    category: "devpractice",
    level: "essential",
    tags: [
      { text: "씨아이씨디", color: "purple" },
      { text: "지속적 통합/배포", color: "teal" }
    ],
    desc: "코드 푸시하면 자동으로 테스트 실행하고 배포까지 되는 파이프라인. GitHub Actions, Vercel 자동 배포 등."
  },
  {
    name: "Version Control",
    nameEn: "코드 버전 관리",
    category: "devpractice",
    level: "essential",
    tags: [
      { text: "버전 컨트롤", color: "purple" }
    ],
    desc: "Git 기반 코드 버전 관리. 브랜치 전략, 커밋 컨벤션 포함."
  },
  {
    name: "Refactoring",
    nameEn: "코드 구조 개선",
    category: "devpractice",
    level: "essential",
    tags: [
      { text: "리팩토링", color: "purple" }
    ],
    desc: "동작은 바꾸지 않으면서 코드 구조를 개선. Technical Debt를 갚는 구체적 행위."
  },
  {
    name: "Technical Debt",
    nameEn: "기술 부채",
    category: "devpractice",
    level: "essential",
    tags: [
      { text: "테크니컬 뎃", color: "purple" }
    ],
    desc: "\"지금은 대충 만들었지만 나중에 고쳐야 할 것들\"의 목록. 추적하지 않으면 프로젝트가 커질수록 발목을 잡음."
  },
  {
    name: "DRY / KISS / YAGNI",
    nameEn: "코딩 핵심 원칙",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "드라이/키스/야그니", color: "purple" }
    ],
    desc: "DRY(반복하지 마라), KISS(단순하게), YAGNI(지금 필요 없는 거 만들지 마라). 1인 개발에서 YAGNI 특히 중요."
  },
  {
    name: "Architecture Pattern",
    nameEn: "앱 전체 코드 구조 설계",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "아키텍처 패턴", color: "purple" }
    ],
    desc: "MVC, MVVM, Clean Architecture 등. Tech Spec에서 결정하는 항목."
  },
  {
    name: "Error Handling",
    nameEn: "에러 처리 전략",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "에러 핸들링", color: "purple" }
    ],
    desc: "에러 발생 시 앱의 반응 전략. 사용자에게 뭘 보여줄지, 로그를 어디에 남길지."
  },
  {
    name: "Documentation",
    nameEn: "문서화",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "다큐멘테이션", color: "purple" }
    ],
    desc: "코드 주석, README, API 문서 등. CLAUDE.md도 여기에 해당. 미래의 자기 자신 또는 AI를 위한 투자."
  },
  {
    name: "Design Pattern",
    nameEn: "디자인 패턴 · 코드 레벨 정형화된 해법",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "디자인 패턴", color: "purple" }
    ],
    desc: "Singleton, Observer, Factory 등. 반복되는 문제를 푸는 정형화된 코드 해법."
  },
  {
    name: "Branching Strategy",
    nameEn: "브랜칭 스트래티지 · 브랜치 전략",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "브랜칭 스트래티지", color: "purple" }
    ],
    desc: "main/dev/feature 브랜치를 어떤 규칙으로 쓸지. 1인 개발에서는 main + feature면 충분."
  },
  {
    name: "Commit Convention",
    nameEn: "커밋 컨벤션 · 커밋 메시지 규칙",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "커밋 컨벤션", color: "purple" }
    ],
    desc: "\"feat: 정리 기능 추가\", \"fix: 로그인 버그 수정\" 같은 Conventional Commits 형식."
  },
  {
    name: "Versioning Strategy",
    nameEn: "버저닝 스트래티지 · 제품 버전 번호 규칙",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "버저닝 스트래티지", color: "purple" }
    ],
    desc: "Semantic Versioning(SemVer): v1.2.3에서 1=대규모 변경, 2=기능 추가, 3=버그 수정."
  },
  {
    name: "Linting / Formatting",
    nameEn: "린팅/포매팅 · 코드 스타일 자동 검사/정리",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "린팅/포매팅", color: "purple" }
    ],
    desc: "ESLint, Prettier 같은 도구. AI가 만든 코드 스타일을 통일."
  },
  {
    name: "Type Safety",
    nameEn: "타입 세이프티 · 타입 안전성",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "타입 세이프티", color: "purple" }
    ],
    desc: "TypeScript 같은 정적 타입 시스템 도입. 규모가 커질 제품이면 필수."
  },
  {
    name: "ORM",
    nameEn: "Object-Relational Mapping · DB-코드 매핑 도구",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "오알엠", color: "purple" }
    ],
    desc: "Prisma, Drizzle 등. SQL을 직접 쓸지 ORM을 쓸지는 Tech Spec에서 결정."
  },
  {
    name: "State Management",
    nameEn: "스테이트 매니지먼트 · 프론트엔드 상태 관리",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "스테이트 매니지먼트", color: "purple" }
    ],
    desc: "Zustand(클라이언트 상태) + TanStack Query(서버 상태) 조합이 현재 실무 표준."
  },
  {
    name: "Caching Strategy",
    nameEn: "캐싱 스트래티지 · 캐시 전략",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "캐싱 스트래티지", color: "purple" }
    ],
    desc: "자주 요청되는 데이터를 미리 저장. AI API 응답 캐싱으로 비용+속도 개선."
  },
  {
    name: "Queue / Background Job",
    nameEn: "큐/백그라운드 잡 · 백그라운드 작업 처리",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "큐/백그라운드 잡", color: "purple" }
    ],
    desc: "시간이 오래 걸리는 작업을 백그라운드에서 처리하는 구조."
  },
  {
    name: "WebSocket / SSE",
    nameEn: "웹소켓/에스에스이 · 실시간 통신",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "웹소켓/에스에스이", color: "purple" }
    ],
    desc: "실시간 양방향 통신. AI 스트리밍 응답에 SSE 사용."
  },
  {
    name: "Mock / Fixture / Seed Data",
    nameEn: "목/픽스처/시드 데이터",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "목/픽스처/시드", color: "purple" }
    ],
    desc: "Seed=개발용 더미, Fixture=테스트용 고정, Mock=외부 API 가짜 응답."
  },
  {
    name: "Database Seeding",
    nameEn: "디비 시딩 · 개발용 더미 데이터 삽입",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "디비 시딩", color: "purple" }
    ],
    desc: "빈 DB로 개발하면 화면 확인이 안 되므로 개발용 데이터를 넣는 것."
  },
  {
    name: "Logging",
    nameEn: "로깅 · 앱 내부 기록",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "로깅", color: "purple" }
    ],
    desc: "\"무슨 일이 일어났는지\" 기록. console.log의 체계화된 버전. 디버깅의 기반."
  },
  {
    name: "Code Review",
    nameEn: "코드 리뷰 · 코드 검토",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "코드 리뷰", color: "purple" }
    ],
    desc: "1인 개발에서는 AI에게 시키거나 하루 뒤 자기가 다시 보는 것."
  },
  {
    name: "Estimation",
    nameEn: "에스티메이션 · 공수 산정",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "에스티메이션", color: "purple" }
    ],
    desc: "각 기능을 만드는 데 얼마나 걸릴지 예측. 안 하면 항상 2~3배 걸림."
  },
  {
    name: "Scoping",
    nameEn: "스코핑 · 범위 설정",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "스코핑", color: "purple" }
    ],
    desc: "매 개발 주기마다 뭘 넣고 뭘 뺄지 결정하는 행위."
  },
  {
    name: "Dependency Management",
    nameEn: "디펜던시 매니지먼트 · 의존성 관리",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "디펜던시 매니지먼트", color: "purple" }
    ],
    desc: "package.json 등 외부 라이브러리 버전 관리. 프로젝트 수명에 직접 영향."
  },
  {
    name: "Environment Management",
    nameEn: "인바이런먼트 매니지먼트 · 환경 관리",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "인바이런먼트 매니지먼트", color: "purple" }
    ],
    desc: "dev/staging/prod 환경 분리. 환경변수(.env) 관리 포함."
  },
  {
    name: "File Upload / Storage",
    nameEn: "파일 업로드/스토리지 · 파일 저장 전략",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "파일 업로드/스토리지", color: "purple" }
    ],
    desc: "S3, Cloudflare R2, Supabase Storage 등. 초기 Tech Spec에서 결정."
  },
  {
    name: "API Rate Limiting",
    nameEn: "에이피아이 레이트 리미팅 · 외부 API 호출 제한",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "에이피아이 레이트 리미팅", color: "purple" }
    ],
    desc: "AI API 같은 외부 서비스 호출 횟수 제한 관리. 비용 폭탄 방지."
  },
  {
    name: "Licensing",
    nameEn: "라이선싱 · 라이선스 관리",
    category: "devpractice",
    level: "reference",
    tags: [
      { text: "라이선싱", color: "purple" }
    ],
    desc: "오픈소스 라이선스 확인(MIT vs GPL) + 내 제품의 라이선스 결정."
  },
  // ===== 설계 결정 (design-decision) =====
  {
    name: "i18n / L10n",
    nameEn: "Internationalization / Localization · 국제화/현지화",
    category: "design-decision",
    level: "useful",
    tags: [
      { text: "국제화/현지화", color: "purple" }
    ],
    desc: "다국어 지원 설계. 텍스트를 하드코딩하지 않고 언어 파일로 분리. 나중에 붙이려면 전체 코드를 뒤져야 함."
  },
  {
    name: "Security",
    nameEn: "보안",
    category: "design-decision",
    level: "useful",
    tags: [
      { text: "시큐리티", color: "purple" }
    ],
    desc: "인증/인가, 입력값 검증, CORS, HTTPS, SQL Injection 방어. Development 전반에 걸친 횡단 관심사."
  },
  {
    name: "Feature Flag",
    nameEn: "기능 스위치",
    category: "design-decision",
    level: "useful",
    tags: [
      { text: "피처 플래그", color: "purple" }
    ],
    desc: "기능을 코드에 넣어두되 스위치로 켜고 끌 수 있게 하는 기법. 점진적 출시나 A/B 테스트에 사용."
  },
  {
    name: "Offline Support / PWA",
    nameEn: "오프라인 서포트/피더블유에이",
    category: "design-decision",
    level: "useful",
    tags: [
      { text: "오프라인/PWA", color: "purple" }
    ],
    desc: "네트워크 없을 때 앱 동작 설계. 나중에 추가하려면 구조를 많이 바꿔야 함."
  },
  {
    name: "Notification Strategy",
    nameEn: "노티피케이션 스트래티지 · 알림 전략",
    category: "design-decision",
    level: "useful",
    tags: [
      { text: "노티피케이션 스트래티지", color: "purple" }
    ],
    desc: "푸시/이메일/인앱 알림 중 뭘 쓸지, 어떤 상황에서 보낼지."
  },
  {
    name: "Accessibility (a11y)",
    nameEn: "액세서빌리티 · 접근성",
    category: "design-decision",
    level: "useful",
    tags: [
      { text: "액세서빌리티", color: "purple" }
    ],
    desc: "장애 사용자도 쓸 수 있게 만드는 것. 스크린 리더, 키보드 네비게이션 등."
  },
  {
    name: "Scalability",
    nameEn: "스케일러빌리티 · 확장성",
    category: "design-decision",
    level: "useful",
    tags: [
      { text: "스케일러빌리티", color: "purple" }
    ],
    desc: "사용자 100명 vs 10만 명일 때 버틸 수 있는가의 설계."
  },
  {
    name: "Performance Optimization",
    nameEn: "퍼포먼스 옵티마이제이션 · 성능 최적화",
    category: "design-decision",
    level: "useful",
    tags: [
      { text: "퍼포먼스 옵티마이제이션", color: "purple" }
    ],
    desc: "로딩 속도, 번들 사이즈, DB 쿼리 최적화."
  },
  // ===== QA/테스트 (qa) =====
  {
    name: "Unit Test",
    nameEn: "함수 단위 테스트",
    category: "qa",
    level: "essential",
    tags: [
      { text: "유닛 테스트", color: "purple" }
    ],
    desc: "개별 함수/모듈이 올바르게 동작하는지 확인하는 가장 기본적인 테스트."
  },
  {
    name: "E2E Test",
    nameEn: "End-to-End Test · 전체 흐름 테스트",
    category: "qa",
    level: "useful",
    tags: [
      { text: "이투이 테스트", color: "purple" }
    ],
    desc: "사용자 관점에서 전체 흐름(가입→로그인→기능 사용)을 자동으로 테스트."
  },
  {
    name: "UAT",
    nameEn: "User Acceptance Testing · 사용자 수용 테스트",
    category: "qa",
    level: "useful",
    tags: [
      { text: "유에이티", color: "purple" }
    ],
    desc: "실제 사용자가 써보고 \"이거 괜찮다\"고 확인하는 테스트. 주변 2~3명에게 써보라고 하는 것."
  },
  {
    name: "Smoke Testing",
    nameEn: "핵심 기능 빠른 확인",
    category: "qa",
    level: "useful",
    tags: [
      { text: "스모크 테스팅", color: "purple" }
    ],
    desc: "배포 직후 핵심 기능만 빠르게 확인하는 최소한의 테스트."
  },
  {
    name: "Integration Test",
    nameEn: "인테그레이션 테스트 · 모듈 간 테스트",
    category: "qa",
    level: "useful",
    tags: [
      { text: "인테그레이션 테스트", color: "purple" }
    ],
    desc: "여러 모듈이 함께 올바르게 동작하는지 확인하는 테스트."
  },
  {
    name: "Regression Testing",
    nameEn: "리그레션 테스팅 · 회귀 테스트",
    category: "qa",
    level: "useful",
    tags: [
      { text: "리그레션 테스팅", color: "purple" }
    ],
    desc: "새 기능 추가 후 기존 기능이 안 깨졌는지 확인."
  },
  {
    name: "Cross-browser / Cross-device Testing",
    nameEn: "호환성 테스트",
    category: "qa",
    level: "useful",
    tags: [
      { text: "크로스 브라우저/디바이스", color: "purple" }
    ],
    desc: "크롬, 사파리, 모바일에서 다 동작하는지 확인."
  },
  {
    name: "Load Testing",
    nameEn: "로드 테스팅 · 부하 테스트",
    category: "qa",
    level: "reference",
    tags: [
      { text: "로드 테스팅", color: "purple" }
    ],
    desc: "동시 접속자가 많을 때 앱이 버티는지 테스트."
  },
  {
    name: "Testing Strategy",
    nameEn: "테스팅 스트래티지 · 테스트 전략",
    category: "qa",
    level: "useful",
    tags: [
      { text: "테스팅 스트래티지", color: "purple" }
    ],
    desc: "어떤 종류의 테스트를 어디까지 할지의 결정."
  },
  // ===== Launch/배포 (launch) =====
  {
    name: "Launch Checklist",
    nameEn: "배포 전 확인 목록",
    category: "launch",
    level: "essential",
    tags: [
      { text: "런치 체크리스트", color: "purple" }
    ],
    desc: "HTTPS, 에러 트래킹, 개인정보처리방침, OG 태그, 구글 서치 콘솔 등록 등 배포 전 확인 사항."
  },
  {
    name: "SEO",
    nameEn: "Search Engine Optimization · 검색 엔진 최적화",
    category: "launch",
    level: "essential",
    tags: [
      { text: "에스이오", color: "purple" }
    ],
    desc: "검색 엔진에 잘 노출되게 하는 것. meta 태그, OG 태그, sitemap.xml, robots.txt."
  },
  {
    name: "GTM Strategy",
    nameEn: "Go-To-Market · 시장 진입 전략",
    category: "launch",
    level: "useful",
    tags: [
      { text: "지티엠", color: "purple" }
    ],
    desc: "출시 후 어떻게 사용자를 모을지의 전략. Product Hunt, 커뮤니티 마케팅, SNS 전략 등."
  },
  {
    name: "Rollback Plan",
    nameEn: "이전 버전 복구 계획",
    category: "launch",
    level: "useful",
    tags: [
      { text: "롤백 플랜", color: "purple" }
    ],
    desc: "배포했는데 문제가 생겼을 때 이전 버전으로 되돌리는 계획."
  },
  {
    name: "Domain / DNS",
    nameEn: "도메인/디엔에스 · 도메인·DNS 설정",
    category: "launch",
    level: "essential",
    tags: [
      { text: "도메인/디엔에스", color: "purple" }
    ],
    desc: "도메인 구매, DNS 연결, SSL 인증서."
  },
  {
    name: "ASO",
    nameEn: "App Store Optimization · 앱스토어 최적화",
    category: "launch",
    level: "reference",
    tags: [
      { text: "에이에스오", color: "purple" }
    ],
    desc: "앱스토어용 SEO. 모바일 앱으로 확장할 경우 필요."
  },
  {
    name: "OG / Social Preview",
    nameEn: "Open Graph · 오지 태그 · SNS 공유 미리보기",
    category: "launch",
    level: "useful",
    tags: [
      { text: "오지 태그", color: "purple" }
    ],
    desc: "카톡이나 SNS에 링크 공유 시 미리보기 이미지와 설명."
  },
  {
    name: "Beta / Early Access",
    nameEn: "베타/얼리 억세스 · 사전 공개 전략",
    category: "launch",
    level: "useful",
    tags: [
      { text: "베타/얼리 억세스", color: "purple" }
    ],
    desc: "정식 출시 전 제한된 사용자에게 먼저 공개. Closed/Open Beta, Waitlist."
  },
  {
    name: "Onboarding UX",
    nameEn: "온보딩 유엑스 · 신규 사용자 첫 경험 설계",
    category: "launch",
    level: "useful",
    tags: [
      { text: "온보딩 유엑스", color: "purple" }
    ],
    desc: "신규 사용자 첫 경험. 튜토리얼, 샘플 데이터, 단계별 가이드."
  },
  {
    name: "Privacy Policy / ToS",
    nameEn: "프라이버시 폴리시/티오에스 · 개인정보처리방침/이용약관",
    category: "launch",
    level: "essential",
    tags: [
      { text: "프라이버시 폴리시", color: "purple" }
    ],
    desc: "한국에서 서비스하면 법적으로 필수."
  },
  // ===== 운영/개선 (ops) =====
  {
    name: "Monitoring",
    nameEn: "앱 내부 상태 추적",
    category: "ops",
    level: "essential",
    tags: [
      { text: "모니터링", color: "purple" }
    ],
    desc: "앱이 잘 돌아가는지, 에러는 없는지 추적. Sentry(에러), Google Analytics(행동)."
  },
  {
    name: "Analytics",
    nameEn: "사용자 행동 분석",
    category: "ops",
    level: "essential",
    tags: [
      { text: "애널리틱스", color: "purple" }
    ],
    desc: "사용자가 어떻게 쓰는지, 어디서 이탈하는지 추적. Lean의 Measure 단계."
  },
  {
    name: "Changelog",
    nameEn: "변경 이력",
    category: "ops",
    level: "useful",
    tags: [
      { text: "체인지로그", color: "purple" }
    ],
    desc: "버전별로 뭐가 바뀌었는지 기록. 사용자 공지 + 자기 기록 용도."
  },
  {
    name: "Incident Management",
    nameEn: "장애 관리",
    category: "ops",
    level: "useful",
    tags: [
      { text: "인시던트 매니지먼트", color: "purple" }
    ],
    desc: "서비스 장애 발생 시 대응 프로세스. 감지 → 원인 파악 → 해결 → 재발 방지."
  },
  {
    name: "Uptime Monitoring",
    nameEn: "업타임 모니터링 · 외부 접속 가능 여부 확인",
    category: "ops",
    level: "useful",
    tags: [
      { text: "업타임 모니터링", color: "purple" }
    ],
    desc: "서버가 살아있는지 외부에서 주기적으로 확인. UptimeRobot 등."
  },
  {
    name: "Cost Monitoring",
    nameEn: "코스트 모니터링 · 비용 추적",
    category: "ops",
    level: "useful",
    tags: [
      { text: "코스트 모니터링", color: "purple" }
    ],
    desc: "서버, AI API, DB 비용 추적. AI API 쓰는 제품에서 특히 중요."
  },
  {
    name: "Backup / Recovery",
    nameEn: "백업/리커버리 · 백업·복구",
    category: "ops",
    level: "useful",
    tags: [
      { text: "백업/리커버리", color: "purple" }
    ],
    desc: "DB 백업 전략. 사용자 데이터를 다루는 앱이면 MVP부터 필요."
  },
  {
    name: "Data Retention Policy",
    nameEn: "데이터 리텐션 폴리시 · 데이터 보관 정책",
    category: "ops",
    level: "useful",
    tags: [
      { text: "데이터 리텐션 폴리시", color: "purple" }
    ],
    desc: "사용자 데이터를 얼마나 오래 보관할지, 탈퇴하면 언제 삭제할지."
  },
  {
    name: "Deprecation Plan",
    nameEn: "디프리케이션 플랜 · 기능 폐기 계획",
    category: "ops",
    level: "useful",
    tags: [
      { text: "디프리케이션 플랜", color: "purple" }
    ],
    desc: "기존 기능이나 API를 없앨 때의 계획. 사전 공지 + 마이그레이션 경로 제공."
  },
  {
    name: "Migration Plan",
    nameEn: "마이그레이션 플랜 · 이행 계획",
    category: "ops",
    level: "useful",
    tags: [
      { text: "마이그레이션 플랜", color: "purple" }
    ],
    desc: "기술 스택 변경이나 DB 구조 변경 시의 이행 계획."
  },
  {
    name: "A/B Testing",
    nameEn: "에이비 테스팅 · 대조 실험",
    category: "ops",
    level: "useful",
    tags: [
      { text: "에이비 테스팅", color: "purple" }
    ],
    desc: "두 가지 버전을 만들어 어떤 게 더 나은지 데이터로 검증."
  },
  {
    name: "Churn Analysis",
    nameEn: "턴 어낼리시스 · 이탈 분석",
    category: "ops",
    level: "useful",
    tags: [
      { text: "턴 어낼리시스", color: "purple" }
    ],
    desc: "사용자가 왜 떠나는지 분석."
  },
  {
    name: "Feature Request Management",
    nameEn: "피처 리퀘스트 매니지먼트 · 기능 요청 관리",
    category: "ops",
    level: "useful",
    tags: [
      { text: "피처 리퀘스트 매니지먼트", color: "purple" }
    ],
    desc: "사용자 기능 요청을 수집하고 우선순위 매기는 체계. Canny, GitHub Issues."
  },
  {
    name: "Rate Limiting (사용자 측)",
    nameEn: "레이트 리미팅 · 사용자 요청 횟수 제한",
    category: "ops",
    level: "useful",
    tags: [
      { text: "레이트 리미팅", color: "purple" }
    ],
    desc: "무료 사용자는 하루 10회, 유료는 무제한 같은 설계."
  },
  {
    name: "SLA",
    nameEn: "Service Level Agreement · 에스엘에이 · 서비스 수준 계약",
    category: "ops",
    level: "reference",
    tags: [
      { text: "에스엘에이", color: "purple" }
    ],
    desc: "\"99.9% 가동 보장\" 같은 서비스 가용성 보장. B2B 계약에 포함."
  },
  {
    name: "Legal / Compliance",
    nameEn: "리걸/컴플라이언스 · 법적 준수",
    category: "ops",
    level: "useful",
    tags: [
      { text: "리걸/컴플라이언스", color: "purple" }
    ],
    desc: "개인정보보호법, 이용약관, 쿠키 동의 등."
  },
  // ===== 산업분야 특화 용어 =====
  {
    name: "GDD",
    nameEn: "Game Design Document · 게임 디자인 문서",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "지디디", color: "purple" },
      { text: "게임", color: "teal" }
    ],
    desc: "게임의 PRD에 해당. 코어 루프, 레벨 디자인, 밸런스, 아트 스타일, 수익화 모델을 포함하는 게임 기획서."
  },
  {
    name: "Core Loop",
    nameEn: "코어 루프 · 핵심 반복 메카닉",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "코어 루프", color: "purple" },
      { text: "게임", color: "teal" }
    ],
    desc: "게임의 핵심 반복 행동. \"전투→보상→강화→더 어려운 전투\" 같은 순환 구조. 이게 없으면 게임이 성립 안 됨."
  },
  {
    name: "Pipeline 설계서",
    nameEn: "파이프라인 설계서 · 자동화 흐름 설계",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "파이프라인 설계서", color: "purple" },
      { text: "자동화", color: "teal" }
    ],
    desc: "자동화의 PRD에 해당. 데이터 소스 → 처리 → 출력의 전체 흐름과 에러 처리 전략을 정의."
  },
  {
    name: "CPM / RPM",
    nameEn: "Cost Per Mille / Revenue Per Mille",
    category: "ops",
    level: "useful",
    tags: [
      { text: "씨피엠/알피엠", color: "purple" },
      { text: "콘텐츠", color: "teal" }
    ],
    desc: "CPM은 광고 1000회 노출당 비용, RPM은 1000회 조회당 크리에이터 수익. 니치별 차이 10배(금융 $20~50 vs 엔터 $2~5)."
  },
  {
    name: "Deep Link",
    nameEn: "딥링크 · 앱 내 특정 화면 직접 이동",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "딥링크", color: "purple" },
      { text: "모바일", color: "teal" }
    ],
    desc: "외부 링크에서 앱의 특정 화면으로 바로 이동. 마케팅/공유에 필수. iOS는 Universal Link, Android는 App Link."
  },
  {
    name: "Content ID",
    nameEn: "콘텐츠 아이디 · 저작권 자동 매칭",
    category: "launch",
    level: "useful",
    tags: [
      { text: "콘텐츠 아이디", color: "purple" },
      { text: "콘텐츠", color: "teal" }
    ],
    desc: "유튜브의 저작권 자동 매칭 시스템. AI 생성 콘텐츠도 기존 저작물과 매칭될 수 있어 업로드 전 확인 필요."
  },
  {
    name: "CTR",
    nameEn: "Click-Through Rate · 클릭률",
    category: "ops",
    level: "useful",
    tags: [
      { text: "씨티알", color: "purple" },
      { text: "콘텐츠", color: "teal" }
    ],
    desc: "노출 대비 클릭 비율. 유튜브 CTR 4% 이상이 건강. 썸네일+제목이 CTR의 90%를 결정."
  },
  {
    name: "Idempotency",
    nameEn: "멱등성 · 중복 실행 안전성",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "멱등성", color: "purple" },
      { text: "자동화", color: "teal" }
    ],
    desc: "같은 작업이 중복 실행돼도 결과가 동일한 성질. 자동화에서 결제/포스팅 중복 방지에 핵심."
  },
  // ===== 추가 용어: 방법론 (method) =====
  {
    name: "MoSCoW",
    nameEn: "Must / Should / Could / Won't",
    category: "method",
    level: "essential",
    tags: [
      { text: "모스코우", color: "purple" }
    ],
    desc: "기능 우선순위를 4등급으로 분류하는 방법. Must(필수), Should(중요), Could(있으면 좋은), Won't(이번에 안 함). MVP 범위를 결정할 때 핵심 도구."
  },
  {
    name: "Build in Public",
    nameEn: "빌드 인 퍼블릭 · 개발 과정 공개",
    category: "method",
    level: "useful",
    tags: [
      { text: "빌드 인 퍼블릭", color: "purple" }
    ],
    desc: "개발 과정을 SNS/블로그에 공개하며 팔로워를 모으는 전략. 트위터/X, 디스콰이엇, 인디해커스에서 활발. 런치 때 팔로워가 초기 사용자가 됨."
  },
  // ===== 추가 용어: Development 실무 (devpractice) =====
  {
    name: "CRUD",
    nameEn: "Create Read Update Delete",
    category: "devpractice",
    level: "essential",
    tags: [
      { text: "크러드", color: "purple" }
    ],
    desc: "데이터의 4가지 기본 조작: 생성, 읽기, 수정, 삭제. 대부분의 앱이 결국 CRUD의 변형. DB 스키마 잡은 직후 핵심 CRUD부터 만들기."
  },
  {
    name: "SSR / SSG",
    nameEn: "Server-Side Rendering / Static Site Generation",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "에스에스알/에스에스지", color: "purple" }
    ],
    desc: "SSR은 서버에서 HTML을 매 요청마다 생성, SSG는 빌드 시 미리 생성. SEO가 중요하면 SSR/SSG 필수. Next.js가 둘 다 지원."
  },
  {
    name: "SemVer",
    nameEn: "Semantic Versioning · 시맨틱 버저닝",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "셈버", color: "purple" }
    ],
    desc: "v1.2.3 형식의 버전 번호 규칙. Major(호환 깨짐).Minor(기능 추가).Patch(버그 수정). npm 패키지와 자기 제품 모두에 적용."
  },
  {
    name: "Webhook",
    nameEn: "웹훅 · HTTP 콜백",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "웹훅", color: "purple" }
    ],
    desc: "이벤트 발생 시 지정된 URL로 HTTP 요청을 보내는 방식. Stripe 결제 완료, GitHub 푸시 알림 등에서 사용. 외부 서비스 연동의 핵심."
  },
  {
    name: "JWT",
    nameEn: "JSON Web Token · 인증 토큰",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "제이더블유티", color: "purple" }
    ],
    desc: "사용자 인증 정보를 담은 토큰. 서버 세션 없이 stateless 인증 가능. Tech Spec에서 \"JWT vs 세션\" 결정이 필요."
  },
  {
    name: "CTA",
    nameEn: "Call To Action · 행동 유도 버튼",
    category: "devpractice",
    level: "useful",
    tags: [
      { text: "씨티에이", color: "purple" }
    ],
    desc: "사용자가 취하길 원하는 핵심 행동을 유도하는 버튼/링크. \"시작하기\", \"무료 체험\" 같은 것. 한 화면에 CTA는 하나가 원칙."
  },
  // ===== 추가 용어: 설계 결정 (design-decision) =====
  {
    name: "Paywall",
    nameEn: "페이월 · 유료 장벽",
    category: "design-decision",
    level: "useful",
    tags: [
      { text: "페이월", color: "purple" }
    ],
    desc: "특정 기능이나 콘텐츠에 접근하려면 결제가 필요한 장벽. Hard Paywall(완전 차단) vs Soft Paywall(일부 무료) 설계가 전환율에 직결."
  },
  // ===== 추가 용어: 운영/개선 (ops) =====
  {
    name: "PMF",
    nameEn: "Product-Market Fit · 제품-시장 적합성",
    category: "ops",
    level: "essential",
    tags: [
      { text: "피엠에프", color: "purple" }
    ],
    desc: "제품이 시장의 진짜 니즈를 충족하는 상태. \"이 제품이 없어지면 매우 실망한다\" 응답 40% 이상이면 PMF. 이걸 달성하기 전에는 스케일링하지 말 것."
  },
  {
    name: "MRR / ARR",
    nameEn: "Monthly / Annual Recurring Revenue · 월간/연간 반복 수익",
    category: "ops",
    level: "essential",
    tags: [
      { text: "엠알알/에이알알", color: "purple" }
    ],
    desc: "SaaS의 기본 건강 지표. MRR = 유료 사용자 수 × 평균 결제 금액. ARR = MRR × 12. 투자자와 대화할 때 첫 번째로 묻는 숫자."
  },
  {
    name: "DAU / MAU",
    nameEn: "Daily / Monthly Active Users · 일간/월간 활성 사용자",
    category: "ops",
    level: "essential",
    tags: [
      { text: "디에이유/엠에이유", color: "purple" }
    ],
    desc: "실제로 앱을 쓰고 있는 사용자 수. DAU/MAU 비율이 높을수록 습관화된 제품. 소셜은 50%+, SaaS 도구는 20~30%가 양호."
  },
  {
    name: "LTV",
    nameEn: "Customer Lifetime Value · 고객 생애 가치",
    category: "ops",
    level: "essential",
    tags: [
      { text: "엘티브이", color: "purple" }
    ],
    desc: "고객 한 명이 전체 기간 동안 가져다주는 총 수익. LTV = ARPU ÷ 월간 이탈률. LTV/CAC ≥ 3이어야 건강한 사업."
  },
  {
    name: "CAC",
    nameEn: "Customer Acquisition Cost · 고객 획득 비용",
    category: "ops",
    level: "essential",
    tags: [
      { text: "씨에이씨", color: "purple" }
    ],
    desc: "고객 한 명을 데려오는 데 드는 비용. 마케팅비 ÷ 신규 고객 수. LTV/CAC < 1이면 쓸수록 손해. 1인 개발자는 무료 채널로 CAC를 0에 가깝게 유지하는 게 핵심."
  },
  {
    name: "Burn Rate / Runway",
    nameEn: "월간 지출 속도 / 남은 생존 기간",
    category: "ops",
    level: "essential",
    tags: [
      { text: "번 레이트/런웨이", color: "purple" }
    ],
    desc: "Burn Rate는 매월 나가는 돈, Runway는 잔고 ÷ 월 지출로 계산한 생존 가능 개월 수. 6개월 미만이면 MVP 범위를 줄이거나 수익화를 앞당겨야 함."
  },
  {
    name: "NPS",
    nameEn: "Net Promoter Score · 순추천지수",
    category: "ops",
    level: "useful",
    tags: [
      { text: "엔피에스", color: "purple" }
    ],
    desc: "\"이 제품을 추천할 의향이 있습니까?\" 0~10 점수. 9~10=추천자, 7~8=중립, 0~6=비추천. 추천자% - 비추천% = NPS. 50 이상이면 우수."
  },
  {
    name: "ARPU",
    nameEn: "Average Revenue Per User · 사용자당 평균 수익",
    category: "ops",
    level: "useful",
    tags: [
      { text: "에이알피유", color: "purple" }
    ],
    desc: "전체 수익 ÷ 활성 사용자 수. LTV 계산의 기반이 되는 지표. 업셀/크로스셀로 ARPU를 올리는 게 새 사용자 유치보다 효율적일 때가 많음."
  },
  {
    name: "North Star Metric",
    nameEn: "노스 스타 메트릭 · 핵심 단일 지표",
    category: "ops",
    level: "useful",
    tags: [
      { text: "노스 스타 메트릭", color: "purple" }
    ],
    desc: "제품 핵심 가치를 대표하는 단 하나의 지표. SWAI면 \"주당 정리된 노트 수\". 이게 올라가면 다른 지표도 따라옴. 팀이든 혼자든 집중할 방향을 맞춰줌."
  },
  {
    name: "K-factor",
    nameEn: "케이팩터 · 바이럴 계수",
    category: "ops",
    level: "useful",
    tags: [
      { text: "케이팩터", color: "purple" }
    ],
    desc: "기존 사용자가 얼마나 새 사용자를 데려오는지의 계수. K > 1이면 자체 성장(바이럴). 레퍼럴 프로그램, 공유 기능 설계로 끌어올림."
  },
  {
    name: "Dunning",
    nameEn: "더닝 · 결제 실패 자동 재시도",
    category: "ops",
    level: "useful",
    tags: [
      { text: "더닝", color: "purple" }
    ],
    desc: "구독 결제 실패 시 자동으로 재시도하고 사용자에게 알림을 보내는 프로세스. Stripe가 기본 제공. 설정 안 하면 수익의 5~10%를 놓침."
  },
  {
    name: "Funnel",
    nameEn: "퍼널 · 전환 깔때기",
    category: "ops",
    level: "useful",
    tags: [
      { text: "퍼널", color: "purple" }
    ],
    desc: "사용자가 최종 목표(결제, 가입 등)에 도달하기까지의 단계별 흐름. 각 단계에서 이탈률을 측정하고 병목을 찾는 것이 핵심. AARRR이 대표적 퍼널 프레임워크."
  },
  {
    name: "AARRR",
    nameEn: "Acquisition → Activation → Retention → Revenue → Referral",
    category: "ops",
    level: "useful",
    tags: [
      { text: "에이에이알알알", color: "purple" },
      { text: "해적 지표", color: "teal" }
    ],
    desc: "스타트업 핵심 지표 프레임워크. 획득→활성화→유지→수익→추천 5단계. 각 단계마다 핵심 지표를 정의하고 병목을 찾아 개선."
  },
  {
    name: "Time to Value",
    nameEn: "타임 투 밸류 · 가치 도달 시간",
    category: "ops",
    level: "useful",
    tags: [
      { text: "타임 투 밸류", color: "purple" }
    ],
    desc: "사용자가 가입 후 \"아 이거 좋다\" 순간까지 걸리는 시간. 이걸 줄이는 게 온보딩 설계의 핵심. 가입→첫 가치 경험이 5분 이내여야 이상적."
  },
  {
    name: "Churn",
    nameEn: "이탈률",
    category: "ops",
    level: "useful",
    tags: [
      { text: "턴", color: "purple" }
    ],
    desc: "일정 기간 내 서비스를 떠난 사용자/구독자 비율. 월간 5% 미만이면 건강, 10% 이상이면 위험. Churn을 줄이는 게 새 사용자 유치보다 ROI가 높음."
  },
  {
    name: "Anchor Pricing",
    nameEn: "앵커 프라이싱 · 기준점 가격 설정",
    category: "ops",
    level: "useful",
    tags: [
      { text: "앵커 프라이싱", color: "purple" }
    ],
    desc: "비싼 플랜을 먼저 보여줘서 중간 플랜이 합리적으로 느껴지게 하는 심리 전략. 3단 가격표에서 가장 비싼 TEAM 플랜이 앵커 역할."
  },
  {
    name: "Grandfather Pricing",
    nameEn: "그랜드파더 프라이싱 · 초기 가격 보장",
    category: "ops",
    level: "useful",
    tags: [
      { text: "그랜드파더 프라이싱", color: "purple" }
    ],
    desc: "초기 사용자에게 가입 시점의 낮은 가격을 영구 유지해주는 정책. 가격 인상 시 기존 사용자 이탈을 방지하고 초기 충성도를 형성."
  }
];
