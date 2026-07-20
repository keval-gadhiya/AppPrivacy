import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, LifeBuoy } from "lucide-react";
import { AppIcon } from "@/components/brand/app-icon";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-5 py-32">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        <AppIcon size={92} className="[filter:drop-shadow(0_14px_28px_rgba(20,20,20,0.16))]" />

        <p className="mt-10 font-serif text-[6rem] leading-none tracking-tight text-ink sm:text-[8rem]">
          404
        </p>
        <h1 className="mt-2 text-[1.4rem] font-semibold tracking-tight text-ink sm:text-[1.7rem]">
          This page took an unexpected turn.
        </h1>
        <p className="mt-4 max-w-sm text-[1.02rem] leading-relaxed text-ink-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
          back to a better decision.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/support">
              <LifeBuoy className="h-4 w-4" />
              Visit support
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
