"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/faq";
import { cn } from "@/lib/utils";

function AccordionRow({
  q,
  a,
  isOpen,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const reduce = useReducedMotion();
  const contentId = `faq-panel-${index}`;
  const buttonId = `faq-control-${index}`;

  return (
    <div className="border-b border-line last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/70 focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
        >
          <span className="text-[1.08rem] font-semibold tracking-tight text-ink sm:text-[1.15rem]">
            {q}
          </span>
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink transition-all duration-300 ease-smooth",
              isOpen && "rotate-45 bg-ink text-white"
            )}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-prose pb-7 pr-12 text-[1rem] leading-relaxed text-ink-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqList({ className }: { className?: string }) {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <div className={cn("mx-auto max-w-2xl", className)}>
      {faqs.map((item, i) => (
        <AccordionRow
          key={item.q}
          index={i}
          q={item.q}
          a={item.a}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}
