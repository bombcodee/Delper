/* ===== Add Delper — AI 콘텐츠 어시스턴트 ===== */

var adpOpen = false;
var adpDragging = false;
var adpResizing = false;
var adpAnimating = false; // lock during animation
var adpLastPos = null; // {left, top, width, height}

// Get button position
function getAdpBtnPos() {
  var btn = document.getElementById('adpMinimized');
  var rect = btn.getBoundingClientRect();
  return { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
}

// Get target position (last known or center)
function getAdpTargetPos() {
  if (adpLastPos) return adpLastPos;
  var w = 480, h = 520;
  return {
    left: (window.innerWidth - w) / 2,
    top: (window.innerHeight - h) / 2,
    width: w,
    height: h
  };
}

// Open: button position → target position (grow + move)
function openAddDelper() {
  if (adpAnimating) return;
  adpAnimating = true;

  var panel = document.getElementById('adpPanel');
  var btn = document.getElementById('adpMinimized');
  var btnPos = getAdpBtnPos();
  var targetPos = getAdpTargetPos();

  btn.classList.add('active');

  // Start at button position, small
  panel.style.transition = 'none';
  panel.style.left = btnPos.left + 'px';
  panel.style.top = btnPos.top + 'px';
  panel.style.bottom = 'auto';
  panel.style.right = 'auto';
  panel.style.transform = 'none';
  panel.style.width = btnPos.width + 'px';
  panel.style.height = btnPos.height + 'px';
  panel.style.borderRadius = '28px';
  panel.style.opacity = '0.3';
  panel.classList.add('open');

  panel.offsetHeight; // force reflow

  // Animate to target position, full size
  panel.style.transition = 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
  requestAnimationFrame(function() {
    panel.style.left = targetPos.left + 'px';
    panel.style.top = targetPos.top + 'px';
    panel.style.width = targetPos.width + 'px';
    panel.style.height = targetPos.height + 'px';
    panel.style.borderRadius = '14px';
    panel.style.opacity = '1';
    panel.classList.add('visible');
  });

  adpOpen = true;
  setTimeout(function() {
    panel.style.transition = '';
    adpAnimating = false;
    document.getElementById('adpInput').focus();
  }, 380);
}

// Close: current position → button position (shrink + move)
function closeAddDelper() {
  if (adpAnimating) return;
  adpAnimating = true;

  var panel = document.getElementById('adpPanel');
  var btn = document.getElementById('adpMinimized');
  var btnPos = getAdpBtnPos();

  // Save current position BEFORE animating away
  var rect = panel.getBoundingClientRect();
  adpLastPos = { left: rect.left, top: rect.top, width: rect.width, height: rect.height };

  // Ensure we're using absolute left/top (not bottom/right)
  panel.style.transition = 'none';
  panel.style.left = rect.left + 'px';
  panel.style.top = rect.top + 'px';
  panel.style.width = rect.width + 'px';
  panel.style.height = rect.height + 'px';
  panel.style.bottom = 'auto';
  panel.style.right = 'auto';
  panel.style.transform = 'none';

  panel.offsetHeight; // force reflow

  // Animate to button position
  panel.style.transition = 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
  requestAnimationFrame(function() {
    panel.style.left = btnPos.left + 'px';
    panel.style.top = btnPos.top + 'px';
    panel.style.width = btnPos.width + 'px';
    panel.style.height = btnPos.height + 'px';
    panel.style.borderRadius = '28px';
    panel.style.opacity = '0';
    panel.classList.remove('visible');
  });

  adpOpen = false;

  setTimeout(function() {
    panel.classList.remove('open');
    panel.style.left = '';
    panel.style.top = '';
    panel.style.width = '';
    panel.style.height = '';
    panel.style.bottom = '';
    panel.style.right = '';
    panel.style.borderRadius = '';
    panel.style.opacity = '';
    panel.style.transform = '';
    panel.style.transition = '';
    btn.classList.remove('active');
    adpAnimating = false;
  }, 380);
}

// Toggle (button click + Ctrl+J both use this)
function toggleAddDelper() {
  if (adpOpen) {
    closeAddDelper();
  } else {
    openAddDelper();
  }
}

// Minimize = same as close
function minimizeAddDelper() {
  closeAddDelper();
}

// Opacity control
function setAdpOpacity(value) {
  document.getElementById('adpPanel').style.opacity = value / 100;
}

// Worker URL
var ADP_WORKER_URL = 'https://delper-api.artipect123.workers.dev';

// Conversation history for context
var adpHistory = [];

// Send message to Worker → Claude API
function sendAdpMessage() {
  var input = document.getElementById('adpInput');
  var text = input.value.trim();
  if (!text) return;

  var messages = document.getElementById('adpMessages');

  // Show user message
  var userMsg = document.createElement('div');
  userMsg.className = 'adp-msg adp-msg-user';
  userMsg.innerHTML = '<div class="adp-msg-bubble">' + escapeHtml(text) + '</div>';
  messages.appendChild(userMsg);
  input.value = '';
  messages.scrollTop = messages.scrollHeight;

  // Add to history
  adpHistory.push({ role: 'user', content: text });

  // Show loading
  var loadingMsg = document.createElement('div');
  loadingMsg.className = 'adp-msg adp-msg-ai';
  loadingMsg.id = 'adp-loading';
  loadingMsg.innerHTML = '<div class="adp-msg-bubble" style="color:var(--tx-3)">분석 중...</div>';
  messages.appendChild(loadingMsg);
  messages.scrollTop = messages.scrollHeight;

  // Call Worker
  fetch(ADP_WORKER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: text, history: adpHistory })
  })
  .then(function(res) { return res.json(); })
  .then(function(data) {
    // Remove loading
    var loading = document.getElementById('adp-loading');
    if (loading) loading.remove();

    var reply = data.reply || data.error || '응답을 받지 못했습니다.';

    // Add AI response
    var aiMsg = document.createElement('div');
    aiMsg.className = 'adp-msg adp-msg-ai';
    aiMsg.innerHTML = '<div class="adp-msg-bubble">' + formatReply(reply) + '</div>';
    messages.appendChild(aiMsg);
    messages.scrollTop = messages.scrollHeight;

    // Add to history
    adpHistory.push({ role: 'assistant', content: reply });
  })
  .catch(function(err) {
    var loading = document.getElementById('adp-loading');
    if (loading) loading.remove();

    var aiMsg = document.createElement('div');
    aiMsg.className = 'adp-msg adp-msg-ai';
    aiMsg.innerHTML = '<div class="adp-msg-bubble" style="color:var(--red)">연결 오류: ' + escapeHtml(err.message) + '</div>';
    messages.appendChild(aiMsg);
    messages.scrollTop = messages.scrollHeight;
  });
}

