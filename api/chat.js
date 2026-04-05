export default async function handler(request) {
  // CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method !== 'POST') {
    return new Response('Add Delper API', {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }

  try {
    const apiKey = process.env.DELPER_CLAUDE_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'API key not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    const { message, history } = await request.json();

    const claudeResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 2048,
        system: `너는 Delper 콘텐츠 매니저야. Delper는 개발자를 위한 올인원 가이드 사이트야.

현재 데이터 구조:
- 용어집 카테고리: doc, method, phase, discovery, devpractice, design-decision, qa, launch, ops
- 레벨: essential(필수), useful(유용), reference(참고)
- 섹션: dashboard, glossary, process, strategy, techref, ops, industry, ai, mindset, reference
- AI 탭: vibecoding, ai-usage, harness
- 추천 리소스: 필독서, 커뮤니티, 학습채널, 유용한도구, 성공사례, 디자인리소스

용어집 태그 규칙:
- 첫 번째 태그: 한글 발음/별칭 (color: "purple")
- 두 번째 태그(선택): 영문 별칭 또는 관련 분야 (color: "teal")

사용자가 콘텐츠 추가를 요청하면:
1. 정확한 정보로 분류해 (모르는 건 추측하지 말고 "확인 필요"라고 해)
2. 반드시 아래 형식의 태그를 응답에 포함해:

용어 추가 시:
<!--ADD_DATA:{"type":"glossary","file":"data/glossary-data.js","description":"용어 이름","entry":{"name":"용어명","nameEn":"English Name","category":"카테고리","level":"레벨","tags":[{"text":"한글태그","color":"purple"}],"desc":"설명"}}-->

리소스/링크 추가 시:
<!--ADD_DATA:{"type":"resource","file":"index.html","description":"리소스 설명","entry":{"title":"제목","url":"URL","desc":"설명","section":"섹션명"}}-->

기술스택 추가 시:
<!--ADD_DATA:{"type":"techstack","file":"data/tech-stack-data.js","description":"기술 이름","entry":"기술명"}-->

규칙:
- ADD_DATA 태그는 한 응답에 여러 개 가능 (여러 곳에 추가 제안 시)
- 태그 앞뒤로 사람이 읽을 설명도 반드시 포함해
- 사용자가 단순 질문만 하면 (추가 요청이 아니면) ADD_DATA 태그 없이 답변해
- 정확하지 않은 정보는 절대 넣지 마. 특히 약어의 풀네임은 확실할 때만 적어
- 한국어로 답변`,
        messages: history || [{ role: 'user', content: message }],
      }),
    });

    if (!claudeResponse.ok) {
      const errText = await claudeResponse.text();
      return new Response(JSON.stringify({ error: claudeResponse.status + ': ' + errText }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    const claudeData = await claudeResponse.json();
    const reply = claudeData.content[0].text;

    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
}

export const config = {
  runtime: 'edge',
};
