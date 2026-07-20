import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="animate-fade-in">
      <div className="mx-auto flex min-h-[70vh] max-w-reading flex-col justify-center px-5 py-24 sm:px-6">
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
          404
        </p>
        <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.05] tracking-tighter2 text-ink sm:text-[3.25rem]">
          Page not found
        </h1>
        <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-body">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.9rem] font-medium text-paper transition-colors hover:bg-ink-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            View all privacy policies
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
