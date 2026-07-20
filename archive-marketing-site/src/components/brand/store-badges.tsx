import * as React from "react";
import { cn } from "@/lib/utils";

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.05 12.54c-.02-2.06 1.68-3.05 1.76-3.1-.96-1.4-2.46-1.6-2.99-1.62-1.27-.13-2.48.75-3.13.75-.64 0-1.64-.73-2.7-.71-1.39.02-2.67.81-3.38 2.05-1.44 2.5-.37 6.2 1.03 8.23.69.99 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.81-1 2.49-2 .78-1.15 1.11-2.26 1.13-2.32-.02-.01-2.17-.83-2.19-3.29zM15.1 6.2c.57-.69.95-1.65.85-2.6-.82.03-1.81.54-2.39 1.23-.52.6-.98 1.58-.86 2.51.91.07 1.84-.46 2.4-1.14z" />
    </svg>
  );
}

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M3.6 2.4a1 1 0 0 0-.5.88v17.44a1 1 0 0 0 .5.88l9.9-9.6-9.9-9.6zm11.3 8.24 2.9-2.82-8.03-4.6a1 1 0 0 0-.4-.12l5.53 7.54zm0 2.72-5.53 7.54c.14-.01.28-.05.4-.12l8.03-4.6-2.9-2.82zm4.2-2.02-2.3-1.32-3.02 2.94 3.02 2.94 2.3-1.32a1.34 1.34 0 0 0 0-2.36z" />
    </svg>
  );
}

type Tone = "dark" | "light";

type BadgeProps = {
  href: string;
  className?: string;
  tone?: Tone;
};

function badgeClasses(tone: Tone) {
  return cn(
    "group inline-flex h-[3.4rem] items-center gap-3 rounded-pill px-5 shadow-soft transition-all duration-300 ease-smooth active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
    tone === "dark"
      ? "bg-ink text-white hover:bg-ink/90 focus-visible:ring-ink/70"
      : "bg-white text-ink hover:bg-white/90 focus-visible:ring-white/80"
  );
}

const overlineTone = (tone: Tone) => (tone === "dark" ? "text-white/60" : "text-ink/45");

export function AppStoreBadge({ href, className, tone = "dark" }: BadgeProps) {
  return (
    <a
      href={href}
      aria-label="Download Decision Journal on the App Store"
      className={cn(badgeClasses(tone), className)}
    >
      <AppleGlyph className="h-6 w-6 shrink-0" />
      <span className="flex flex-col items-start leading-none">
        <span className={cn("text-[0.62rem] font-medium uppercase tracking-[0.16em]", overlineTone(tone))}>
          Download on the
        </span>
        <span className="mt-1 text-[1.05rem] font-semibold tracking-tight">App Store</span>
      </span>
    </a>
  );
}

export function GooglePlayBadge({ href, className, tone = "dark" }: BadgeProps) {
  return (
    <a
      href={href}
      aria-label="Get Decision Journal on Google Play"
      className={cn(badgeClasses(tone), className)}
    >
      <PlayGlyph className="h-[1.35rem] w-[1.35rem] shrink-0" />
      <span className="flex flex-col items-start leading-none">
        <span className={cn("text-[0.62rem] font-medium uppercase tracking-[0.16em]", overlineTone(tone))}>
          Get it on
        </span>
        <span className="mt-1 text-[1.05rem] font-semibold tracking-tight">Google Play</span>
      </span>
    </a>
  );
}

export function StoreBadges({
  appStoreUrl,
  googlePlayUrl,
  className,
  tone = "dark",
}: {
  appStoreUrl: string;
  googlePlayUrl: string;
  className?: string;
  tone?: Tone;
}) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      <AppStoreBadge href={appStoreUrl} tone={tone} />
      <GooglePlayBadge href={googlePlayUrl} tone={tone} />
    </div>
  );
}
