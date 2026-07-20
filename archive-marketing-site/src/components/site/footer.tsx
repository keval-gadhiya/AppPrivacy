import * as React from "react";
import Link from "next/link";
import { AppIcon } from "@/components/brand/app-icon";
import { site } from "@/lib/site";

const columns: { heading: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Overview", href: "/#overview" },
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Get the app",
    links: [
      { label: "App Store", href: site.appStoreUrl, external: true },
      { label: "Google Play", href: site.googlePlayUrl, external: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Support", href: "/support" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
              <AppIcon size={38} className="[filter:drop-shadow(0_2px_5px_rgba(20,20,20,0.12))]" />
              <span className="text-[1.05rem] font-semibold tracking-tight">{site.name}</span>
            </Link>
            <p className="mt-4 font-serif text-xl leading-snug tracking-tight text-ink-soft">
              Think Better.
              <br />
              Decide Better.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) =>
                  link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[0.92rem] text-ink-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.92rem] text-ink-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-sm text-ink-muted sm:flex-row sm:items-center">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <p className="text-ink-faint">
            Made for clearer thinking · v{site.version}
          </p>
        </div>
      </div>
    </footer>
  );
}
