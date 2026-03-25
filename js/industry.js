/* ===== INDUSTRY GUIDE RENDERING ===== */
var cheatVisible = false;

function toggleCheat() {
  cheatVisible = !cheatVisible;
  document.getElementById('cheatSwitch').classList.toggle('on', cheatVisible);
  document.querySelectorAll('.cheat-card').forEach(function(c) {
    c.classList.toggle('visible', cheatVisible);
  });
  // After toggling cheat cards, recalculate open accordion heights
  document.querySelectorAll('.ind-step.open').forEach(function(step) {
    var body = step.querySelector('.ind-step-body');
    if (body) {
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
}

function renderIndustry(key) {
  var ind = INDUSTRY_DATA[key];
  if (!ind) return;
  document.querySelectorAll('.ind-tab').forEach(function(t) {
    t.classList.toggle('active', t.dataset.key === key);
  });
  var wrap = document.getElementById('indContent');
  var h = '';
  ind.steps.forEach(function(s, i) {
    var ch = '';
    if (s.cheats) {
      s.cheats.forEach(function(c) {
        ch += '<div class="cheat-card cheat-' + c.type + (cheatVisible ? ' visible' : '') + '">' +
          '<h4>' + c.title + '</h4><p>' + c.text + '</p></div>';
      });
    }
    h += '<div class="ind-step">' +
      '<div class="ind-step-header" onclick="toggleIndStep(this)">' +
        '<div class="ind-step-num" style="background:var(--' + s.color + '-bg);color:var(--' + s.color + ')">' + (i + 1) + '</div>' +
        '<div class="ind-step-title">' + s.title + ' <span style="font-weight:400;color:var(--tx-3);font-size:.8rem">— ' + s.sub + '</span></div>' +
        '<span class="ind-step-arrow">▶</span>' +
      '</div>' +
      '<div class="ind-step-body">' +
        '<div class="ind-step-content">' + s.content + ch + '</div>' +
      '</div>' +
    '</div>';
    if (i < ind.steps.length - 1) {
      h += '<div style="text-align:center;color:var(--tx-3);font-size:.8rem;padding:2px 0">↓</div>';
    }
  });
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:20px">';
  h += '<div class="card"><div class="card-title" style="font-size:.88rem">🧱 추천 스택</div><p style="font-size:.82rem;color:var(--tx-2)">' + ind.stack + '</p></div>';
  h += '<div class="card"><div class="card-title" style="font-size:.88rem">⚖️ 법적 필수</div><p style="font-size:.82rem;color:var(--tx-2)">' + ind.legal + '</p></div>';
  h += '<div class="card"><div class="card-title" style="font-size:.88rem">📈 성장 전략</div><p style="font-size:.82rem;color:var(--tx-2)">' + ind.growth + '</p></div>';
  h += '<div class="card"><div class="card-title" style="font-size:.88rem">📐 스케일링</div><p style="font-size:.82rem;color:var(--tx-2)">' + ind.scaling + '</p></div></div>';
  h += '<div class="card" style="margin-top:10px"><div class="card-title" style="font-size:.88rem">🚪 Exit</div><p style="font-size:.82rem;color:var(--tx-2)">' + ind.exit + '</p></div>';
  wrap.innerHTML = h;
}

function initIndustry() {
  var el = document.getElementById('indTabs');
  if (!el) return;
  var t = '';
  Object.keys(INDUSTRY_DATA).forEach(function(k) {
    t += '<button class="ind-tab" data-key="' + k + '" onclick="renderIndustry(\'' + k + '\')">' +
      INDUSTRY_DATA[k].icon + ' ' + INDUSTRY_DATA[k].name + '</button>';
  });
  PLANNED_INDUSTRIES.forEach(function(p) {
    t += '<button class="ind-tab planned">' + p.icon + ' ' + p.name + '</button>';
  });
  el.innerHTML = t;
  renderIndustry('webapp');
}
