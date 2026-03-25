# Delper - 코딩 규칙

## 파일 구조 원칙
- **한 파일 = 한 책임**: CSS, JS, 데이터 절대 섞지 않음
- **데이터와 로직 분리**: 콘텐츠 데이터는 `data/`, 렌더링 로직은 `js/`
- **인라인 스타일 최소화**: 필요한 경우에만 (퍼널 max-width 등 동적 값)
- **인라인 스크립트 금지**: 모든 JS는 외부 파일로

## CSS 규칙
- **CSS 커스텀 프로퍼티 사용**: 하드코딩 색상 금지. 반드시 `var(--...)` 사용
- **테마 호환성**: 새 색상 추가 시 5개 테마 전부에 변수 정의
- **BEM-like 네이밍**: `.component`, `.component-element`, `.component--modifier`
  - 예: `.pricing-card`, `.pricing-card-title`, `.pricing-card--popular`
- **파일별 역할**:
  - `variables.css`: 변수만 (셀렉터는 `[data-theme]`과 `:root`만)
  - `base.css`: 태그 셀렉터만 (html, body, a, code 등)
  - `layout.css`: `.layout`, `.sidebar`, `.main` 관련만
  - `components.css`: 재사용 가능한 UI 컴포넌트
  - `sections.css`: 특정 섹션에서만 쓰이는 스타일

## JS 규칙
- **글로벌 함수**: `import/export` 사용하지 않음 (file:// 호환)
- **함수 네이밍**: camelCase, 동사로 시작 (`renderGlossary`, `toggleCheat`)
- **상수 네이밍**: UPPER_SNAKE_CASE (`GLOSSARY_DATA`, `INDUSTRY_DATA`)
- **DOM 조작**: `getElementById`, `querySelector`, `querySelectorAll` 사용
- **이벤트 바인딩**: HTML `onclick` 속성 사용 (심플한 구조에 적합)
- **localStorage 키 접두사**: `delper-` (예: `delper-theme`, `delper-bookmarks`)

## 데이터 파일 규칙
- **파일당 하나의 상수**: `glossary-data.js`에는 `GLOSSARY_DATA`만
- **순수 데이터**: 함수나 DOM 조작 없음
- **카테고리 정렬**: 같은 category끼리 묶어서 정렬
- **설명 스타일**: 1인 개발자 관점, 한국어 + 영어 용어, 실용적 톤

## HTML 규칙
- **시맨틱 태그**: `<section>`, `<aside>`, `<main>`, `<nav>` 사용
- **섹션 ID 컨벤션**: `sec-{이름}` (예: `sec-dashboard`, `sec-glossary`)
- **접근성**: 버튼에 `aria-label`, 의미있는 heading 계층

## 커밋 규칙
- **메시지 포맷**: `feat:`, `fix:`, `refactor:`, `docs:`, `style:` 접두사
- **Co-Authored-By**: Claude 작업 시 포함
- **커밋 단위**: 논리적 작업 단위로 (기능 하나 = 커밋 하나)

## 병렬 작업 규칙
- 서로 다른 파일을 수정하는 작업은 병렬 가능
- 같은 파일의 같은 영역을 수정하는 작업은 순차 실행
- 충돌 가능성이 있으면 반드시 순차
