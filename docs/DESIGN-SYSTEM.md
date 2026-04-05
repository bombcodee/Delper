# Delper - 디자인 시스템

## 테마 (5종)

### Dark (기본) - Soft Charcoal
- 부드러운 네이비-차콜 계열. 순수 블랙 아님.
- bg: `#13141d` ~ `#1e2130`, 텍스트: `#e8e8ed`
- 액센트: `#8b5cf6` (보라)
- 용도: 기본 다크 테마, 장시간 읽기에 편안

### Midnight - Deep Dark
- Dark보다 더 깊은 톤. 별빛 밤하늘 느낌.
- bg: `#0b0c14` ~ `#131522`, 텍스트: `#e4e4ea`
- 액센트: `#a78bfa` (연보라, 대비를 위해 밝게)
- 용도: 진한 다크 선호 사용자

### Spring - Warm Cream
- 따뜻한 크림/베이지. 절대 순수 화이트 아님.
- bg: `#f7f2e8` ~ `#fffdf8`, 텍스트: `#33291e` (따뜻한 갈색)
- 액센트: `#7d5fb5` (따뜻한 보라)
- 용도: 부드러운 라이트 테마

### Blossom - Cherry Blossom
- 핑크/라벤더 톤. 봄꽃 느낌.
- bg: `#f9f3f7` ~ `#fefcfd`, 텍스트: `#302030` (플럼)
- 액센트: `#9b6bb5` (오키드)
- 용도: 부드럽고 로맨틱한 느낌

### Sky - Clear Sky
- 아이스 블루 계열. 맑은 하늘.
- bg: `#f2f7fc` ~ `#fafcff`, 텍스트: `#1a2940` (네이비)
- 액센트: `#5872b8` (슬레이트 블루)
- 용도: 시원하고 청량한 느낌

## CSS 변수 체계
```
--bg-1          메인 배경
--bg-2          사이드바/서피스 배경
--bg-3          강조 배경 (코드 블록 등)
--bg-hover      호버 배경
--bg-card       카드 배경
--tx-1/2/3      텍스트 (주/부/보조)
--bd / --bd-h   테두리 (기본/호버)
--purple        메인 액센트 + -bg(배경) + -glow(글로우)
--green/blue/amber/red/teal/coral/pink  시맨틱 색상 + -bg 변수
--shadow-card / --shadow-card-hover     카드 그림자
--glass-bg / --glass-border             글래스모피즘 (오버레이용)
--font-main     Noto Sans KR
--font-mono     JetBrains Mono
--sidebar-w     272px
--tr / --tr-fast  트랜지션 속도
--radius-md / --radius-pill  둥근 모서리
```

## 컴포넌트

### .card
카드 컨테이너. 호버 시 border 변경 + 살짝 떠오르는 효과.
- `border-radius: 12px`, `padding: 24px`
- 호버: `translateY(-2px)` + 그림자 강화

### .badge (뱃지)
인라인 태그. 변형: `-essential`(초록), `-useful`(파랑), `-reference`(회색), `-caution`(앰버)

### .tag (태그)
용어 태그. 변형: `-purple`, `-teal`, `-blue`

### .accordion (아코디언)
클릭 접기/펼치기. `maxHeight` 트랜지션. `.open` 클래스로 상태 관리.

### .checklist (체크리스트)
`<li>` 클릭 시 `.checked` 토글 → 취소선 + 흐림 처리.

### .funnel (퍼널)
내림차순 너비로 깔때기 시각화. 각 단계 `max-width` 인라인 지정.

### .bench-table (벤치마크 테이블)
KPI 테이블. `.bench-good`(초록), `.bench-bad`(빨강), `.bench-tip`(개선 방법)

### .bookmark-btn (북마크 리본)
카드 우측 상단 리본 형태. CSS `clip-path`로 깃발 모양. `.bookmarked` 시 앰버.

### .cmd-overlay / .cmd-box (커맨드 팔레트)
글래스모피즘 오버레이. `backdrop-filter: blur`.

### .ai-tab (AI 탭 버튼)
AI & 자동화 섹션의 탭 전환 버튼. `.active` 클래스로 현재 탭 표시.
- 3개 탭: 바이브코딩, AI 활용, 하네스 엔지니어링

### .ai-panel (AI 패널)
탭에 대응하는 콘텐츠 패널. `.active`일 때만 `display: block`.
- 각 패널: `#panel-vibecoding`, `#panel-ai-usage`, `#panel-harness`

### .adp-btn (Add Delper 플로팅 버튼)
우측 하단 고정 플로팅 버튼. 클릭 시 채팅 패널 열림.
- 패널 열림 시 색상 변경 (active 상태)

### .adp-panel (Add Delper 채팅 패널)
중앙 플로팅 채팅 패널. 배경 딤 없음.
- 헤더 드래그로 자유 이동
- 하단 핸들로 높이 조절 (리사이즈)
- 투명도 슬라이더 (opacity 조절)
- 최소화 → 플로팅 버튼으로 축소

### .adp-header (Add Delper 헤더)
패널 상단 바. 드래그 핸들 + 최소화/닫기 버튼.

### .adp-messages (Add Delper 메시지 영역)
채팅 메시지 스크롤 영역. 사용자/AI 메시지 구분.

### .adp-input (Add Delper 입력)
메시지 입력 필드 + 전송 버튼.

### .adp-pending (Add Delper PR 대기 바)
PR 생성 후 상태 표시 바. 머지 버튼 포함.

## 폰트
- 본문: **Noto Sans KR** (300, 400, 500, 700)
- 코드: **JetBrains Mono** (400, 500)
- 기본 크기: 15px (`html { font-size: 15px }`)

## 반응형 브레이크포인트
- `768px`: 사이드바 숨김 → 햄버거, 그리드 1~2열로
- `480px`: 그리드 1열, 스탯 카드 1열

## Delper 로고
- 사이드바 h1에 그라데이션 텍스트: `var(--purple) → var(--blue)`
- 서브텍스트: "The All-in-One Dev Guide"
- 버전 뱃지: pill 형태, `var(--bg-3)` 배경
