"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AppIcon } from "@/components/brand/app-icon";
import { StoreBadges } from "@/components/brand/store-badges";
import { PhoneFrame } from "@/components/mockups/phone-frame";
import { ScreenJournal, ScreenCapture, ScreenReview } from "@/components/mockups/phone-screens";
import { site } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36" aria-labelledby="hero-title">
      {/* soft radial vignette, no gradients on content — just a faint canvas depth */}
      <div className="container relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div {...rise(0)}>
            <AppIcon
              size={104}
              priority
              className="[filter:drop-shadow(0_18px_32px_rgba(20,20,20,0.16))]"
            />
          </motion.div>

          <motion.div {...rise(0.08)} className="mt-7">
            <span className="inline-flex items-center gap-2 rounded-pill border border-line bg-white px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-muted shadow-soft">
              Productivity · {site.platforms}
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            {...rise(0.14)}
            className="mt-6 font-serif text-[3rem] leading-[0.98] tracking-tight text-ink sm:text-[4rem] md:text-[4.75rem]"
          >
            Think Better.
            <br />
            Decide Better.
          </motion.h1>

          <motion.p
            {...rise(0.2)}
            className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-ink-muted sm:text-[1.2rem]"
          >
            Record important decisions before you make them, review outcomes later, and
            continuously improve your judgment.
          </motion.p>

          <motion.div {...rise(0.26)} className="mt-9">
            <StoreBadges
              appStoreUrl={site.appStoreUrl}
              googlePlayUrl={site.googlePlayUrl}
              className="justify-center"
            />
          </motion.div>

          <motion.p {...rise(0.32)} className="mt-5 text-[0.82rem] font-medium text-ink-faint">
            Free to start · No account required · Private by design
          </motion.p>
        </div>

        <HeroShowcase />
      </div>
    </section>
  );
}

function HeroShowcase() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mt-16 sm:mt-20">
      {/* grounding line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-line" aria-hidden="true" />

      <div className="mx-auto flex max-w-4xl items-end justify-center gap-4 sm:gap-6">
        {/* left phone — hidden on small screens */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="hidden w-[190px] shrink-0 origin-bottom pb-6 lg:block"
        >
          <PhoneFrame>
            <ScreenCapture />
          </PhoneFrame>
        </motion.div>

        {/* center phone */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="z-10 w-[248px] shrink-0 sm:w-[268px]"
        >
          <PhoneFrame>
            <ScreenJournal />
          </PhoneFrame>
        </motion.div>

        {/* right phone — hidden on small screens */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, rotate: 4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="hidden w-[190px] shrink-0 origin-bottom pb-6 lg:block"
        >
          <PhoneFrame>
            <ScreenReview />
          </PhoneFrame>
        </motion.div>
      </div>
    </div>
  );
}
