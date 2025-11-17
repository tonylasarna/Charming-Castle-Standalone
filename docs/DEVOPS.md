# DevOps Checklist

## Vercel
- Set env vars: `OPENAI_API_KEY`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL`.
- Enable Next.js App Router build; add custom domain and enforce HTTPS.
- Configure redirects for `/en` default locale.
- Upload public logo assets under `/public`.

## Netlify
- Build command: `npm run build`; Publish: `.next`.
- Add `NEXT_RUNTIME=edge` if using edge routes.
- Configure `_headers` for caching static assets; include env vars above.

## Render
- Use Node 18+; Build `npm install && npm run build`; Start `npm run start`.
- Add env vars and persistent `public/generated` directory for AI assets.

## Common
- DNS: point `A`/`CNAME` to host; enable SSL auto-cert.
- Analytics: insert GA4/Meta IDs in env, confirm consent banner firing events (quote submitted, rental viewed).
- i18n: ensure middleware deployed; test `/en` and `/es` routes.
- Forms: connect `/api/ai/quote` + email provider or webhook (Zapier/Make).
- Testing: run `npm run lint`; perform Lighthouse aiming ≥95.
