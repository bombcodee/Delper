/* ===== GLOSSARY RENDERING & FILTER ===== */
var currentFilter = 'all';

/* Common short words to skip when cross-linking (avoids false matches) */
var CROSSLINK_SKIP_WORDS = ['api', 'ab', 'seo', 'crm', 'sql', 'css', 'qa', 'pr', 'ui', 'ux', 'ci', 'cd', 'db', 'dns', 'sdk', 'ssl', 'tls', 'jwt', 'orm'];

function renderGlossary() {
  if (typeof GLOSSARY_DATA === 'undefined') return;
  var container = document.getElementById('glossaryList');
  if (!container) return;

  var levelMap = {
    essential: { label: '\uD544\uC218', badge: 'badge-essential' },
    useful:    { label: '\uC720\uC6A9', badge: 'badge-useful' },
    reference: { label: '\uCC38\uACE0', badge: 'badge-reference' }
  };

  var html = '';
  GLOSSARY_DATA.forEach(function(term) {
    var level = levelMap[term.level] || { label: '', badge: '' };
    var tagsHtml = '<span class="tag tag-' + (term.tags[0].color || 'purple') + '">' + (term.tags[0].text || term.tags[0]) + '</span>';
    if (term.tags.length > 1) {
      tagsHtml += '<span class="tag tag-' + (term.tags[1].color || 'teal') + '">' + (term.tags[1].text || term.tags[1]) + '</span>';
    }
    tagsHtml += '<span class="badge ' + level.badge + '">' + level.label + '</span>';

    var escapedName = term.name.replace(/'/g, "\\'");

    html += '<div class="term-card" data-cat="' + term.category + '" data-level="' + term.level + '">' +
      '<div class="bookmark-btn" data-bm-type="term" data-bm-name="' + term.name + '" onclick="event.stopPropagation(); toggleBookmark(\'term\',\'' + escapedName + '\')" title="즐겨찾기"></div>' +
      '<div class="term-name">' + term.name + '</div>' +
      '<div class="term-name-en">' + term.nameEn + '</div>' +
      '<div class="term-tags">' + tagsHtml + '</div>' +
      '<div class="term-desc">' + term.desc + '</div>' +
    '</div>';
  });
  container.innerHTML = html;

  addCrossLinks();
  updateFilterCounts();
}

/* ===== CROSS-LINKING BETWEEN GLOSSARY TERMS ===== */
function addCrossLinks() {
  if (typeof GLOSSARY_DATA === 'undefined') return;

  /* Build list of term names that are 3+ characters */
  var termNames = [];
  GLOSSARY_DATA.forEach(function(term) {
    if (term.name.length >= 3 && CROSSLINK_SKIP_WORDS.indexOf(term.name.toLowerCase()) === -1) {
      termNames.push(term.name);
    }
  });

  /* Sort by length descending to match longer terms first */
  termNames.sort(function(a, b) { return b.length - a.length; });

  document.querySelectorAll('.term-card').forEach(function(card) {
    var cardTermName = card.querySelector('.term-name') ? card.querySelector('.term-name').textContent : '';
    var descEl = card.querySelector('.term-desc');
    if (!descEl) return;

    var html = descEl.innerHTML;

    termNames.forEach(function(name) {
      /* Skip self-linking */
      if (name === cardTermName) return;

      /* Word boundary regex, case-insensitive */
      var escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      var re = new RegExp('(?<![\\w-])(' + escaped + ')(?![\\w-])', 'gi');

      /* Only replace text that is NOT already inside a tag */
      html = html.replace(re, function(match, p1, offset) {
        /* Check if we're inside an HTML tag by scanning for < and > */
        var before = html.substring(0, offset);
        var lastOpen = before.lastIndexOf('<');
        var lastClose = before.lastIndexOf('>');
        if (lastOpen > lastClose) return match; /* Inside a tag */
        var escapedClick = name.replace(/'/g, "\\'");
        return '<a class="cross-link" onclick="scrollToTerm(\'' + escapedClick + '\')">' + p1 + '</a>';
      });
    });

    descEl.innerHTML = html;
  });
}

/* ===== SCROLL TO A SPECIFIC GLOSSARY TERM ===== */
function scrollToTerm(name) {
  /* Show glossary section if not active */
  if (typeof showSection === 'function') {
    showSection('glossary');
  }

  /* Reset filter to 'all' */
  if (typeof setGlossaryFilter === 'function') {
    setGlossaryFilter('all');
  }

  /* Clear search */
  var searchInput = document.getElementById('glossarySearch');
  if (searchInput) {
    searchInput.value = '';
    filterGlossary();
  }

  /* Find the term card and scroll to it */
  setTimeout(function() {
    var cards = document.querySelectorAll('.term-card');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var termNameEl = card.querySelector('.term-name');
      if (termNameEl && termNameEl.textContent === name) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.style.outline = '2px solid var(--purple)';
        card.style.transition = 'outline 0.3s ease';
        (function(c) {
          setTimeout(function() { c.style.outline = ''; }, 2000);
        })(card);
        break;
      }
    }
  }, 200);
}

function setGlossaryFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('#glossaryFilters .filter-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.filter === filter);
  });
  filterGlossary();
}

function filterGlossary() {
  var query = document.getElementById('glossarySearch').value.toLowerCase();
  var bookmarks = (currentFilter === 'bookmarked' && typeof getBookmarks === 'function') ? getBookmarks() : [];
  var bookmarkedNames = {};
  bookmarks.forEach(function(b) { if (b.type === 'term') bookmarkedNames[b.name] = true; });

  document.querySelectorAll('.term-card').forEach(function(card) {
    var matchCat;
    if (currentFilter === 'bookmarked') {
      var bmBtn = card.querySelector('.bookmark-btn');
      var termName = bmBtn ? bmBtn.dataset.bmName : '';
      matchCat = !!bookmarkedNames[termName];
    } else {
      matchCat = currentFilter === 'all' || card.dataset.cat === currentFilter;
    }
    var text = ((card.querySelector('.term-name') ? card.querySelector('.term-name').textContent : '') + ' ' +
                (card.querySelector('.term-name-en') ? card.querySelector('.term-name-en').textContent : '') + ' ' +
                (card.querySelector('.term-desc') ? card.querySelector('.term-desc').textContent : '')).toLowerCase();
    var matchSearch = !query || text.includes(query);
    card.classList.toggle('hidden', !(matchCat && matchSearch));
  });
}

function updateFilterCounts() {
  if (typeof GLOSSARY_DATA === 'undefined') return;
  var total = GLOSSARY_DATA.length;
  var counts = {};
  GLOSSARY_DATA.forEach(function(term) {
    counts[term.category] = (counts[term.category] || 0) + 1;
  });

  document.querySelectorAll('.filter-count').forEach(function(span) {
    var cat = span.dataset.cat;
    if (cat === 'all') {
      span.textContent = total;
    } else {
      span.textContent = counts[cat] || 0;
    }
  });

  var totalEl = document.getElementById('glossaryTotal');
  if (totalEl) totalEl.textContent = total;
}

function updateBookmarkCount() {
  var bm = (typeof getBookmarks === 'function') ? getBookmarks() : [];
  var count = 0;
  bm.forEach(function(b) { if (b.type === 'term') count++; });
  var el = document.getElementById('bookmarkCount');
  if (el) el.textContent = count;
}
