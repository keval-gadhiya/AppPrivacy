import * as React from "react";
import { SectionHeader } from "@/components/site/section-header";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  {
    n: "01",
    title: "Capture your decision",
    body: "Before you commit, write down the choice, your reasoning, the options and how confident you feel.",
  },
  {
    n: "02",
    title: "Wait for the outcome",
    body: "Set it down and let life run its course. A gentle reminder brings you back when it's time.",
  },
  {
    n: "03",
    title: "Review what happened",
    body: "Return with fresh eyes. Compare what you expected with what actually unfolded, honestly.",
  },
  {
    n: "04",
    title: "Learn and improve",
    body: "Notice the patterns across many decisions and watch your judgment sharpen, entry by entry.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-white py-24 sm:py-28 md:py-32"
      aria-labelledby="how-title"
    >
      <div className="container">
        <SectionHeader
          eyebrow="How it works"
          title={<span id="how-title">Four steps. One better decision at a time.</span>}
          intro="A simple, repeatable rhythm that turns everyday choices into a practice you actually improve at."
        />

        <ol className="mx-auto mt-16 max-w-3xl">
          {steps.map((step, i) => (
            <li key={step.n} className="relative">
              <Reveal delay={i * 0.05} className="flex gap-6 sm:gap-10">
                {/* rail */}
                <div className="flex flex-col items-center">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-canvas font-serif text-[1.35rem] tracking-tight text-ink">
                    {step.n}
                  </span>
                  {i < steps.length - 1 ? (
                    <span className="my-2 w-px flex-1 bg-line" aria-hidden="true" />
                  ) : null}
                </div>

                <div className={i < steps.length - 1 ? "pb-12" : "pb-0"}>
                  <h3 className="text-[1.4rem] font-semibold tracking-tight text-ink sm:text-[1.6rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[1.02rem] leading-relaxed text-ink-muted">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
