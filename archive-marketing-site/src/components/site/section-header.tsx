import * as React from "react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill border border-line bg-white px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink-muted shadow-soft",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-serif text-[2.15rem] leading-[1.05] tracking-tight text-ink sm:text-[2.75rem] md:text-[3.15rem]">
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 text-[1.05rem] leading-relaxed text-ink-muted",
              align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
            )}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
