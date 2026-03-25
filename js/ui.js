/* ===== ACCORDION ===== */
function toggleAccordion(header) {
  var acc = header.parentElement;
  var wasOpen = acc.classList.contains('open');
  acc.classList.toggle('open');
  var body = acc.querySelector('.accordion-body');
  if (wasOpen) {
    body.style.maxHeight = '0';
  } else {
    body.style.maxHeight = body.scrollHeight + 'px';
  }
}

/* ===== CHECKLIST ===== */
function toggleCheck(el) {
  var li = el.tagName === 'LI' ? el : el.closest('li');
  var box = li.querySelector('.check-box');
  li.classList.toggle('checked');
  if (box) box.classList.toggle('checked');
}

/* ===== INDUSTRY STEP ACCORDION ===== */
function toggleIndStep(header) {
  var step = header.parentElement;
  var wasOpen = step.classList.contains('open');
  step.classList.toggle('open');
  var body = step.querySelector('.ind-step-body');
  body.style.maxHeight = wasOpen ? '0' : body.scrollHeight + 'px';
}
