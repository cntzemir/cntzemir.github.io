# Emir Canitez — Portfolio (GitHub Pages)

A static portfolio site presenting **secure, reviewable software projects** and the supporting story behind them.

This version is intentionally aligned with the current GitHub profile strategy:

- flagship projects first
- stronger cybersecurity positioning
- clearer reviewer flow
- cleaner separation between flagship work and supporting demos

## Live

- https://cntzemir.github.io/

## What the site now emphasizes

- **Secure Auth & Admin Panel Demo** as the clearest authentication/security project
- **ValerPay** as the strongest workflow-integrity and auditability project
- **Linux Hardening Lab** as the main system-level defensive project
- older frontend demos as **supporting foundation projects**, not the main story

## Structure

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

## Why this portfolio exists

The site is not meant to look like a generic student “web dev portfolio”.
It is meant to help a reviewer understand a more specific transition:

**practical software development → secure systems thinking → cybersecurity-oriented portfolio**

## Main content changes in this version

- stronger homepage positioning
- flagship project cards rewritten around security and integrity signals
- projects page reorganized into **flagship** and **supporting** work
- contact page language cleaned up to feel more serious and focused

## Run locally

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Deployment

Deploy from the repository root through GitHub Pages using the default branch.
