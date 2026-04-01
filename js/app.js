/* ===== APP INITIALIZATION ===== */

/* Render glossary from data */
renderGlossary();

/* Update bookmark icons and count after glossary is rendered */
if (typeof updateBookmarkIcons === 'function') updateBookmarkIcons();
if (typeof updateBookmarkCount === 'function') updateBookmarkCount();

/* Render tech stack from data */
renderTechStack();

/* Initialize industry tabs */
initIndustry();

/* ===== AI TAB SWITCHING ===== */
function showAiTab(tabId) {
  document.querySelectorAll('.ai-tab').forEach(function(t) { t.classList.remove('active'); });
  document.querySelectorAll('.ai-panel').forEach(function(p) { p.classList.remove('active'); });

  var tabs = document.querySelectorAll('.ai-tab');
  tabs.forEach(function(t) {
    if (t.textContent.toLowerCase().indexOf(tabId === 'vibecoding' ? '바이브' : tabId === 'ai-usage' ? 'ai 활용' : '하네스') !== -1) {
      t.classList.add('active');
    }
  });

  var panel = document.getElementById('panel-' + tabId);
  if (panel) panel.classList.add('active');
}

/* ===== HELP OVERLAY (F1) ===== */
function toggleHelp() {
  document.getElementById('helpOverlay').classList.toggle('show');
}

/* ===== KEYBOARD SHORTCUTS ===== */
document.addEventListener('keydown', function(e) {
  if (e.key === 'F1') { e.preventDefault(); toggleHelp(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openCmd(); }
  if (e.key === 'Escape') {
    if (document.getElementById('cmdOverlay').classList.contains('show')) closeCmd();
    else if (document.getElementById('helpOverlay').classList.contains('show')) toggleHelp();
  }
});

/* ===== OVERLAY CLICK-OUTSIDE HANDLERS ===== */
document.getElementById('cmdOverlay').addEventListener('click', function(e) {
  if (e.target === this) closeCmd();
});

document.getElementById('helpOverlay').addEventListener('click', function(e) {
  if (e.target === this) toggleHelp();
});
