# Delper - 아키텍처 & 폴더 구조

## 폴더 구조
```
Delper/
├── index.html              ← 메인 HTML (~1,630줄, 10개 섹션)
├── og-image.jpg            ← OG 소셜 공유 이미지 (1200x630)
├── CLAUDE.md               ← Claude Code 프로젝트 가이드
├── css/
│   ├── variables.css       ← 테마 변수 (5개 테마 색상 정의)
│   ├── base.css            ← 리셋, 폰트, 스크롤바, 애니메이션, 인쇄 스타일
│   ├── layout.css          ← 사이드바, 메인 레이아웃, 반응형
│   ├── components.css      ← 카드, 뱃지, 아코디언, 체크리스트 등 재사용 컴포넌트
│   └── sections.css        ← 섹션 특화 스타일 (PDCA, 퍼널, 가격표, AI 탭/패널 등)
├── js/
│   ├── theme.js            ← 테마 전환 (localStorage 저장/복원)
│   ├── navigation.js       ← 섹션 전환, 사이드바 토글
│   ├── ui.js               ← 아코디언, 체크리스트, 산업 단계 토글
│   ├── glossary.js         ← 용어집 렌더링, 필터, 검색, 상호링크, 카운트
│   ├── bookmarks.js        ← 즐겨찾기 (localStorage CRUD)
│   ├── command.js          ← Ctrl+K 커맨드 팔레트 (통합 검색)
│   ├── techstack.js        ← 기술 스택 렌더링
│   ├── industry.js         ← 산업분야 탭/렌더링/치트키
│   └── app.js              ← 초기화 + AI 탭 전환 + 키보드 이벤트 바인딩
├── data/
│   ├── glossary-data.js    ← 용어집 150개 데이터 (GLOSSARY_DATA)
│   ├── industry-data.js    ← 산업분야 5개 데이터 (INDUSTRY_DATA, PLANNED_INDUSTRIES)
│   ├── tech-stack-data.js  ← 섹션 네비게이션 10개 + 기술 스택 검색 데이터 (SECTION_NAV_DATA, TECH_STACK_DATA)
│   └── tech-render-data.js ← 기술 스택 카테고리 데이터 (TECH_CATEGORIES)
└── docs/
    ├── PRD.md              ← 제품 요구사항 문서
    ├── ARCHITECTURE.md     ← 이 문서
    ├── DESIGN-SYSTEM.md    ← 디자인 시스템 (테마, 색상, 컴포넌트)
    ├── CODE-REFERENCE.md   ← 함수/클래스 레퍼런스
    ├── DECISIONS.md        ← 결정 사항 로그
    ├── CODING-RULES.md     ← 코딩 규칙
    ├── ROADMAP.md          ← 개발 예정 기능
    ├── TEST-PLAN.md        ← 테스트 계획
    ├── NETWORKING-BASICS.md ← 네트워크/인프라 기초 지식 정리
    └── AI-ASSISTANT.md     ← Add Delper AI 어시스턴트 기획
```

## 데이터 흐름
```
[data/*.js]  →  글로벌 상수 정의 (GLOSSARY_DATA, INDUSTRY_DATA 등)
     ↓
[js/app.js]  →  초기화 시 렌더링 함수 호출
     ↓
[js/glossary.js, js/techstack.js, js/industry.js]  →  데이터를 읽어 DOM 생성
     ↓
[index.html]  →  #glossaryList, #techStackList, #indContent 등에 삽입
```

## 스크립트 로드 순서 (의존성 순)
```html
<!-- 1. 데이터 (의존성 없음) -->
<script src="data/glossary-data.js"></script>
<script src="data/industry-data.js"></script>
<script src="data/tech-stack-data.js"></script>
<script src="data/tech-render-data.js"></script>

<!-- 2. 기능 모듈 (데이터에 의존) -->
<script src="js/theme.js"></script>
<script src="js/navigation.js"></script>
<script src="js/ui.js"></script>
<script src="js/glossary.js"></script>
<script src="js/command.js"></script>
<script src="js/industry.js"></script>
<script src="js/techstack.js"></script>
<script src="js/bookmarks.js"></script>

<!-- 3. 초기화 + AI 탭 + 키보드 이벤트 (모든 모듈에 의존) -->
<script src="js/app.js"></script>
```

## 상태 관리
- **테마**: `localStorage('delper-theme')` → `data-theme` 속성
- **북마크**: `localStorage('delper-bookmarks')` → JSON 배열
- **현재 필터**: `currentFilter` 전역 변수 (glossary.js)
- **치트키 표시**: `cheatVisible` 전역 변수 (industry.js)
- **커맨드 팔레트 인덱스**: `cmdItems` 전역 배열 (command.js)

## 수정 가이드 (조립식)
| 하고 싶은 작업 | 수정할 파일 |
|---|---|
| 용어 추가/수정/삭제 | `data/glossary-data.js` |
| 산업분야 추가 | `data/industry-data.js` |
| 기술 스택 추가 | `data/tech-render-data.js` |
| 테마 색상 변경 | `css/variables.css` |
| 카드 디자인 변경 | `css/components.css` |
| 새 섹션 추가 | `index.html` + `data/tech-stack-data.js`(네비) |
| 검색 로직 변경 | `js/command.js` |
| 체크리스트 동작 변경 | `js/ui.js` |
