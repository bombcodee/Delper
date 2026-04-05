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
    return new Response('Delper GitHub API', {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const OWNER = 'bombcodee';
  const REPO = 'Delper';
  const BRANCH = 'add-delper-content';
  const BASE = 'master';

  if (!GITHUB_TOKEN) {
    return jsonResponse({ error: 'GitHub token not configured' }, 500);
  }

  try {
    const { action, data } = await request.json();

    if (action === 'add') {
      // data: { type: 'glossary'|'resource'|'techstack', entry: {...}, file: string, description: string }

      // 1. Get master branch SHA
      const masterRef = await ghApi(`/repos/${OWNER}/${REPO}/git/ref/heads/${BASE}`);
      const baseSha = masterRef.object.sha;

      // 2. Check if branch exists, create if not
      let branchExists = true;
      try {
        await ghApi(`/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`);
      } catch (e) {
        branchExists = false;
      }

      if (!branchExists) {
        await ghApi(`/repos/${OWNER}/${REPO}/git/refs`, 'POST', {
          ref: `refs/heads/${BRANCH}`,
          sha: baseSha,
        });
      }

      // 3. Get current file content
      const filePath = data.file;
      const fileData = await ghApi(`/repos/${OWNER}/${REPO}/contents/${filePath}?ref=${BRANCH}`);
      const currentContent = atob(fileData.content.replace(/\n/g, ''));

      // 4. Modify content based on type
      let newContent = currentContent;
      if (data.type === 'glossary') {
        // Add entry before the closing ];
        const entry = JSON.stringify(data.entry, null, 2)
          .split('\n')
          .map(line => '  ' + line)
          .join('\n');
        newContent = currentContent.replace(
          /\n\];$/m,
          ',\n' + entry + '\n];'
        );
      } else if (data.type === 'techstack') {
        // Add to TECH_STACK_DATA array
        newContent = currentContent.replace(
          /\n\];$/m,
          ",\n  '" + data.entry + "'\n];"
        );
      }

      // 5. Update file
      await ghApi(`/repos/${OWNER}/${REPO}/contents/${filePath}`, 'PUT', {
        message: `Add ${data.type}: ${data.description} (via Add Delper)`,
        content: btoa(unescape(encodeURIComponent(newContent))),
        sha: fileData.sha,
        branch: BRANCH,
      });

      // 6. Create or update PR
      const existingPRs = await ghApi(`/repos/${OWNER}/${REPO}/pulls?head=${OWNER}:${BRANCH}&state=open`);

      let pr;
      if (existingPRs.length > 0) {
        pr = existingPRs[0];
        // Update PR body with new item
        const newBody = pr.body + `\n- ${data.type}: ${data.description}`;
        await ghApi(`/repos/${OWNER}/${REPO}/pulls/${pr.number}`, 'PATCH', {
          body: newBody,
        });
      } else {
        pr = await ghApi(`/repos/${OWNER}/${REPO}/pulls`, 'POST', {
          title: 'Add Delper: 콘텐츠 추가',
          body: `## Add Delper로 추가된 콘텐츠\n\n- ${data.type}: ${data.description}`,
          head: BRANCH,
          base: BASE,
        });
      }

      return jsonResponse({
        success: true,
        pr_number: pr.number,
        pr_url: pr.html_url,
        message: `PR #${pr.number}에 추가됨: ${data.description}`,
      });

    } else if (action === 'merge') {
      // data: { pr_number: number }
      const result = await ghApi(`/repos/${OWNER}/${REPO}/pulls/${data.pr_number}/merge`, 'PUT', {
        merge_method: 'squash',
        commit_title: 'Add Delper: 콘텐츠 추가 (머지)',
      });

      // Delete branch after merge
      try {
        await ghApi(`/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, 'DELETE');
      } catch (e) {
        // Branch might already be deleted
      }

      return jsonResponse({
        success: true,
        message: '머지 완료! 30초 후 사이트에 반영됩니다.',
      });

    } else if (action === 'status') {
      // Check for open PRs
      const prs = await ghApi(`/repos/${OWNER}/${REPO}/pulls?head=${OWNER}:${BRANCH}&state=open`);

      if (prs.length > 0) {
        const pr = prs[0];
        // Count items from PR body
        const items = (pr.body.match(/^- /gm) || []).length;
        return jsonResponse({
          hasPending: true,
          pr_number: pr.number,
          pr_url: pr.html_url,
          itemCount: items,
          title: pr.title,
        });
      }

      return jsonResponse({ hasPending: false });

    } else {
      return jsonResponse({ error: 'Unknown action: ' + action }, 400);
    }

  } catch (err) {
    return jsonResponse({ error: err.message }, 500);
  }

  // Helper: GitHub API call
  async function ghApi(path, method, body) {
    const url = path.startsWith('http') ? path : `https://api.github.com${path}`;
    const res = await fetch(url, {
      method: method || 'GET',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'User-Agent': 'Add-Delper',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (method === 'DELETE' && res.status === 204) return {};

    const data = await res.json();
    if (!res.ok) {
      throw new Error(`GitHub API ${res.status}: ${JSON.stringify(data)}`);
    }
    return data;
  }
}

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export const config = {
  runtime: 'edge',
};
