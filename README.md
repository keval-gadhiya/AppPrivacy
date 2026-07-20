# App Privacy Policies

A tiny, fast, static site that hosts **privacy policy pages** for the apps in my
_30 Apps in 30 Days_ challenge. No marketing, no landing pages — just clean,
professional legal documents that satisfy Apple App Store and Google Play
requirements.

Built with **Next.js 15 (App Router)**, **TypeScript**, and **TailwindCSS**, and
exported to a fully **static** site (`out/`).

## Add a new app (the whole workflow)

Open [`lib/apps.ts`](./lib/apps.ts) and add **one object**:

```ts
definePrivacy({
  slug: "my-new-app",              // → /privacy/my-new-app/
  name: "My New App",
  lastUpdated: "2026-08-01",
  description: "One neutral line for the index + SEO.",
  dataDescription: "the things you create in the app, e.g. notes and lists",
}),
```

That's it. The page, its metadata, the sitemap entry, and the index listing are
all generated automatically. No new files, no duplicated markup — the same
`PrivacyTemplate` renders every policy.

### Optional knobs

`definePrivacy` also accepts: `contactEmail`, `privacySummary` (override the
checklist), `introExtra` (an extra intro paragraph), `thirdParties` (switches the
Third-Party Services section to a listed form), and `extraSections`.

## Each policy includes

App Name · Last Updated · Introduction · Privacy at a Glance · Information We
Collect · Data Storage · Analytics · Advertising · Third-Party Services ·
Children's Privacy · Changes to this Policy · Contact · Copyright.

The default wording describes an **offline-first, no-data** app (no account, no
analytics, no ads, stored locally). Adjust per app via the knobs above.

## Architecture

```
app/
  layout.tsx                 fonts, global metadata, skip link
  page.tsx                   index of all policies
  not-found.tsx              404
  privacy/[slug]/page.tsx    one dynamic route → static-generates every policy
  sitemap.ts  robots.ts      generated from the registry
components/
  privacy-template.tsx       the ONE reusable layout
  privacy-summary.tsx        the "Privacy at a Glance" card
lib/
  apps.ts                    ← the only file you edit to add an app
  privacy.ts                 definePrivacy() — where the policy wording lives
  types.ts  site.ts  utils.ts
```

The routes are driven by the registry via `generateStaticParams`, so the project
scales cleanly to 30+ apps with zero code duplication.

## Develop & build

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # static export → ./out
npm run serve          # preview the exported ./out locally
```

## Before deploying

Update [`lib/site.ts`](./lib/site.ts): the production `url`, the `publisher`
name, and `defaultContactEmail`. Then point each app's App Store / Play Store
**Privacy Policy URL** at `https://your-domain/privacy/<slug>/`.

The `out/` folder is plain static files — host it on any static host (Vercel,
Netlify, Cloudflare Pages, GitHub Pages, S3, …).

---

_Note: an earlier marketing-site build for Decision Journal was moved to
`archive-marketing-site/` and is not part of this project. Delete that folder if
you don't need it._
