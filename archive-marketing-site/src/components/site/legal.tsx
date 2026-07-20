import * as React from "react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/** A single legal/policy section: numbered heading + body content. */
export function LegalSection({
  id,
  index,
  title,
  children,
}: {
  id?: string;
  index?: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal as="section" id={id} className="scroll-mt-28 border-t border-line pt-10">
      <div className="flex items-baseline gap-4">
        {typeof index === "number" ? (
          <span className="font-serif text-[1.1rem] leading-none text-ink-faint">
            {String(index).padStart(2, "0")}
          </span>
        ) : null}
        <h2 className="text-[1.5rem] font-semibold tracking-tight text-ink sm:text-[1.7rem]">
          {title}
        </h2>
      </div>
      <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-ink-muted [&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4">
        {children}
      </div>
    </Reveal>
  );
}

export function LegalList({
  items,
  className,
}: {
  items: React.ReactNode[];
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="mx-auto mt-16 max-w-2xl space-y-12 pb-8 sm:mt-20">{children}</div>
    </div>
  );
}
