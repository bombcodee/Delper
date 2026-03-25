/* ===== TECH STACK RENDERING ===== */
function renderTechStack() {
  if (typeof TECH_CATEGORIES === 'undefined') return;
  var container = document.getElementById('techStackList');
  if (!container) return;

  var html = '';
  TECH_CATEGORIES.forEach(function(cat) {
    html += '<h4 class="content-heading content-heading--' + cat.color + '">' + cat.title + '</h4>';
    html += '<div class="stack-grid">';
    cat.items.forEach(function(item) {
      html += '<div class="stack-item"><strong>' + item.name + '</strong><span>' + item.desc + '</span></div>';
    });
    html += '</div>';
    if (cat.note) {
      html += '<p class="content-text text-muted">' + cat.note + '</p>';
    }
  });

  container.innerHTML = html;
}
