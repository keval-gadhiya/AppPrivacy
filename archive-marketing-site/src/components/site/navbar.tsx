"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AppIcon } from "@/components/brand/app-icon";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-all duration-300 ease-smooth",
          scrolled
            ? "border-line/80 bg-canvas/85 backdrop-blur-md supports-[backdrop-filter]:bg-canvas/70"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            aria-label={`${site.name} home`}
          >
            <AppIcon size={34} priority className="[filter:drop-shadow(0_1px_3px_rgba(20,20,20,0.14))]" />
            <span className="text-[0.98rem] font-semibold tracking-tight">{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-pill px-3.5 py-2 text-[0.9rem] font-medium text-ink-muted transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href={site.appStoreUrl}>Download</a>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 bg-canvas md:hidden"
          >
            <nav className="container flex flex-col gap-1 pt-6" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line/70 py-4 text-2xl font-medium tracking-tight text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild size="lg" onClick={() => setOpen(false)}>
                  <a href={site.appStoreUrl}>Download on the App Store</a>
                </Button>
                <Button asChild variant="secondary" size="lg" onClick={() => setOpen(false)}>
                  <a href={site.googlePlayUrl}>Get it on Google Play</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
