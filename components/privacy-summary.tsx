import * as React from "react";
import { CheckIcon } from "./icons";

/**
 * The "Privacy at a Glance" card — a scannable checklist of the app's
 * privacy promises.
 */
export function PrivacySummary({ items }: { items: string[] }) {
  return (
    <section
      aria-labelledby="privacy-at-a-glance"
      className="rounded-2xl border border-line bg-paper p-6 sm:p-8"
    >
      <h2
        id="privacy-at-a-glance"
        className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink-muted"
      >
        Privacy at a Glance
      </h2>
      <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-paper"
              aria-hidden="true"
            >
              <CheckIcon className="h-3 w-3" />
            </span>
            <span className="text-[0.98rem] leading-snug text-ink-body">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
