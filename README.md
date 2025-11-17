# Charming Castle Standalone

Modern React + Vite site for Charming Castle luxury event rentals.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Environment variables

Create a `.env` file if needed:

```
VITE_GA_ID=G-XXXXXXXXXX
```

## Key features
- EN/ES localization with on-page language toggle.
- Quote form with required field validation and success/error states.
- Rentals catalog with basic category filter.
- SEO helpers for per-page title/description, robots.txt, sitemap, and LocalBusiness JSON-LD.
- Consent banner gating Google Analytics initialization.

## Project structure
- `src/pages`: Route views (home, services, rentals, gallery, about, quote)
- `src/components`: Shared UI (header, footer, SEO, analytics, quote form)
- `src/data`: Static content seeds for rentals, services, FAQs, gallery
- `public`: Static assets, sitemap, robots.txt, placeholder images
