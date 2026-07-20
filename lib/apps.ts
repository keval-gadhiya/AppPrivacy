import { definePrivacy } from "./privacy";
import type { AppEntry } from "./types";

/* ────────────────────────────────────────────────────────────────────────
 * THE ONLY FILE YOU EDIT TO ADD AN APP.
 *
 * For a new app (App #10, #20, #30 …) add one `definePrivacy({...})` object
 * to the array below. Its page, metadata, sitemap entry, and index listing
 * are all generated automatically. No new files, no duplicated markup.
 * ──────────────────────────────────────────────────────────────────────── */

export const apps: AppEntry[] = [
  definePrivacy({
    slug: "decision-journal",
    name: "Decision Journal",
    lastUpdated: "2026-07-20",
    description:
      "A private journal for recording decisions and reviewing their outcomes.",
    dataDescription:
      "the decisions you record, along with your notes, options, confidence levels, and outcomes",
  }),

  definePrivacy({
    slug: "gratitude",
    name: "Gratitude",
    lastUpdated: "2026-07-20",
    description: "A quiet space to note what you're grateful for each day.",
    dataDescription: "your gratitude entries, daily notes, and reflections",
  }),

  definePrivacy({
    slug: "habitsphere",
    name: "HabitSphere",
    lastUpdated: "2026-07-20",
    description: "A minimalist habit tracker for building daily routines.",
    dataDescription:
      "the habits you define, your check-ins, streaks, and progress history",
  }),

  definePrivacy({
    slug: "promptvault",
    name: "PromptVault",
    lastUpdated: "2026-07-20",
    description: "A personal library for saving and organizing your prompts.",
    dataDescription:
      "the prompts, snippets, and collections you save and organize",
  }),

  definePrivacy({
    slug: "subscription-tracker",
    name: "Subscription Tracker",
    lastUpdated: "2026-07-20",
    description: "Keep track of your subscriptions, renewals, and spending.",
    dataDescription:
      "the subscriptions you add, their renewal dates, prices, and notes",
  }),

  definePrivacy({
    slug: "docscan",
    name: "DocScan",
    lastUpdated: "2026-07-20",
    description: "Scan documents into clean, shareable files — entirely on-device.",
    dataDescription:
      "the documents you scan and the images and PDFs generated from them",
    introExtra:
      "Document scanning, including any text recognition, is performed entirely on your device. Scans are never uploaded to a server for processing.",
  }),
];

/* ── Derived lookups (do not edit) ───────────────────────────────────────── */

export const appsBySlug: Record<string, AppEntry> = Object.fromEntries(
  apps.map((app) => [app.slug, app])
);

export function getApp(slug: string): AppEntry | undefined {
  return appsBySlug[slug];
}

export const allSlugs: string[] = apps.map((app) => app.slug);

/** Apps sorted alphabetically by name — used by the index page. */
export const appsByName: AppEntry[] = [...apps].sort((a, b) =>
  a.name.localeCompare(b.name)
);
