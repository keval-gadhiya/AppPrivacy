"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PhoneFrame } from "@/components/mockups/phone-frame";
import { screens } from "@/components/mockups/phone-screens";
import { SectionHeader } from "@/components/site/section-header";
import { cn } from "@/lib/utils";

export function Screenshots() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(0);

  const scrollToIndex = React.useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(screens.length - 1, index));
    const child = track.children[clamped] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  }, []);

  const onScroll = React.useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const mid = el.offsetLeft - track.offsetLeft + el.clientWidth / 2;
      const dist = Math.abs(mid - center);
      if (dist < best) {
        best = dist;
        nearest = i;
      }
    });
    setActive(nearest);
  }, []);

  return (
    <section id="screens" className="py-24 sm:py-28 md:py-32" aria-labelledby="screens-title">
      <div className="container">
        <SectionHeader
          eyebrow="A closer look"
          title={
            <span id="screens-title">
              Designed to be <span className="font-serif italic">calm</span>.
            </span>
          }
          intro="Six screens, one idea: give your thinking a quiet place to live, from the first note to the final review."
        />
      </div>

      <div className="relative mt-14">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="fade-x flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-[max(1.25rem,calc((100vw-72rem)/2))] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {screens.map(({ id, label, caption, Component }) => (
            <figure key={id} className="w-[248px] shrink-0 snap-center sm:w-[268px]">
              <PhoneFrame>
                <Component />
              </PhoneFrame>
              <figcaption className="mt-6 px-2 text-center">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-faint">
                  {label}
                </p>
                <p className="mt-2 text-[0.95rem] leading-snug text-ink-soft">{caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="container mt-10 flex items-center justify-between">
          <div className="flex items-center gap-2" role="tablist" aria-label="Screenshot navigation">
            {screens.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={`Go to ${s.label}`}
                onClick={() => scrollToIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 ease-smooth",
                  active === i ? "w-7 bg-ink" : "w-2 bg-ink/20 hover:bg-ink/40"
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToIndex(active - 1)}
              disabled={active === 0}
              aria-label="Previous screenshot"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-soft transition-all hover:border-ink/25 disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(active + 1)}
              disabled={active === screens.length - 1}
              aria-label="Next screenshot"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-soft transition-all hover:border-ink/25 disabled:opacity-40"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
