import * as React from "react";
import {
  PenLine,
  Scale,
  TrendingUp,
  WifiOff,
  ShieldCheck,
  Download,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/site/section-header";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const features: Feature[] = [
  {
    icon: PenLine,
    title: "Capture every decision",
    body: "Log the context, your confidence, the options on the table and what you expect to happen.",
  },
  {
    icon: Scale,
    title: "Review outcomes",
    body: "When the results are in, compare what you expected with what reality actually delivered.",
  },
  {
    icon: TrendingUp,
    title: "Learn from patterns",
    body: "Surface the biases and blind spots that shape your calls, and improve your judgment over time.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    body: "No connection needed. Everything you write stays on your device and is ready whenever you are.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    body: "No accounts. No cloud. No tracking. Your decisions are yours alone, and they never leave your phone.",
  },
  {
    icon: Download,
    title: "Export anytime",
    body: "Your journal belongs to you. Export a clean copy whenever you want, no strings attached.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-28 md:py-32" aria-labelledby="features-title">
      <div className="container">
        <SectionHeader
          eyebrow="Everything you need"
          title={
            <span id="features-title">
              A complete loop for <span className="font-serif italic">better judgment</span>.
            </span>
          }
          intro="Decision Journal is deliberately small. Six focused features that work together to make you a clearer thinker."
        />

        <Stagger className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <article className="group h-full rounded-card border border-line/70 bg-white p-7 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                  <f.icon className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-[1.2rem] font-semibold tracking-tight text-ink">{f.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-muted">{f.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
