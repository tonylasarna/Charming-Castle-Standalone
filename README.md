# Charming Castle Standalone

Next.js 14 App Router build for Charming Castle, a luxury décor and rentals studio in Forest Hill, Toronto. Includes AI-assisted planning, bilingual content, and a premium UI system.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

## Environment variables

Create a `.env.local` file:

```
OPENAI_API_KEY=your-key
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL=xxxx
```

## Key features
- EN/ES localization via middleware and locale routes.
- AI suite: décor assistant, mood board generator, product matchmaker, quote optimizer API routes.
- Quote flow with validation and multi-step UX.
- Rentals catalog with search and wishlist.
- SEO: metadata defaults, sitemap, robots.txt.
- Brand guide in `docs/brand-guide/style-guide.html`.

## Project structure
- `app/`: App Router pages, i18n layouts, and API routes.
- `components/`: Shared layout, sections, and UI atoms.
- `lib/`: Content seeds, utilities, fonts, and i18n helpers.
- `docs/`: Readiness report and DevOps checklist.
