# Emir Canitez - Security-Oriented Portfolio

A compact GitHub Pages portfolio built as a reviewer-friendly technical showcase.

The site is intentionally not positioned as a broad personal website or generic front-end portfolio. Its purpose is to help an admissions reviewer, internship evaluator, or technical reviewer understand the main direction quickly:

- secure software design
- authentication and access control
- audit logging and traceability
- workflow integrity and controlled state changes
- Linux hardening and defensive configuration
- reviewer-friendly technical documentation

## Site structure

```text
.
├── index.html
├── projects.html
├── contact.html
└── assets/
    ├── css/main.css
    ├── js/main.js
    └── img/
```

## Page goals

- `index.html`
  - states the portfolio direction in the first screen
  - highlights the three flagship projects first
  - explains the technical priorities and project selection logic
- `projects.html`
  - separates flagship work from supporting demos
  - explains what each project demonstrates and why it matters
- `contact.html`
  - acts as reviewer quick access
  - provides GitHub, LinkedIn, email, and a short motivation summary

## Run locally

Open `index.html` directly, or run a small local server:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Deploy on GitHub Pages

1. Push these files to your GitHub Pages repository.
2. Go to **Settings -> Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the default branch and **/ (root)**.
5. Save.

## Customization notes

- Update the quick-access section if you later add a CV PDF.
- Keep the featured projects aligned with the GitHub profile README and pinned repositories.
- Avoid expanding the homepage into a broad personal website unless that becomes the intentional goal.
- Keep supporting projects secondary so the portfolio stays centered on security-oriented, reviewable work.