// Format AI reply (basic markdown-like)
function formatReply(text) {
  return escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code style="background:var(--bg-3);padding:1px 4px;border-radius:3px">$1</code>')
    .replace(/\n/g, '<br>');
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== Drag to move =====
(function() {
  var panel, header;
  var startX, startY, startLeft, startTop;

  function init() {
    panel = document.getElementById('adpPanel');
    header = document.getElementById('adpHeader');
    if (!header) return;
    header.addEventListener('mousedown', onStart);
    header.addEventListener('touchstart', onStart, { passive: false });
  }

  function onStart(e) {
    if (e.target.closest('.adp-ctrl-btn')) return;
    e.preventDefault();
    adpDragging = true;
    panel.classList.add('dragging');

    var touch = e.touches ? e.touches[0] : e;
    startX = touch.clientX;
    startY = touch.clientY;

    var rect = panel.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;

    panel.style.bottom = 'auto';
    panel.style.right = 'auto';
    panel.style.left = startLeft + 'px';
    panel.style.top = startTop + 'px';
    panel.style.transform = 'none';
    panel.style.transition = 'none';

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onEnd);
  }

  function onMove(e) {
    if (!adpDragging) return;
    e.preventDefault();
    var touch = e.touches ? e.touches[0] : e;
    var newLeft = Math.max(0, Math.min(window.innerWidth - 100, startLeft + touch.clientX - startX));
    var newTop = Math.max(0, Math.min(window.innerHeight - 60, startTop + touch.clientY - startY));
    panel.style.left = newLeft + 'px';
    panel.style.top = newTop + 'px';
  }

  function onEnd() {
    adpDragging = false;
    panel.classList.remove('dragging');
    panel.style.transition = '';
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onEnd);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend', onEnd);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// ===== Resize handle (height) =====
(function() {
  var panel, handle;
  var startY, startHeight;

  function init() {
    panel = document.getElementById('adpPanel');
    handle = document.getElementById('adpResizeHandle');
    if (!handle) return;
    handle.addEventListener('mousedown', onStart);
    handle.addEventListener('touchstart', onStart, { passive: false });
  }

  function onStart(e) {
    e.preventDefault();
    e.stopPropagation();
    adpResizing = true;
    panel.classList.add('resizing');
    panel.style.transition = 'none';

    var touch = e.touches ? e.touches[0] : e;
    startY = touch.clientY;
    startHeight = panel.offsetHeight;

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onEnd);
  }

  function onMove(e) {
    if (!adpResizing) return;
    e.preventDefault();
    var touch = e.touches ? e.touches[0] : e;
    var dy = touch.clientY - startY;
    var newHeight = Math.max(250, Math.min(window.innerHeight - 40, startHeight + dy));
    panel.style.height = newHeight + 'px';
  }

  function onEnd() {
    adpResizing = false;
    panel.classList.remove('resizing');
    panel.style.transition = '';
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onEnd);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend', onEnd);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

// ===== Keyboard shortcuts =====
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 'j') {
    e.preventDefault();
    toggleAddDelper();
  }
  if (e.key === 'Escape' && adpOpen) {
    closeAddDelper();
  }
});
