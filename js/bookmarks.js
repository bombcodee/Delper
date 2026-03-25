/* ===== BOOKMARKS / FAVORITES (localStorage) ===== */
var BOOKMARK_KEY = 'delper-bookmarks';

function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(BOOKMARK_KEY)) || [];
  } catch(e) { return []; }
}

function toggleBookmark(type, name) {
  var bm = getBookmarks();
  var idx = bm.findIndex(function(b) { return b.type === type && b.name === name; });
  if (idx >= 0) {
    bm.splice(idx, 1);
  } else {
    bm.push({ type: type, name: name, added: Date.now() });
  }
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bm));
  updateBookmarkIcons();
}

function isBookmarked(type, name) {
  return getBookmarks().some(function(b) { return b.type === type && b.name === name; });
}

function updateBookmarkIcons() {
  document.querySelectorAll('.bookmark-btn').forEach(function(btn) {
    var type = btn.dataset.bmType;
    var name = btn.dataset.bmName;
    var is = isBookmarked(type, name);
    btn.classList.toggle('bookmarked', is);
    btn.textContent = is ? '\u2605' : '\u2606';
  });
}
