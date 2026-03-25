# Delper - Claude Code 프로젝트 가이드

## 프로젝트 개요
- **이름**: Delper (Develop + Helper) - The All-in-One Dev Guide
- **타입**: 정적 HTML/CSS/JS 웹 가이드 (프레임워크 없음)
- **대상**: 1인 개발자
- **배포**: GitHub Pages

## 문서
- [PRD](docs/PRD.md) - 제품 요구사항
- [아키텍처](docs/ARCHITECTURE.md) - 폴더 구조, 데이터 흐름, 스크립트 로드 순서
- [디자인 시스템](docs/DESIGN-SYSTEM.md) - 테마 5종, CSS 변수, 컴포넌트
- [코드 레퍼런스](docs/CODE-REFERENCE.md) - 모든 함수/상수/DOM ID 정리
- [결정 사항](docs/DECISIONS.md) - 아키텍처/디자인/네이밍 결정 로그
- [코딩 규칙](docs/CODING-RULES.md) - CSS/JS/HTML/커밋 규칙
- [로드맵](docs/ROADMAP.md) - 완료/진행중/예정 기능
- [테스트 계획](docs/TEST-PLAN.md) - 수동 테스트 체크리스트

## 핵심 규칙
- CSS 색상은 반드시 `var(--...)` 사용 (하드코딩 금지)
- 새 테마 색상 추가 시 5개 테마 전부에 정의
- 데이터는 `data/` 폴더에 JS 상수로 관리
- ES Modules 사용하지 않음 (file:// 호환)
- 충돌 없는 작업은 병렬 에이전트로 진행
- 사용자와 논의 후 승인받고 진행하는 패턴 유지

## 빠른 수정 가이드
| 작업 | 파일 |
|------|------|
| 용어 추가 | `data/glossary-data.js` |
| 기술 스택 추가 | `data/tech-render-data.js` |
| 산업분야 추가 | `data/industry-data.js` |
| 테마 색상 변경 | `css/variables.css` |
| 컴포넌트 스타일 | `css/components.css` |
| 섹션 스타일 | `css/sections.css` |
