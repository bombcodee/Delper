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

사용자가 내용을 입력하면:
1. 어떤 타입인지 판단 (용어 / 리소스 링크 / 기술스택 / 섹션 내용)
2. 어디에 넣을지 제안 (복수 가능)
3. 새 카테고리가 필요하면 제안
4. 구조화된 데이터 미리보기 생성

URL이 포함되면 리소스/링크로 판단.
한국어로 답변. 간결하게.`,
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
