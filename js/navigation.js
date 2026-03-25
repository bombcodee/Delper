/* ===== SECTION NAVIGATION ===== */
function showSection(id, scrollTo) {
  document.querySelectorAll('.section').forEach(function(s) { s.classList.remove('active'); });
  document.getElementById('sec-' + id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(function(n) { n.classList.remove('active'); });
  var navItem = document.querySelector('[data-section="' + id + '"]');
  if (navItem) navItem.classList.add('active');
  window.scrollTo(0, 0);
  if (scrollTo) {
    setTimeout(function() {
      var el = document.getElementById(scrollTo);
      if (el) {
        var header = el.querySelector('.accordion-header');
        if (header) header.click();
        setTimeout(function() { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
      }
    }, 50);
  }
  if (window.innerWidth <= 768) toggleSidebar();
}

/* ===== SIDEBAR MOBILE ===== */
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('mobOverlay').classList.toggle('show');
}
