import * as React from "react";
import Link from "next/link";
import type { PrivacyContent, PrivacySection } from "@/lib/types";
import { site } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import { PrivacySummary } from "./privacy-summary";

/* A single numbered policy section. */
function PolicySection({
  number,
  section,
}: {
  number: string;
  section: PrivacySection;
}) {
  return (
    <section
      id={section.id}
      className="mt-12 scroll-mt-24 border-t border-line pt-10 sm:mt-14 sm:pt-12"
    >
      <div className="flex items-baseline gap-4">
        <span
          className="font-serif text-lg leading-none text-ink-faint tabular-nums"
          aria-hidden="true"
        >
          {number}
        </span>
        <h2 className="text-[1.35rem] font-semibold tracking-tightish text-ink sm:text-[1.6rem]">
          {section.heading}
        </h2>
      </div>
      <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-ink-body">
        {section.paragraphs?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {section.bulletsIntro ? <p>{section.bulletsIntro}</p> : null}
        {section.bullets ? (
          <ul className="space-y-2.5 pt-1">
            {section.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-ink-faint"
                  aria-hidden="true"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {section.note ? <p className="text-ink-muted">{section.note}</p> : null}
      </div>
    </section>
  );
}

/**
 * The one reusable privacy policy layout. Every app renders through this by
 * passing its own `PrivacyContent`.
 *
 * Order: App Name + Last Updated → Introduction → Privacy at a Glance →
 * Information We Collect → How Your Data Is Stored → Third-Party Services →
 * Children's Privacy → Changes to This Policy → Contact → Copyright.
 * By convention the first entry in `sections` is the Introduction (shown as a
 * lead, unnumbered) and the remaining entries are numbered 01…N. Contact is
 * rendered from site contact details.
 */
export function PrivacyTemplate({
  title,
  lastUpdated,
  contactEmail,
  privacySummary,
  sections,
}: PrivacyContent) {
  const [intro, ...detailSections] = sections;
  const year = new Date(`${lastUpdated}T00:00:00Z`).getUTCFullYear();
  const pad = (n: number) => String(n).padStart(2, "0");
  const contactNumber = pad(detailSections.length + 1);

  return (
    <article className="animate-fade-in pb-24 sm:pb-28">
      <div className="mx-auto max-w-reading px-5 sm:px-6">
        <header className="pt-16 sm:pt-24">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Privacy Policy
          </p>
          <h1 className="mt-4 font-serif text-[2.9rem] leading-[1.02] tracking-tighter2 text-ink sm:text-[3.75rem]">
            {title}
          </h1>
          <p className="mt-5 text-[0.95rem] text-ink-muted">
            Last updated{" "}
            <time dateTime={lastUpdated} className="text-ink-body">
              {formatDate(lastUpdated)}
            </time>
          </p>
        </header>

        {/* Introduction (lead) */}
        {intro ? (
          <section id={intro.id} className="mt-10 sm:mt-12">
            <h2 className="text-[1.35rem] font-semibold tracking-tightish text-ink sm:text-[1.6rem]">
              {intro.heading}
            </h2>
            <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-ink-body sm:text-[1.1rem]">
              {intro.paragraphs?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ) : null}

        {/* Privacy at a Glance */}
        <div className="mt-10 sm:mt-12">
          <PrivacySummary items={privacySummary} />
        </div>

        {/* Numbered sections */}
        {detailSections.map((section, i) => (
          <PolicySection key={section.id} number={pad(i + 1)} section={section} />
        ))}

        {/* Contact */}
        <section
          id="contact"
          className="mt-12 scroll-mt-24 border-t border-line pt-10 sm:mt-14 sm:pt-12"
        >
          <div className="flex items-baseline gap-4">
            <span
              className="font-serif text-lg leading-none text-ink-faint tabular-nums"
              aria-hidden="true"
            >
              {contactNumber}
            </span>
            <h2 className="text-[1.35rem] font-semibold tracking-tightish text-ink sm:text-[1.6rem]">
              Contact
            </h2>
          </div>
          <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-ink-body">
            <p>
              If you have any questions or concerns about this Privacy Policy or the
              application, please contact:
            </p>
            <p className="font-medium text-ink">{site.publisher}</p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
              >
                {contactEmail}
              </a>
            </p>
            <p>
              Privacy Website:{" "}
              <a
                href={site.url}
                className="font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
              >
                {site.url}/
              </a>
            </p>
          </div>
        </section>

        {/* Copyright */}
        <footer className="mt-16 border-t border-line pt-8 sm:mt-20">
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
    </article>
  );
}
