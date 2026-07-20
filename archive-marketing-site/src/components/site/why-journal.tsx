import * as React from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/site/section-header";

const cards = [
  {
    kicker: "Memory is unreliable",
    title: "You remember being right.",
    body: "Hindsight quietly rewrites the past. Once you know the outcome, you forget how uncertain you truly were, so the lesson slips away.",
  },
  {
    kicker: "Confidence isn't accuracy",
    title: "Calibration is a skill.",
    body: "Writing down how sure you felt turns a vague hunch into something you can measure, and measuring is the first step to getting better.",
  },
  {
    kicker: "Small habit, big compounding",
    title: "Two minutes, repeated.",
    body: "A short note before each decision is all it takes. Across months, those notes become a map of exactly how you think.",
  },
];

export function WhyJournal() {
  return (
    <section id="overview" className="scroll-mt-24 py-24 sm:py-28 md:py-32" aria-labelledby="why-title">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>Why keep one</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="why-title"
              className="mx-auto mt-6 max-w-3xl font-serif text-[2.4rem] leading-[1.08] tracking-tight text-ink sm:text-[3.2rem] md:text-[3.75rem]"
            >
              The quality of your life is the quality of your{" "}
              <span className="italic">decisions</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-xl text-[1.1rem] leading-relaxed text-ink-muted">
              Yet almost no one keeps a record of the calls they make. Decision Journal is a quiet
              tool for the few who want to get measurably better.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-4 md:grid-cols-3 sm:gap-5">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <article className="flex h-full flex-col rounded-card border border-line/70 bg-white p-8 shadow-card sm:p-9">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                  {card.kicker}
                </p>
                <h3 className="mt-5 font-serif text-[1.7rem] leading-tight tracking-tight text-ink">
                  {card.title}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-muted">{card.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
