/* ===== THEME ===== */
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('.theme-btn').forEach(function(b) { b.classList.remove('active'); });
  if (event && event.target) event.target.classList.add('active');
  localStorage.setItem('delper-theme', theme);
}

(function() {
  var saved = localStorage.getItem('delper-theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    setTimeout(function() {
      document.querySelectorAll('.theme-btn').forEach(function(b) {
        b.classList.toggle('active', b.textContent.trim().toLowerCase() === saved);
      });
    }, 0);
  }
})();
