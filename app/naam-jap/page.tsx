import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { naamJapMeta, naamJapPaths } from "@/lib/naam-jap";
import { site } from "@/lib/site";

const path = "/naam-jap/";

export const metadata: Metadata = {
  title: "Naam Jap",
  description: naamJapMeta.description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Naam Jap · Privacy & Support",
    description: naamJapMeta.description,
    url: `${site.url}${path}`,
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: "Naam Jap · Privacy & Support",
    description: naamJapMeta.description,
  },
};

const links = [
  {
    href: naamJapPaths.privacy,
    name: "Privacy Policy",
    description: "How Naam Jap handles information — offline and private.",
  },
  {
    href: naamJapPaths.support,
    name: "Support",
    description: "FAQ, reminders, reset progress, and how to contact us.",
  },
  {
    href: naamJapPaths.terms,
    name: "Terms of Service",
    description: "Standard terms of use for the Naam Jap app.",
  },
];

export default function NaamJapHubPage() {
  const year = new Date().getUTCFullYear();

  return (
    <div className="animate-fade-in pb-24 sm:pb-28">
      <div className="mx-auto max-w-reading px-5 sm:px-6">
        <header className="pt-16 sm:pt-24">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Naam Jap
          </p>
          <h1 className="mt-4 font-serif text-[2.9rem] leading-[1.02] tracking-tighter2 text-ink sm:text-[3.75rem]">
            Privacy &amp; Support
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-body sm:text-[1.1rem]">
            {naamJapMeta.description}
          </p>
        </header>

        <nav aria-label="Naam Jap legal pages" className="mt-12 sm:mt-14">
          <ul>
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-6 border-t border-line py-6 transition-colors hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/60 focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-[1.15rem] font-semibold tracking-tightish text-ink">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-[0.95rem] leading-snug text-ink-muted">
                      {item.description}
                    </span>
                  </span>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition-all group-hover:border-ink group-hover:text-ink"
                    aria-hidden="true"
                  >
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-line" />
        </nav>

        <footer className="mt-16 sm:mt-20">
          <p className="text-sm text-ink-muted">
            © {year} {site.publisher}. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            <Link
              href="/"
              className="text-ink-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
            >
              View all privacy policies
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
