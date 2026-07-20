import * as React from "react";
import { cn } from "@/lib/utils";

function StatusBar({ dark = false }: { dark?: boolean }) {
  const tint = dark ? "text-white" : "text-ink";
  const fill = dark ? "bg-white" : "bg-ink";
  return (
    <div className={cn("relative z-20 flex items-center justify-between px-7 pt-3.5", tint)}>
      <span className="text-[0.72rem] font-semibold tracking-tight">9:41</span>
      <div className="flex items-center gap-1.5">
        {/* signal */}
        <svg viewBox="0 0 18 12" className="h-[0.6rem] w-[1.05rem]" aria-hidden="true">
          <rect x="0" y="8" width="3" height="4" rx="1" className={cn(fill)} />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" className={cn(fill)} />
          <rect x="10" y="3" width="3" height="9" rx="1" className={cn(fill)} />
          <rect x="15" y="0.5" width="3" height="11.5" rx="1" className={cn(fill)} />
        </svg>
        {/* wifi */}
        <svg viewBox="0 0 16 12" className="h-[0.6rem] w-[0.9rem]" aria-hidden="true" fill="none">
          <path d="M8 10.6a1.15 1.15 0 1 0 0-2.3 1.15 1.15 0 0 0 0 2.3Z" className={cn(fill)} />
          <path d="M4.4 6.6a5.1 5.1 0 0 1 7.2 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className={tint} />
          <path d="M2 4.1a8.5 8.5 0 0 1 12 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className={tint} />
        </svg>
        {/* battery */}
        <div className="flex items-center gap-0.5">
          <div className={cn("relative h-[0.62rem] w-[1.25rem] rounded-[3px] border", dark ? "border-white/60" : "border-ink/50")}>
            <div className={cn("absolute inset-[1.5px] right-[4px] rounded-[1.5px]", fill)} />
          </div>
          <div className={cn("h-[0.28rem] w-[0.1rem] rounded-r-sm", fill)} />
        </div>
      </div>
    </div>
  );
}

export function PhoneFrame({
  children,
  className,
  darkStatus = false,
  screenClassName,
}: {
  children: React.ReactNode;
  className?: string;
  darkStatus?: boolean;
  screenClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-full select-none rounded-[2.6rem] bg-ink p-[0.55rem] shadow-phone",
        className
      )}
    >
      {/* side buttons */}
      <div className="absolute -left-[2px] top-[7.5rem] h-8 w-[2px] rounded-l bg-ink/70" />
      <div className="absolute -left-[2px] top-[10rem] h-12 w-[2px] rounded-l bg-ink/70" />
      <div className="absolute -right-[2px] top-[9rem] h-16 w-[2px] rounded-r bg-ink/70" />

      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[2.1rem] bg-canvas",
          screenClassName
        )}
      >
        <StatusBar dark={darkStatus} />
        {/* dynamic island */}
        <div className="absolute left-1/2 top-2.5 z-30 h-[1.55rem] w-[5.4rem] -translate-x-1/2 rounded-full bg-ink" />
        <div className="relative z-10 h-[calc(100%-2.75rem)]">{children}</div>
      </div>
    </div>
  );
}
