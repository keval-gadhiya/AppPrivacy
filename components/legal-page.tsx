import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import type { FaqItem } from "@/lib/naam-jap";
import type { PrivacySection } from "@/lib/types";

type RelatedLink = { label: string; href: string };

type LegalPageProps = {
  eyebrow: string;
  title: string;
  lastUpdated?: string;
  intro?: string;
  sections?: PrivacySection[];
  faqs?: FaqItem[];
  contactEmail?: string;
  relatedLinks?: RelatedLink[];
  children?: ReactNode;
};

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
      </div>
    </section>
  );
}

/**
 * Shared legal/support layout matching PrivacyTemplate typography & spacing.
 */
export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections = [],
  faqs,
  contactEmail,
  relatedLinks,
  children,
}: LegalPageProps) {
  const year = lastUpdated
    ? new Date(`${lastUpdated}T00:00:00Z`).getUTCFullYear()
    : new Date().getUTCFullYear();
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <article className="animate-fade-in pb-24 sm:pb-28">
      <div className="mx-auto max-w-reading px-5 sm:px-6">
        <header className="pt-16 sm:pt-24">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-[2.9rem] leading-[1.02] tracking-tighter2 text-ink sm:text-[3.75rem]">
            {title}
          </h1>
          {lastUpdated ? (
            <p className="mt-5 text-[0.95rem] text-ink-muted">
              Last updated{" "}
              <time dateTime={lastUpdated} className="text-ink-body">
                {formatDate(lastUpdated)}
              </time>
            </p>
          ) : null}
          {intro ? (
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-body sm:text-[1.1rem]">
              {intro}
            </p>
          ) : null}
        </header>

        {children}

        {faqs ? (
          <section className="mt-12 sm:mt-14" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="text-[1.35rem] font-semibold tracking-tightish text-ink sm:text-[1.6rem]"
            >
              FAQ
            </h2>
            <ul className="mt-6">
              {faqs.map((item) => (
                <li
                  key={item.question}
                  className="border-t border-line py-6 last:border-b"
                >
                  <h3 className="text-[1.05rem] font-semibold tracking-tightish text-ink">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-[1.02rem] leading-relaxed text-ink-body">
                    {item.answer}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {sections.map((section, i) => (
          <PolicySection key={section.id} number={pad(i + 1)} section={section} />
        ))}

        {contactEmail ? (
          <section
            id="contact"
            className="mt-12 scroll-mt-24 border-t border-line pt-10 sm:mt-14 sm:pt-12"
          >
            <h2 className="text-[1.35rem] font-semibold tracking-tightish text-ink sm:text-[1.6rem]">
              Contact
            </h2>
            <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-ink-body">
              <p>
                If you have any questions about {title}, please contact:
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
              <p className="text-ink-muted">
                Expected response time: within 2 business days.
              </p>
            </div>
          </section>
        ) : null}

        <footer className="mt-16 border-t border-line pt-8 sm:mt-20">
          {relatedLinks && relatedLinks.length > 0 ? (
            <nav aria-label="Related pages" className="mb-6 flex flex-wrap gap-x-5 gap-y-2">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink-body underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}
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
