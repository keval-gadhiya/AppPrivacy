# Decision Journal — Website

The official marketing, support and legal website for **Decision Journal**, a private,
on-device app for recording decisions and improving your judgment over time.

_Think Better. Decide Better._

## What's inside

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, screenshots, features, how it works, why, FAQ, CTA |
| `/privacy` | Privacy Policy (App Store / Play Store compliant) |
| `/terms` | Terms of Service |
| `/support` | Support / Help Center — contact, app info, FAQ |
| `*` | Custom 404 page |

Also generated: `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, an Open Graph
image (`/opengraph-image`), favicon (`icon.svg`) and Apple touch icon (`/apple-icon`).

The six app screens shown in the phone mockups are rendered as real UI in React
(`src/components/mockups/`) rather than image files, so they stay crisp at any size
and need no external assets.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a small design-token layer
- **Framer Motion** for scroll and entrance animations (respects `prefers-reduced-motion`)
- **shadcn/ui**-style primitives (`Button`, `Slot`) + **lucide-react** icons
- Fully **static** output, **SEO** + **Open Graph** metadata, JSON-LD structured data
- Targets **WCAG AA** contrast and keyboard accessibility

## Design system

- **Type:** Instrument Serif (display) · Plus Jakarta Sans (UI/body)
- **Color:** Ink `#141414` · Canvas `#F3F4F6` · white cards
- **Shape:** 24px card radius · pill buttons · minimal soft shadows
- No gradients, no glassmorphism — calm, editorial, generous whitespace

Global tokens live in [`tailwind.config.ts`](./tailwind.config.ts); site content
constants (name, links, email, version) live in [`src/lib/site.ts`](./src/lib/site.ts).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build    # static, type-checked, linted build
npm run start    # serve the production build
```

## Before you ship

Update the placeholders in [`src/lib/site.ts`](./src/lib/site.ts):

- `url` — your production domain (used for canonical URLs, sitemap, OG)
- `email` — your real support address
- `appStoreUrl` / `googlePlayUrl` — your store listing links

The App Store "Support URL" and "Privacy Policy URL" fields can point to
`/support` and `/privacy` respectively.
