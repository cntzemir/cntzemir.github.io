# Portfolio (GitHub Pages)

A clean, responsive, mobile-first portfolio website.

## Structure

```
.
├── index.html
├── projects.html
├── contact.html
└── assets/
    ├── css/main.css
    ├── js/main.js
    └── img/
        ├── favicon.svg
        ├── hero-portrait.jpg
        ├── about-photo.jpg
        ├── contact-photo.jpg
        ├── gallery-*.jpg
        └── projects/prj*.png
```

## Run locally

Just open `index.html` in your browser.

For a better dev experience (recommended), use a tiny local server:

```bash
# Python
python -m http.server 5500
# then open http://localhost:5500
```

## Deploy on GitHub Pages

1. Push these files to a GitHub repo (for example: `portfolio`).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your default branch (often `main`) and **/ (root)**.
5. Save. After a minute, GitHub will give you a public URL.

## Customize

- Update text in `index.html` (hero/about/skills).
- Update project descriptions and add **repo links** in `projects.html`.
- Replace images under `assets/img/`.
- If you want a PDF CV button, add `assets/Emir-Canitez-CV.pdf` and link to it.

## Notes

- All links are relative, so this works on GitHub Pages without configuration.
- The contact form uses Formspree (see `contact.html`).
