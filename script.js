/* ════════════════════════════════════════════════════════════════
   ANALYTICS DASHBOARD HUB — script.js
   Responsibilities:
     1. Light / dark theme management (toggle + localStorage)
     2. Dynamic date rendering
     3. Live search with stat counter and section visibility
     4. Keyboard accessibility for cards (Space key)
════════════════════════════════════════════════════════════════ */


/* ─── 1. THEME MANAGEMENT ───────────────────────────────────── */

const root     = document.documentElement;
const themeBtn = document.getElementById('theme-btn');
const themeIco = document.getElementById('theme-ico');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);

  const isDark = theme === 'dark';
  themeIco.className        = isDark ? 'fas fa-sun' : 'fas fa-moon';
  themeBtn.setAttribute(
    'aria-label',
    isDark ? 'Switch to light mode' : 'Switch to dark mode'
  );

  try {
    localStorage.setItem('bi-hub-theme', theme);
  } catch (_) {
    /* localStorage blocked (private browsing, etc.) — continue silently */
  }
}

function resolveInitialTheme() {
  try {
    const stored = localStorage.getItem('bi-hub-theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch (_) {}

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

// Apply on first load
applyTheme(resolveInitialTheme());

// Toggle on button click
themeBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});


/* ─── 2. DYNAMIC DATES ──────────────────────────────────────── */

function formatDate(date) {
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
  });
}

const today     = new Date();
const formatted = formatDate(today);

document.getElementById('hero-date').textContent = formatted;
document.getElementById('ft-date').textContent   = 'Last Updated: ' + formatted;


/* ─── 3. LIVE SEARCH & FILTERING ───────────────────────────── */

const searchInput = document.getElementById('search-input');
const clearBtn    = document.getElementById('search-clear');
const noResults   = document.getElementById('no-results');

// Sections
const secOps = document.getElementById('sec-ops');
const secOem = document.getElementById('sec-oem');

// Statistic tiles
const statTotal = document.getElementById('stat-total');
const statOps   = document.getElementById('stat-ops');
const statOem   = document.getElementById('stat-oem');

// Section sub-counts
const opsCount = document.getElementById('ops-count');
const oemCount = document.getElementById('oem-count');

// All dashboard cards
const allCards = Array.from(document.querySelectorAll('.dash-card'));

/** Return "<n> dashboard" or "<n> dashboards" */
function pluralize(n) {
  return n + (n === 1 ? ' dashboard' : ' dashboards');
}

function runSearch(query) {
  const term = query.trim().toLowerCase();

  // Show / hide the clear button
  if (term.length > 0) {
    clearBtn.removeAttribute('hidden');
  } else {
    clearBtn.setAttribute('hidden', '');
  }

  let total = 0;
  let opsN  = 0;
  let oemN  = 0;

  allCards.forEach(card => {
    const name     = card.getAttribute('data-name')     || '';
    const desc     = card.getAttribute('data-desc')     || '';
    const category = card.getAttribute('data-category') || '';

    const match = !term
      || name.includes(term)
      || desc.includes(term)
      || category.includes(term);

    card.classList.toggle('hidden', !match);

    if (match) {
      total++;
      if (card.closest('#sec-ops')) opsN++;
      if (card.closest('#sec-oem')) oemN++;
    }
  });

  // Update stat tiles
  statTotal.textContent = total;
  statOps.textContent   = opsN;
  statOem.textContent   = oemN;

  // Update section sub-counts
  opsCount.textContent = pluralize(opsN);
  oemCount.textContent = pluralize(oemN);

  // Show / hide entire sections when empty
  secOps.style.display = opsN === 0 ? 'none' : '';
  secOem.style.display = oemN === 0 ? 'none' : '';

  // No-results placeholder
  if (total === 0) {
    noResults.removeAttribute('hidden');
  } else {
    noResults.setAttribute('hidden', '');
  }
}

// Wire up input and clear button
searchInput.addEventListener('input', e => runSearch(e.target.value));

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  runSearch('');
});


/* ─── 4. KEYBOARD ACCESSIBILITY ────────────────────────────── */

allCards.forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === ' ') {
      e.preventDefault(); // prevent page scroll
      window.open(card.getAttribute('href'), '_blank', 'noopener,noreferrer');
    }
  });
});
