# Delper - 코드 레퍼런스

## 글로벌 상수 (data/ 폴더)

### GLOSSARY_DATA (glossary-data.js)
```js
Array<{
  name: string,          // "PRD"
  nameEn: string,        // "Product Requirements Document"
  category: string,      // "doc" | "method" | "phase" | "discovery" | "devpractice" | "design-decision" | "qa" | "launch" | "ops"
  level: string,         // "essential" | "useful" | "reference"
  tags: Array<{text: string, color: string}>,  // [{text: "피알디", color: "purple"}]
  desc: string           // 설명 텍스트
}>
```
현재 150개+. 카테고리별 필터 + 검색 + 북마크 지원.

### INDUSTRY_DATA (industry-data.js)
```js
Object<string, {
  name: string,          // "웹앱 (SaaS)"
  icon: string,          // "🌐"
  steps: Array<{title, sub, color, content, cheats}>,
  stack: string,
  legal: string,
  growth: string,
  scaling: string,
  exit: string
}>
```
키: webapp, game, automation, mobile, content

### PLANNED_INDUSTRIES (industry-data.js)
```js
Array<{name: string, icon: string}>  // 예정된 산업분야 8개
```

### TECH_STACK_DATA (tech-stack-data.js)
```js
Array<string>  // 기술 이름 80개+ (커맨드 팔레트 검색용)
```

### SECTION_NAV_DATA (tech-stack-data.js)
```js
Array<{name: string, id: string, icon: string}>  // 9개 섹션 네비
```

### TECH_CATEGORIES (tech-render-data.js)
```js
Array<{
  title: string,         // "프론트엔드 프레임워크"
  color: string,         // "purple" | "teal" | "blue" 등
  items: Array<{name: string, desc: string}>,
  note?: string          // 선택적 참고 텍스트
}>
```

---

## 함수 레퍼런스

### theme.js
| 함수 | 설명 |
|------|------|
| `setTheme(theme)` | data-theme 설정, 버튼 active 토글, localStorage 저장 |
| IIFE | 페이지 로드 시 저장된 테마 복원 |

### navigation.js
| 함수 | 설명 |
|------|------|
| `showSection(id, scrollTo?)` | 섹션 전환. scrollTo 있으면 해당 아코디언 열고 스크롤 |
| `toggleSidebar()` | 모바일 사이드바 열기/닫기 |

### ui.js
| 함수 | 설명 |
|------|------|
| `toggleAccordion(header)` | 아코디언 열기/닫기 (maxHeight 애니메이션) |
| `toggleCheck(el)` | 체크리스트 항목 토글 (취소선 + checked 클래스) |
| `toggleIndStep(header)` | 산업분야 단계 아코디언 토글 |

### glossary.js
| 함수 | 설명 |
|------|------|
| `renderGlossary()` | GLOSSARY_DATA → DOM 렌더링 + 상호링크 + 카운트 업데이트 |
| `setGlossaryFilter(filter)` | 필터 변경 (all, bookmarked, doc, method 등) |
| `filterGlossary()` | 현재 필터 + 검색어로 용어 표시/숨김 |
| `updateFilterCounts()` | 필터 버튼의 개수 업데이트 |
| `updateBookmarkCount()` | 즐겨찾기 카운트 업데이트 |
| `addCrossLinks()` | 용어 설명에서 다른 용어 참조를 링크로 변환 |
| `scrollToTerm(name)` | 특정 용어로 스크롤 + 하이라이트 |

### bookmarks.js
| 함수 | 설명 |
|------|------|
| `getBookmarks()` | localStorage에서 북마크 배열 반환 |
| `toggleBookmark(type, name)` | 북마크 추가/제거 + UI 업데이트 |
| `isBookmarked(type, name)` | 북마크 여부 확인 |
| `updateBookmarkIcons()` | 모든 북마크 버튼 상태 동기화 |

### command.js
| 함수 | 설명 |
|------|------|
| `buildCmdIndex()` | 용어+기술+섹션+산업 통합 검색 인덱스 생성 |
| `filterTechStack()` | 기술 스택 섹션 내 검색 필터 |
| `openCmd()` | Ctrl+K 팔레트 열기 |
| `closeCmd()` | 팔레트 닫기 |
| `cmdSearch(q)` | 검색어로 결과 필터링 |
| `cmdHover(i)` | 키보드 선택 하이라이트 |
| `cmdSelect(i)` | 선택 항목 실행 |
| `cmdKeydown(e)` | 키보드 이벤트 (↑↓Enter Esc) |

### techstack.js
| 함수 | 설명 |
|------|------|
| `renderTechStack()` | TECH_CATEGORIES → DOM 렌더링 |

### industry.js
| 함수 | 설명 |
|------|------|
| `toggleCheat()` | 치트키 표시/숨김 + 열린 아코디언 높이 재계산 |
| `renderIndustry(key)` | 산업분야 콘텐츠 렌더링 |
| `initIndustry()` | 탭 생성 + webapp 기본 렌더링 |

### app.js
| 함수 | 설명 |
|------|------|
| `toggleHelp()` | F1 도움말 오버레이 토글 |
| DOMContentLoaded | renderGlossary → updateBookmarkIcons → renderTechStack → initIndustry → 키보드 이벤트 |

---

## 주요 DOM ID
| ID | 위치 | 용도 |
|----|------|------|
| `#glossaryList` | 용어집 섹션 | 용어 카드 렌더링 대상 |
| `#techStackList` | 기술 레퍼런스 | 기술 스택 렌더링 대상 |
| `#indTabs` | 산업분야 | 탭 버튼 렌더링 대상 |
| `#indContent` | 산업분야 | 산업 콘텐츠 렌더링 대상 |
| `#cmdOverlay` | 전역 | 커맨드 팔레트 오버레이 |
| `#cmdInput` | 커맨드 팔레트 | 검색 입력 |
| `#cmdResults` | 커맨드 팔레트 | 검색 결과 |
| `#helpOverlay` | 전역 | F1 도움말 오버레이 |
| `#mobOverlay` | 전역 | 모바일 사이드바 배경 |
| `#sidebar` | 전역 | 사이드바 |
| `#glossaryTotal` | 용어집 | 총 용어 수 표시 |
| `#bookmarkCount` | 용어집 필터 | 즐겨찾기 수 표시 |
