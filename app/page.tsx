import Link from "next/link";
import { appsInOrder } from "@/lib/apps";
import { site } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import { ArrowIcon } from "@/components/icons";

export default function HomePage() {
  const year = new Date().getUTCFullYear();

  return (
    <div className="animate-fade-in pb-24 sm:pb-28">
      <div className="mx-auto max-w-reading px-5 sm:px-6">
        <header className="pt-16 sm:pt-24">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Privacy
          </p>
          <h1 className="mt-4 font-serif text-[2.9rem] leading-[1.02] tracking-tighter2 text-ink sm:text-[3.75rem]">
            Privacy Policies
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-body sm:text-[1.1rem]">
            {site.description}
          </p>
        </header>

        <nav aria-label="Privacy policies" className="mt-12 sm:mt-14">
          <ul>
            {appsInOrder.map((app) => (
              <li key={app.slug}>
                <Link
                  href={`/privacy/${app.slug}/`}
                  className="group flex items-center gap-6 border-t border-line py-6 transition-colors hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/60 focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-[1.15rem] font-semibold tracking-tightish text-ink">
                      {app.name}
                    </span>
                    <span className="mt-1 block text-[0.95rem] leading-snug text-ink-body">
                      {app.tagline}
                    </span>
                    <span className="mt-0.5 block text-[0.95rem] leading-snug text-ink-muted">
                      {app.description}
                    </span>
                  </span>
                  <span className="hidden shrink-0 text-[0.8rem] text-ink-faint sm:block">
                    {formatDate(app.content.lastUpdated)}
                  </span>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition-all group-hover:border-ink group-hover:text-ink"
                    aria-hidden="true"
                  >
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-line" />
        </nav>

        <footer className="mt-16 sm:mt-20">
          <p className="text-sm text-ink-muted">
            © {year} {site.publisher}. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
