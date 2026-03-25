/* ===== COMMAND PALETTE (Ctrl+K) ===== */
var cmdItems = [];
var cmdSelected = 0;

function buildCmdIndex() {
  cmdItems.length = 0;

  /* 1. Glossary terms */
  if (typeof GLOSSARY_DATA !== 'undefined') {
    GLOSSARY_DATA.forEach(function(term) {
      cmdItems.push({
        type: 'term',
        name: term.name,
        desc: term.nameEn || '',
        icon: '📖',
        action: function() {
          showSection('glossary');
          setTimeout(function() {
            var cards = document.querySelectorAll('.term-card');
            for (var i = 0; i < cards.length; i++) {
              var card = cards[i];
              if (card.querySelector('.term-name') && card.querySelector('.term-name').textContent === term.name) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.outline = '2px solid var(--purple)';
                setTimeout(function() { card.style.outline = ''; }, 2000);
                break;
              }
            }
          }, 200);
        }
      });
    });
  }

  /* 2. Tech stack items */
  if (typeof TECH_STACK_DATA !== 'undefined') {
    TECH_STACK_DATA.forEach(function(name) {
      cmdItems.push({
        type: 'tech',
        name: name,
        desc: '기술 스택',
        icon: '⚙️',
        action: function() {
          showSection('techref');
          setTimeout(function() {
            var items = document.querySelectorAll('#sec-techref .stack-item strong');
            for (var j = 0; j < items.length; j++) {
              var el = items[j];
              if (el.textContent.includes(name.split('/')[0].trim().split('(')[0].trim())) {
                el.closest('.stack-item').scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.closest('.stack-item').style.outline = '2px solid var(--teal)';
                (function(stackItem) {
                  setTimeout(function() { stackItem.style.outline = ''; }, 2000);
                })(el.closest('.stack-item'));
                break;
              }
            }
          }, 200);
        }
      });
    });
  }

  /* 3. Section navigation */
  if (typeof SECTION_NAV_DATA !== 'undefined') {
    SECTION_NAV_DATA.forEach(function(s) {
      cmdItems.push({
        type: 'section',
        name: s.name,
        desc: '섹션 이동',
        icon: s.icon,
        action: function() { showSection(s.id); }
      });
    });
  }

  /* 4. Industry keys */
  if (typeof INDUSTRY_DATA !== 'undefined') {
    Object.keys(INDUSTRY_DATA).forEach(function(k) {
      var ind = INDUSTRY_DATA[k];
      cmdItems.push({
        type: 'industry',
        name: ind.name,
        desc: '산업분야 가이드',
        icon: ind.icon,
        action: function() {
          showSection('industry');
          setTimeout(function() { renderIndustry(k); }, 100);
        }
      });
    });
  }
}

/* Tech stack search filter */
function filterTechStack() {
  var q = document.getElementById('techSearch').value.toLowerCase();
  document.querySelectorAll('#sec-techref .stack-item').forEach(function(item) {
    var text = ((item.querySelector('strong') ? item.querySelector('strong').textContent : '') + ' ' +
                (item.querySelector('span') ? item.querySelector('span').textContent : '')).toLowerCase();
    item.style.display = (!q || text.includes(q)) ? '' : 'none';
  });
}

function openCmd() {
  if (!cmdItems.length) buildCmdIndex();
  document.getElementById('cmdOverlay').classList.add('show');
  var input = document.getElementById('cmdInput');
  input.value = '';
  input.focus();
  cmdSearch('');
}

function closeCmd() {
  document.getElementById('cmdOverlay').classList.remove('show');
}

function cmdSearch(q) {
  var results = document.getElementById('cmdResults');
  var filtered;
  if (q) {
    filtered = cmdItems.filter(function(item) { return (item.name + ' ' + item.desc).toLowerCase().includes(q.toLowerCase()); }).slice(0, 10);
  } else {
    /* Show bookmarked items first, then sections */
    var bookmarked = [];
    if (typeof getBookmarks === 'function') {
      var bm = getBookmarks();
      bm.forEach(function(b) {
        var found = cmdItems.find(function(item) { return item.type === b.type && item.name === b.name; });
        if (found) bookmarked.push(found);
      });
    }
    var sections = cmdItems.filter(function(i) { return i.type === 'section'; });
    /* Deduplicate: remove sections that are already in bookmarks */
    var bmNames = bookmarked.map(function(b) { return b.type + ':' + b.name; });
    sections = sections.filter(function(s) { return bmNames.indexOf(s.type + ':' + s.name) === -1; });
    filtered = bookmarked.concat(sections);
  }
  cmdSelected = 0;
  if (!filtered.length) {
    results.innerHTML = '<div class="cmd-empty">검색 결과가 없습니다</div>';
    return;
  }
  results.innerHTML = filtered.map(function(item, i) {
    return '<div class="cmd-result' + (i === 0 ? ' selected' : '') + '" onmouseenter="cmdHover(' + i + ')" onclick="cmdSelect(' + i + ')">' +
      '<span class="cmd-icon">' + (item.icon || (item.type === 'term' ? '📖' : '')) + '</span>' +
      '<span class="cmd-label">' + item.name + '</span>' +
      '<span class="cmd-hint">' + item.desc + '</span></div>';
  }).join('');
  results._filtered = filtered;
}

function cmdHover(i) {
  cmdSelected = i;
  document.querySelectorAll('.cmd-result').forEach(function(r, idx) {
    r.classList.toggle('selected', idx === i);
  });
}

function cmdSelect(i) {
  var filtered = document.getElementById('cmdResults')._filtered;
  if (filtered && filtered[i]) {
    filtered[i].action();
    closeCmd();
  }
}

function cmdKeydown(e) {
  var results = document.querySelectorAll('.cmd-result');
  if (e.key === 'ArrowDown') { e.preventDefault(); cmdHover(Math.min(cmdSelected + 1, results.length - 1)); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); cmdHover(Math.max(cmdSelected - 1, 0)); }
  else if (e.key === 'Enter') { e.preventDefault(); cmdSelect(cmdSelected); }
  else if (e.key === 'Escape') { closeCmd(); }
}
