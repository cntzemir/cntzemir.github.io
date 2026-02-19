(function () {
  const toggle = document.querySelector('[data-nav-toggle]');
  const closeOnClick = document.querySelectorAll('[data-nav-close]');

  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  closeOnClick.forEach((el) => {
    el.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach((a) => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path || (path === 'index.html' && (href === 'index.html' || href === './'))) {
      a.setAttribute('aria-current', 'page');
    }
  });
})();
