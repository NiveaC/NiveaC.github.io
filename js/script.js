// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Scroll spy — highlight active nav link
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const id = entry.target.getAttribute('id');
      const active = document.querySelector(`.nav-link[data-section="${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.35 });

sections.forEach(section => spyObserver.observe(section));

// Mobile sidebar toggle
const mobileToggle = document.getElementById('mobileToggle');
const sidebar = document.getElementById('sidebar');

mobileToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Close sidebar on nav link click (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

// Language toggle
const btnZh = document.getElementById('btnZh');
const btnEn = document.getElementById('btnEn');

function setLang(lang) {
  document.body.classList.toggle('use-en', lang === 'en');
  btnZh.classList.toggle('active', lang === 'zh');
  btnEn.classList.toggle('active', lang === 'en');
  localStorage.setItem('portfolio-lang', lang);
}

btnZh.addEventListener('click', () => setLang('zh'));
btnEn.addEventListener('click', () => setLang('en'));
setLang(localStorage.getItem('portfolio-lang') || 'zh');

// Copy email button
const copyEmailBtn = document.getElementById('copyEmailBtn');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('your@email.com').then(() => {
      const isEn = document.body.classList.contains('use-en');
      const orig = copyEmailBtn.innerHTML;
      copyEmailBtn.innerHTML = isEn ? 'Copied ✓' : '已複製 ✓';
      copyEmailBtn.style.background = '#3DB97A';
      setTimeout(() => {
        copyEmailBtn.innerHTML = orig;
        copyEmailBtn.style.background = '';
      }, 2000);
    });
  });
}

// Contact form — Formspree
const FORM_ENDPOINT = 'https://formspree.io/f/xgobzrlr';
const BTN_STATES = {
  sending: { zh: '送出中…',     en: 'Sending…' },
  success: { zh: '訊息已送出 ✓', en: 'Message Sent ✓' },
  error:   { zh: '送出失敗，請重試', en: 'Failed, please try again' },
  default: { zh: '送出訊息 →',  en: 'Send Message →' },
};

document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById('submitBtn');
  const isEn = document.body.classList.contains('use-en');

  const setState = (state, color = '') => {
    btn.textContent = BTN_STATES[state][isEn ? 'en' : 'zh'];
    btn.style.background = color;
    btn.disabled = state === 'sending';
  };

  setState('sending');

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    });

    if (res.ok) {
      setState('success', '#3DB97A');
      form.reset();
      setTimeout(() => setState('default'), 3500);
    } else {
      throw new Error('non-ok');
    }
  } catch {
    setState('error', '#ef4444');
    setTimeout(() => setState('default'), 3500);
  }
});
