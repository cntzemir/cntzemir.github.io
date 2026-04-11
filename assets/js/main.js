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


(function () {
  const images = Array.from(document.querySelectorAll('main img:not([data-no-lightbox])'))
    .filter((img) => !img.closest('.brand') && !img.closest('.social'));

  if (!images.length) return;

  let activeIndex = -1;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = `
    <div class="lightbox-backdrop" data-lightbox-close></div>
    <div class="lightbox-shell" role="dialog" aria-modal="true" aria-label="Expanded image viewer">
      <div class="lightbox-toolbar">
        <p class="lightbox-counter" aria-live="polite"></p>
        <button class="lightbox-icon" type="button" data-lightbox-close aria-label="Close image viewer">
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
      </div>
      <div class="lightbox-stage">
        <button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous image">
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>
        <figure class="lightbox-figure">
          <img class="lightbox-image" alt="" />
          <figcaption class="lightbox-caption"></figcaption>
        </figure>
        <button class="lightbox-nav lightbox-next" type="button" aria-label="Next image">
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const overlayImage = overlay.querySelector('.lightbox-image');
  const overlayCaption = overlay.querySelector('.lightbox-caption');
  const overlayCounter = overlay.querySelector('.lightbox-counter');
  const prevButton = overlay.querySelector('.lightbox-prev');
  const nextButton = overlay.querySelector('.lightbox-next');
  let lastFocused = null;

  images.forEach((img, index) => {
    img.classList.add('lightbox-target');
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `${img.getAttribute('alt') || 'Image'} — open enlarged view`);
    img.dataset.lightboxIndex = String(index);

    const openFromImage = () => openLightbox(index);
    img.addEventListener('click', openFromImage);
    img.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openFromImage();
      }
    });
  });

  function updateLightbox(index) {
    const img = images[index];
    if (!img) return;

    activeIndex = index;
    overlayImage.src = img.currentSrc || img.src;
    overlayImage.alt = img.alt || 'Expanded image';
    overlayCaption.textContent = img.getAttribute('data-lightbox-caption') || img.alt || '';
    overlayCounter.textContent = `${index + 1} / ${images.length}`;

    const canNavigate = images.length > 1;
    prevButton.disabled = !canNavigate;
    nextButton.disabled = !canNavigate;
  }

  function openLightbox(index) {
    lastFocused = document.activeElement;
    updateLightbox(index);
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    overlay.querySelector('[data-lightbox-close]').focus();
  }

  function closeLightbox() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    overlayImage.removeAttribute('src');
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  }

  function stepLightbox(direction) {
    if (!images.length) return;
    const nextIndex = (activeIndex + direction + images.length) % images.length;
    updateLightbox(nextIndex);
  }

  overlay.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-lightbox-close') || event.target.closest('[data-lightbox-close]')) {
      closeLightbox();
    }
  });

  prevButton.addEventListener('click', () => stepLightbox(-1));
  nextButton.addEventListener('click', () => stepLightbox(1));

  document.addEventListener('keydown', (event) => {
    if (!overlay.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') stepLightbox(-1);
    if (event.key === 'ArrowRight') stepLightbox(1);
  });
})();
