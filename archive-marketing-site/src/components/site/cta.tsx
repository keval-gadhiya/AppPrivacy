import * as React from "react";
import { AppIcon } from "@/components/brand/app-icon";
import { StoreBadges } from "@/components/brand/store-badges";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="py-24 sm:py-28 md:py-32" aria-labelledby="cta-title">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-ink px-6 py-16 text-center sm:px-12 sm:py-20 md:py-24">
            <div className="mx-auto flex max-w-2xl flex-col items-center">
              <AppIcon
                size={88}
                className="[filter:drop-shadow(0_12px_26px_rgba(0,0,0,0.38))]"
              />
              <h2
                id="cta-title"
                className="mt-8 font-serif text-[2.4rem] leading-[1.03] tracking-tight text-white sm:text-[3.25rem]"
              >
                Start thinking
                <br />
                more clearly today.
              </h2>
              <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-white/60">
                Free to download. No account required. Your first better decision is one entry away.
              </p>
              <div className="mt-9">
                <StoreBadges
                  tone="light"
                  appStoreUrl={site.appStoreUrl}
                  googlePlayUrl={site.googlePlayUrl}
                  className="justify-center"
                />
              </div>
              <p className="mt-6 text-[0.8rem] font-medium text-white/55">
                {site.platforms} · Version {site.version}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
