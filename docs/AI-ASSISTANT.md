# Add Delper — AI 콘텐츠 어시스턴트

> Delper 사이트 내에서 대화형으로 콘텐츠를 추가·관리하는 AI 어시스턴트

---

## 개요

### 이름: Add Delper

### 핵심 컨셉
단순 입력 폼이 아닌 **대화형 AI 어시스턴트**. 현재 Claude Code 터미널에서 하는 작업을 Delper 사이트 UI로 옮긴 것.

### 사용 시나리오
```
사용자: "MCP는 AI 도구 연동 프로토콜이야 https://spec.model..."
AI: "분석했습니다:
     📖 용어집에 'MCP' 추가 (devpractice/essential)
     📎 AI활용 탭 레퍼런스에 링크 추가
     ⚠️ 하네스 아코디언에도 MCP 언급 추가할까요?"
사용자: "용어집이랑 레퍼런스만 해줘"
AI: "적용했습니다. PR 생성됨"
```

---

## 기능 명세

### UI
- **열기**: Ctrl+J 단축키 or 사이드바 "Add Delper" 버튼 (타이틀 바로 아래)
- **닫기**: ESC, ✕ 버튼
- **형태**: 중앙 플로팅 채팅 패널 (배경 딤 없음)
- **투명도**: 슬라이더로 opacity 조절
- **높이 조절**: 하단 핸들 드래그
- **최소화**: 작은 플로팅 버튼으로 축소 → 클릭 시 복원

### AI 기능
- 자유 텍스트/URL 입력 → AI가 자동 분류
- 분류 결과 미리보기 (구조화된 카드)
- 복수 위치 제안 (용어집 + 레퍼런스 + 기존 섹션 보강)
- 새 카테고리/섹션 필요 시 제안
- 사용자 확인 후 적용 (크로스체크)
- 대화형 수정 ("용어집만 해줘", "레벨을 useful로 바꿔줘")

### 분류 대상
| 타입 | 반영 위치 |
|------|----------|
| 용어 | data/glossary-data.js |
| 리소스/링크 | index.html 레퍼런스 섹션 or AI 탭 |
| 기술 스택 | data/tech-stack-data.js |
| 산업분야 정보 | data/industry-data.js |
| 섹션 내용 | index.html 해당 섹션 |
| 새 카테고리 | 구조 변경 제안 → 사용자 승인 |

---

## 기술 아키텍처

### C+D 하이브리드 방식

```
[D] 터미널 (Claude Code)
  → 직접 파일 수정 → git push
  → 터미널 앞에 있을 때

[C] 사이트 UI (Add Delper)
  → Cloudflare Worker → Claude API (Haiku) → GitHub API → PR 생성
  → 어디서든 가능
```

### 데이터 흐름
```
사용자 입력
    ↓
Cloudflare Worker (API 키 안전 보관)
    ↓
Claude API (Haiku) — 시스템 프롬프트에 Delper 구조 포함
    ↓
분류 + 제안 응답
    ↓
사용자 확인
    ↓
GitHub API — PR 자동 생성
    ↓
사용자 머지 → GitHub Pages 자동 배포
```

### 시스템 프롬프트 핵심
```
"너는 Delper 콘텐츠 매니저야.
 현재 데이터 구조:
 - 용어집 카테고리: doc, method, phase, discovery, devpractice,
   design-decision, qa, launch, ops
 - 레벨: essential, useful, reference
 - 섹션: dashboard, glossary, process, strategy, techref,
   ops, industry, ai, mindset, reference
 - AI 탭: vibecoding, ai-usage, harness

 입력을 받으면:
 1. 어떤 타입인지 판단
 2. 어디에 넣을지 제안 (복수 가능)
 3. 새 카테고리가 필요한지 판단
 4. 구조화된 데이터 미리보기 생성
 5. 사용자와 대화하며 수정"
```

---

## 필요한 준비물

| 항목 | 용도 | 비용 |
|------|------|------|
| Cloudflare 계정 | Worker 배포 | 무료 |
| Claude API 키 | AI 분류/대화 | 월 ~$1-2 |
| GitHub Personal Access Token | PR 자동 생성 | 무료 |

---

## 구현 단계

### Phase 1: UI (API 없이)
- [ ] 사이드바에 Add Delper 버튼 추가
- [ ] 채팅 패널 UI (플로팅, 투명도, 높이조절, 최소화)
- [ ] Ctrl+J 단축키 바인딩
- [ ] 메시지 입력/표시 기본 구조
- [ ] 테마 대응 (5개 테마 전부)

### Phase 2: AI 연동
- [ ] Cloudflare Worker 생성
- [ ] Claude API (Haiku) 연동
- [ ] 시스템 프롬프트 설계 + 튜닝
- [ ] 분류 결과 카드 UI
- [ ] 대화 컨텍스트 유지

### Phase 3: GitHub 연동
- [ ] GitHub API 연동 (Worker에서)
- [ ] PR 자동 생성 로직
- [ ] data/ 파일 수정 로직
- [ ] 성공/실패 알림 UI

### Phase 4: 고도화
- [ ] 주간 자동 최신화 연결 (같은 Worker 재사용)
- [ ] 깨진 링크 자동 감지
- [ ] 추가 이력 관리
- [ ] URL 입력 시 자동 제목/설명 추출

---

## 월 운영 비용 예측

| 항목 | 비용 |
|------|------|
| Cloudflare Workers | 무료 (일 10만 요청) |
| Claude API (Haiku) | ~$1-2 (일 10건 기준) |
| GitHub API | 무료 |
| **총합** | **월 $1-2** |
