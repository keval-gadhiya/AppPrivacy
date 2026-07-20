import * as React from "react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/site/section-header";

export function PageHeader({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  meta?: React.ReactNode;
}) {
  return (
    <header className="pt-32 sm:pt-36">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.03] tracking-tight text-ink sm:text-[3.4rem]">
              {title}
            </h1>
          </Reveal>
          {intro ? (
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-[1.08rem] leading-relaxed text-ink-muted">
                {intro}
              </p>
            </Reveal>
          ) : null}
          {meta ? (
            <Reveal delay={0.15}>
              <p className="mt-6 text-[0.82rem] font-medium uppercase tracking-[0.16em] text-ink-faint">
                {meta}
              </p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </header>
  );
}
