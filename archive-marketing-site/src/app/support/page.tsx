import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Smartphone, Tag, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeader } from "@/components/site/section-header";
import { FaqList } from "@/components/site/faq";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Decision Journal. Frequently asked questions, contact details, app version and supported platforms.",
  alternates: { canonical: "/support" },
};

const infoCards = [
  { icon: Tag, label: "App version", value: site.version },
  { icon: Smartphone, label: "Platform", value: site.platforms },
  { icon: ShieldCheck, label: "Data", value: "On-device only" },
];

export default function SupportPage() {
  return (
    <div className="pb-24 sm:pb-28">
      <PageHeader
        eyebrow="Support"
        title={
          <>
            We&apos;re here
            <br />
            to help.
          </>
        }
        intro="Answers to common questions, plus a direct line to us whenever you need one."
      />

      {/* Contact + quick info */}
      <div className="container">
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-5 sm:gap-5">
          <Reveal className="md:col-span-3">
            <div className="flex h-full flex-col justify-between rounded-card border border-line/70 bg-ink p-8 text-white shadow-card sm:p-10">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Mail className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h2 className="mt-6 font-serif text-[1.9rem] leading-tight tracking-tight sm:text-[2.2rem]">
                  Email support
                </h2>
                <p className="mt-3 max-w-sm text-[1rem] leading-relaxed text-white/60">
                  Have a question, a bug to report, or an idea to share? Send us a note and we&apos;ll
                  get back to you.
                </p>
              </div>
              <a
                href={`mailto:${site.email}`}
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-pill bg-white px-6 py-3 text-[0.95rem] font-semibold text-ink transition-all duration-300 ease-smooth hover:bg-white/90 active:scale-[0.98]"
              >
                {site.email}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Stagger className="grid gap-4 md:col-span-2 sm:gap-5" as="div">
            {infoCards.map((c) => (
              <StaggerItem key={c.label}>
                <div className="flex items-center gap-4 rounded-card border border-line/70 bg-white p-6 shadow-card">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-canvas text-ink">
                    <c.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                      {c.label}
                    </p>
                    <p className="mt-1 text-[1.05rem] font-semibold tracking-tight text-ink">
                      {c.value}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      {/* FAQ */}
      <section className="pt-24 sm:pt-28" aria-labelledby="support-faq-title">
        <div className="container">
          <SectionHeader
            eyebrow="Frequently asked questions"
            title={<span id="support-faq-title">The essentials, answered.</span>}
            intro="Still not sure about something? Reach out any time and a real person will reply."
          />
          <div className="mt-14">
            <FaqList />
          </div>
        </div>
      </section>

      {/* Legal quick links */}
      <div className="container">
        <Reveal className="mx-auto mt-20 max-w-2xl">
          <div className="flex flex-col items-center gap-5 rounded-card border border-line/70 bg-white p-8 text-center shadow-card sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="text-[1.1rem] font-semibold tracking-tight text-ink">
                Looking for our policies?
              </h3>
              <p className="mt-1 text-[0.95rem] text-ink-muted">
                Read how we handle your data and the terms of use.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="secondary" size="md">
                <Link href="/privacy">Privacy</Link>
              </Button>
              <Button asChild variant="secondary" size="md">
                <Link href="/terms">Terms</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
