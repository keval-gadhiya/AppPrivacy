import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Check,
  Plus,
  ChevronRight,
  Clock,
  ArrowUpRight,
  Sparkles,
  Lock,
  WifiOff,
  Share,
} from "lucide-react";

/* ----------------------------- shared atoms ----------------------------- */

function Overline({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink-faint", className)}>
      {children}
    </p>
  );
}

function StatusDot({ tone }: { tone: "pending" | "done" }) {
  return (
    <span
      className={cn(
        "inline-block h-1.5 w-1.5 rounded-full",
        tone === "done" ? "bg-ink" : "border border-ink/40"
      )}
    />
  );
}

function ConfidenceBar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
      <div className="h-full rounded-full bg-ink" style={{ width: `${value}%` }} />
    </div>
  );
}

/* ------------------------------- 1. Journal ------------------------------ */

export function ScreenJournal() {
  const items = [
    { title: "Accept the Lyra offer", ctx: "Career · Higher pay, less autonomy", conf: 65, tone: "done" as const, when: "Reviewed" },
    { title: "Move the launch to Q3", ctx: "Product · More polish vs. momentum", conf: 80, tone: "pending" as const, when: "In 21 days" },
    { title: "Hire a second designer", ctx: "Team · Budget is tight this quarter", conf: 55, tone: "pending" as const, when: "In 9 days" },
    { title: "Switch banks", ctx: "Finance · Better rate, migration cost", conf: 72, tone: "done" as const, when: "Reviewed" },
  ];
  return (
    <div className="flex h-full flex-col px-5 pt-3">
      <div className="flex items-end justify-between">
        <div>
          <Overline>July 2026</Overline>
          <h3 className="mt-1 font-serif text-[1.85rem] leading-none tracking-tight text-ink">Decisions</h3>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
          <Plus className="h-4 w-4" strokeWidth={2.25} />
        </div>
      </div>

      <div className="mt-4 flex gap-1.5 rounded-pill bg-ink/[0.06] p-1 text-[0.68rem] font-medium">
        <span className="flex-1 rounded-pill bg-white py-1.5 text-center text-ink shadow-soft">All</span>
        <span className="flex-1 py-1.5 text-center text-ink-muted">Pending</span>
        <span className="flex-1 py-1.5 text-center text-ink-muted">Reviewed</span>
      </div>

      <div className="mt-3 flex-1 space-y-2.5 overflow-hidden">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl bg-white p-3.5 shadow-soft">
            <div className="flex items-start justify-between gap-2">
              <p className="text-[0.82rem] font-semibold leading-snug tracking-tight text-ink">{it.title}</p>
              <div className="mt-0.5 flex shrink-0 items-center gap-1">
                <StatusDot tone={it.tone} />
                <span className="text-[0.6rem] font-medium text-ink-muted">{it.when}</span>
              </div>
            </div>
            <p className="mt-1 text-[0.68rem] leading-snug text-ink-muted">{it.ctx}</p>
            <div className="mt-2.5 flex items-center gap-2">
              <ConfidenceBar value={it.conf} />
              <span className="w-8 shrink-0 text-right text-[0.6rem] font-semibold text-ink-soft">{it.conf}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------- 2. Capture ------------------------------ */

export function ScreenCapture() {
  return (
    <div className="flex h-full flex-col px-5 pt-3">
      <div className="flex items-center justify-between text-[0.72rem] font-medium">
        <span className="text-ink-muted">Cancel</span>
        <span className="font-serif text-[0.95rem] tracking-tight text-ink">New Decision</span>
        <span className="text-ink/30">Save</span>
      </div>

      <div className="mt-5 flex-1 space-y-4">
        <div>
          <Overline>Decision</Overline>
          <p className="mt-1.5 text-[1.05rem] font-semibold leading-snug tracking-tight text-ink">
            Should we raise a seed round now?
          </p>
        </div>

        <div>
          <Overline>Context</Overline>
          <p className="mt-1.5 text-[0.72rem] leading-relaxed text-ink-soft">
            Runway is 11 months. Growth is steady but not explosive. Raising now means less
            dilution later if the next quarter lands.
          </p>
        </div>

        <div>
          <Overline>Options</Overline>
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center justify-between rounded-xl border border-ink bg-ink/[0.03] px-3 py-2">
              <span className="text-[0.74rem] font-medium text-ink">Raise a seed round now</span>
              <Check className="h-3.5 w-3.5 text-ink" strokeWidth={2.5} />
            </div>
            <div className="flex items-center justify-between rounded-xl border border-line bg-white px-3 py-2">
              <span className="text-[0.74rem] text-ink-muted">Wait one more quarter</span>
              <span className="h-3.5 w-3.5 rounded-full border border-ink/25" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <Overline>Confidence</Overline>
            <span className="font-serif text-[0.95rem] tracking-tight text-ink">70%</span>
          </div>
          <div className="relative mt-2">
            <div className="h-1.5 w-full rounded-full bg-ink/10" />
            <div className="absolute left-0 top-0 h-1.5 w-[70%] rounded-full bg-ink" />
            <div className="absolute left-[70%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-ink bg-white shadow-soft" />
          </div>
        </div>
      </div>

      <button className="mb-4 mt-2 flex h-11 w-full items-center justify-center rounded-pill bg-ink text-[0.8rem] font-semibold text-white">
        Save decision
      </button>
    </div>
  );
}

/* --------------------------- 3. Decision detail -------------------------- */

export function ScreenDecision() {
  return (
    <div className="flex h-full flex-col px-5 pt-3">
      <div className="flex items-center gap-2 text-[0.72rem] text-ink-muted">
        <ChevronRight className="h-3.5 w-3.5 rotate-180" />
        <span>Decisions</span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-pill border border-ink/15 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">
          <Clock className="h-3 w-3" /> Awaiting outcome
        </span>
      </div>

      <h3 className="mt-3 font-serif text-[1.35rem] leading-tight tracking-tight text-ink">
        Move the launch to Q3
      </h3>
      <p className="mt-1 text-[0.66rem] text-ink-muted">Logged June 28 · Review on July 19</p>

      <div className="mt-4 space-y-3">
        <div className="rounded-2xl bg-white p-3.5 shadow-soft">
          <Overline>Why I&apos;m deciding this</Overline>
          <p className="mt-1.5 text-[0.72rem] leading-relaxed text-ink-soft">
            More time means a calmer launch and fewer bugs, but we risk losing the momentum from
            the beta waitlist.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-3.5 shadow-soft">
          <div className="flex items-center justify-between">
            <Overline>Confidence at decision</Overline>
            <span className="font-serif text-[1.05rem] tracking-tight text-ink">80%</span>
          </div>
          <div className="mt-2">
            <ConfidenceBar value={80} />
          </div>
        </div>

        <div className="rounded-2xl bg-white p-3.5 shadow-soft">
          <Overline>I expect that</Overline>
          <p className="mt-1.5 text-[0.72rem] leading-relaxed text-ink-soft">
            The extra six weeks will lift launch-day retention above 40%.
          </p>
        </div>
      </div>

      <div className="mt-auto mb-4 flex items-center justify-between rounded-2xl bg-ink p-3.5 text-white">
        <div>
          <p className="text-[0.7rem] font-semibold">Review reminder set</p>
          <p className="text-[0.62rem] text-white/60">We&apos;ll nudge you on July 19</p>
        </div>
        <Clock className="h-4 w-4 text-white/80" />
      </div>
    </div>
  );
}

/* ------------------------------ 4. Review -------------------------------- */

export function ScreenReview() {
  return (
    <div className="flex h-full flex-col px-5 pt-3">
      <Overline>Review outcome</Overline>
      <h3 className="mt-1 font-serif text-[1.4rem] leading-tight tracking-tight text-ink">
        Accept the Lyra offer
      </h3>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <div className="rounded-2xl bg-white p-3 shadow-soft">
          <Overline>Expected</Overline>
          <p className="mt-1.5 text-[0.68rem] leading-snug text-ink-soft">
            More pay would offset the loss of ownership over my work.
          </p>
        </div>
        <div className="rounded-2xl bg-ink p-3 text-white">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/50">Reality</p>
          <p className="mt-1.5 text-[0.68rem] leading-snug text-white/90">
            The pay helped, but autonomy mattered far more than I predicted.
          </p>
        </div>
      </div>

      <div className="mt-3 rounded-2xl bg-white p-3.5 shadow-soft">
        <div className="flex items-center justify-between">
          <Overline>How it turned out</Overline>
          <span className="text-[0.66rem] font-semibold text-ink-soft">Mixed</span>
        </div>
        <div className="mt-2.5 flex gap-1.5">
          {["Worse", "Mixed", "Better"].map((label, i) => (
            <span
              key={label}
              className={cn(
                "flex-1 rounded-pill py-1.5 text-center text-[0.62rem] font-medium",
                i === 1 ? "bg-ink text-white" : "bg-ink/[0.06] text-ink-muted"
              )}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-2xl border border-ink/10 bg-canvas p-3.5">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-ink" />
          <Overline className="text-ink-soft">What I learned</Overline>
        </div>
        <p className="mt-1.5 text-[0.72rem] leading-relaxed text-ink-soft">
          I consistently underweight autonomy when money is on the table. Worth a second look
          next time.
        </p>
      </div>

      <button className="mb-4 mt-auto flex h-11 w-full items-center justify-center gap-1.5 rounded-pill bg-ink text-[0.8rem] font-semibold text-white">
        Save reflection <ArrowUpRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

/* ------------------------------ 5. Insights ------------------------------ */

export function ScreenInsights() {
  const bars = [40, 62, 55, 78, 70, 85, 80];
  return (
    <div className="flex h-full flex-col px-5 pt-3">
      <Overline>Your patterns</Overline>
      <h3 className="mt-1 font-serif text-[1.5rem] leading-tight tracking-tight text-ink">Insights</h3>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <div className="rounded-2xl bg-white p-3.5 shadow-soft">
          <p className="font-serif text-[1.7rem] leading-none tracking-tight text-ink">128</p>
          <p className="mt-1 text-[0.62rem] text-ink-muted">Decisions logged</p>
        </div>
        <div className="rounded-2xl bg-white p-3.5 shadow-soft">
          <p className="font-serif text-[1.7rem] leading-none tracking-tight text-ink">74%</p>
          <p className="mt-1 text-[0.62rem] text-ink-muted">Calibration score</p>
        </div>
      </div>

      <div className="mt-2.5 rounded-2xl bg-white p-3.5 shadow-soft">
        <div className="flex items-center justify-between">
          <Overline>Confidence vs. outcome</Overline>
          <span className="text-[0.6rem] font-medium text-ink-muted">6 mo</span>
        </div>
        <div className="mt-3 flex h-20 items-end gap-1.5">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md bg-ink/[0.12]" style={{ height: `${h}%` }}>
              <div className="h-full w-full rounded-t-md bg-ink" style={{ opacity: 0.25 + (h / 100) * 0.6 }} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2.5 rounded-2xl border border-ink/10 bg-canvas p-3.5">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-ink" />
          <Overline className="text-ink-soft">Pattern noticed</Overline>
        </div>
        <p className="mt-1.5 text-[0.72rem] leading-relaxed text-ink-soft">
          You&apos;re best on financial calls and most overconfident on hiring. Slow those down.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------ 6. Private ------------------------------- */

export function ScreenPrivate() {
  const rows = [
    { icon: Lock, title: "On-device only", sub: "Nothing leaves your phone" },
    { icon: WifiOff, title: "Works offline", sub: "No internet required, ever" },
    { icon: Share, title: "Export anytime", sub: "Your journal, your files" },
  ];
  return (
    <div className="flex h-full flex-col px-5 pt-3">
      <Overline>Settings</Overline>
      <h3 className="mt-1 font-serif text-[1.5rem] leading-tight tracking-tight text-ink">
        Private by design
      </h3>

      <div className="mt-4 flex flex-col items-center rounded-2xl bg-ink px-4 py-6 text-center text-white">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          <Lock className="h-5 w-5" />
        </div>
        <p className="mt-3 text-[0.82rem] font-semibold">No account needed</p>
        <p className="mt-1 max-w-[14rem] text-[0.66rem] leading-relaxed text-white/60">
          No sign-up, no cloud, no tracking. Your thinking stays yours.
        </p>
      </div>

      <div className="mt-3 space-y-2">
        {rows.map((r) => (
          <div key={r.title} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-soft">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-ink/[0.06]">
              <r.icon className="h-4 w-4 text-ink" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[0.76rem] font-semibold text-ink">{r.title}</p>
              <p className="text-[0.62rem] text-ink-muted">{r.sub}</p>
            </div>
            <ChevronRight className="h-3.5 w-3.5 text-ink/25" />
          </div>
        ))}
      </div>

      <button className="mb-4 mt-auto flex h-11 w-full items-center justify-center gap-1.5 rounded-pill border border-ink/15 bg-white text-[0.8rem] font-semibold text-ink">
        <Share className="h-3.5 w-3.5" /> Export journal
      </button>
    </div>
  );
}

/* ------------------------------ registry --------------------------------- */

export type ScreenDef = {
  id: string;
  label: string;
  caption: string;
  Component: React.ComponentType;
};

export const screens: ScreenDef[] = [
  { id: "journal", label: "Your journal", caption: "Every decision, in one calm place.", Component: ScreenJournal },
  { id: "capture", label: "Capture", caption: "Log context, options and confidence.", Component: ScreenCapture },
  { id: "decision", label: "Awaiting", caption: "Set it down and wait for reality.", Component: ScreenDecision },
  { id: "review", label: "Review", caption: "Compare what you expected to what happened.", Component: ScreenReview },
  { id: "insights", label: "Insights", caption: "See the patterns in how you decide.", Component: ScreenInsights },
  { id: "private", label: "Private", caption: "On-device, offline, always yours.", Component: ScreenPrivate },
];
