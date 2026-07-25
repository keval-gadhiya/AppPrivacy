import { definePrivacy } from "./privacy";
import type { AppEntry } from "./types";

/* ────────────────────────────────────────────────────────────────────────
 * THE ONLY FILE YOU EDIT TO ADD AN APP.
 *
 * Apps are listed in Daily App series order (Day 1, Day 2, …). The homepage
 * follows this order. Each entry generates its policy page, metadata, and
 * sitemap entry automatically.
 * ──────────────────────────────────────────────────────────────────────── */

export const apps: AppEntry[] = [
  // Day 1
  definePrivacy({
    slug: "promptvault",
    name: "PromptVault",
    tagline: "Offline AI Prompt Library",
    lastUpdated: "2026-07-20",
    description:
      "A private offline library for saving, organizing and searching AI prompts.",
    introduction: [
      "PromptVault is a private, offline-first library for storing and organizing AI prompts. It helps users save prompts for ChatGPT, Claude, Gemini, and other AI tools using folders, tags, favorites, and search.",
      "PromptVault is designed to work entirely on your device. We do not require an account, operate any servers, or collect your personal information.",
      "This Privacy Policy explains how PromptVault handles your information.",
    ],
    privacySummary: [
      "Prompts stored locally",
      "No account required",
      "No cloud sync",
      "No analytics",
      "No advertising",
      "Offline-first",
    ],
    informationWeCollect: {
      paragraphs: [
        "PromptVault does not collect any personal information.",
        "Everything you create—including prompts, folders, tags, favorites, and notes—remains stored only on your device.",
      ],
    },
    howDataIsStored: {
      paragraphs: [
        "All content is stored locally using on-device storage.",
        "No information is transmitted to external servers.",
      ],
    },
    thirdPartyServices: {
      paragraphs: ["PromptVault does not use:"],
      bullets: [
        "Analytics",
        "Advertising SDKs",
        "AI APIs",
        "Authentication services",
        "Cloud databases",
      ],
    },
  }),

  // Day 2
  definePrivacy({
    slug: "habitsphere",
    name: "HabitSphere",
    tagline: "Gentle Habit Tracker",
    lastUpdated: "2026-07-20",
    description:
      "A calm habit tracker focused on consistency instead of streak pressure.",
    introduction: [
      "HabitSphere helps you build healthy routines using a gentle philosophy where missed days are treated as rest days instead of failure. Inspired by Apple's design language, the app focuses on consistency without guilt.",
      "HabitSphere has been intentionally built to run completely offline without accounts, servers, or tracking.",
    ],
    privacySummary: [
      "Habits stored locally",
      "No account required",
      "No cloud sync",
      "No analytics",
      "No advertising",
      "Offline-first",
    ],
    informationWeCollect: {
      paragraphs: [
        "HabitSphere does not collect any personal information.",
        "Your habits, completion history, reminders, and settings remain only on your device.",
      ],
    },
    howDataIsStored: {
      paragraphs: [
        "All habit information is stored locally and never uploaded.",
      ],
    },
    thirdPartyServices: {
      paragraphs: [
        "HabitSphere does not use external analytics, advertising, authentication, or cloud storage services.",
      ],
    },
  }),

  // Day 3
  definePrivacy({
    slug: "mantra",
    name: "Mantra",
    tagline: "Daily Mantra Companion",
    lastUpdated: "2026-07-20",
    description: "Track daily mantra repetitions and build a mindful routine.",
    introduction: [
      "Mantra helps users build a mindful daily routine by tracking mantra repetitions and meditation sessions.",
      "Everything you record stays completely private on your own device.",
    ],
    privacySummary: [
      "Sessions stored locally",
      "No account required",
      "No cloud sync",
      "No analytics",
      "No advertising",
      "Offline-first",
    ],
    informationWeCollect: {
      paragraphs: [
        "Mantra does not collect personal information.",
        "Your mantra counts, sessions, and preferences remain stored locally.",
      ],
    },
    howDataIsStored: {
      paragraphs: [
        "All information is stored securely on your device.",
        "No information leaves your phone.",
      ],
    },
    thirdPartyServices: {
      paragraphs: [
        "Mantra does not integrate with advertising, analytics, AI services, or cloud providers.",
      ],
    },
  }),

  // Day 4
  definePrivacy({
    slug: "subscription-tracker",
    name: "Subscription Tracker",
    tagline: "Know Every Renewal",
    lastUpdated: "2026-07-20",
    description:
      "Track subscriptions, recurring payments and renewal dates offline.",
    introduction: [
      "Subscription Tracker helps you monitor subscriptions, recurring payments, billing cycles, and renewal dates without sharing financial information online.",
      "Your subscription information always remains under your control.",
    ],
    privacySummary: [
      "Subscription data stored locally",
      "No account required",
      "No cloud sync",
      "No analytics",
      "No advertising",
      "Offline-first",
    ],
    informationWeCollect: {
      paragraphs: [
        "Subscription Tracker does not collect personal information.",
        "Subscription names, prices, renewal dates, and reminders are stored only on your device.",
      ],
    },
    howDataIsStored: {
      paragraphs: [
        "All subscription data is stored locally.",
        "Nothing is uploaded to remote servers.",
      ],
    },
    thirdPartyServices: {
      paragraphs: [
        "The app does not use payment gateways, advertising, analytics, authentication, or cloud services.",
      ],
    },
  }),

  // Day 5
  definePrivacy({
    slug: "thumbnote",
    name: "ThumbNote",
    tagline: "Quick Notes with Your Thumb",
    lastUpdated: "2026-07-20",
    description:
      "Capture thoughts instantly using a simple one-handed note-taking experience.",
    introduction: [
      "ThumbNote is a lightweight note-taking app designed for quick, one-handed capture of ideas, reminders, and thoughts.",
      "Your notes remain completely private and accessible only from your own device.",
    ],
    privacySummary: [
      "Notes stored locally",
      "No account required",
      "No cloud sync",
      "No analytics",
      "No advertising",
      "Offline-first",
    ],
    informationWeCollect: {
      paragraphs: [
        "ThumbNote does not collect any personal information.",
        "All notes, folders, and preferences stay on your device.",
      ],
    },
    howDataIsStored: {
      paragraphs: [
        "Everything is stored locally.",
        "No note content is transmitted externally.",
      ],
    },
    thirdPartyServices: {
      paragraphs: [
        "ThumbNote does not use analytics, advertising, authentication, AI services, or cloud storage.",
      ],
    },
  }),

  // Day 6
  definePrivacy({
    slug: "docscan",
    name: "DocScan",
    tagline: "Private Document Scanner",
    lastUpdated: "2026-07-20",
    description:
      "Scan, crop and export documents directly from your device.",
    introduction: [
      "DocScan allows users to scan paper documents, crop pages, enhance images, and export professional PDF files directly from their device.",
      "Your scanned documents remain under your control unless you intentionally choose to share them.",
    ],
    privacySummary: [
      "Documents stored locally",
      "Camera access only for scanning",
      "No cloud upload",
      "No analytics",
      "No advertising",
      "Offline-first",
    ],
    informationWeCollect: {
      paragraphs: [
        "DocScan does not collect personal information.",
        "The app requests camera permission only to scan documents.",
      ],
    },
    howDataIsStored: {
      paragraphs: [
        "Scanned images and exported PDFs are stored locally on your device.",
        "Nothing is uploaded automatically.",
      ],
    },
    thirdPartyServices: {
      paragraphs: [
        "DocScan does not use cloud OCR services, analytics platforms, advertising SDKs, or external document processing.",
      ],
    },
  }),

  // Day 7
  definePrivacy({
    slug: "75-hard",
    name: "75 Hard",
    tagline: "Daily Challenge Companion",
    lastUpdated: "2026-07-20",
    description:
      "Track your progress through the 75 Hard challenge with offline daily logging.",
    introduction: [
      "75 Hard helps users track daily progress throughout the 75 Hard challenge by recording completed tasks, habits, and milestones.",
      "All progress is stored locally, giving users full ownership of their data.",
    ],
    privacySummary: [
      "Progress stored locally",
      "No account required",
      "No cloud sync",
      "No analytics",
      "No advertising",
      "Offline-first",
    ],
    informationWeCollect: {
      paragraphs: [
        "75 Hard does not collect personal information.",
        "Your progress, daily logs, and completion history remain only on your device.",
      ],
    },
    howDataIsStored: {
      paragraphs: [
        "All challenge information is stored locally.",
        "Nothing is transmitted externally.",
      ],
    },
    thirdPartyServices: {
      paragraphs: [
        "75 Hard does not integrate with advertising, analytics, authentication, or cloud services.",
      ],
    },
  }),

  // Day 8
  definePrivacy({
    slug: "gratitude",
    name: "Gratitude",
    tagline: "Three Good Things",
    lastUpdated: "2026-07-20",
    description:
      "A beautiful gratitude journal for recording three positive moments every day.",
    introduction: [
      'Gratitude is a beautifully designed journal inspired by the "Three Good Things" reflection method. It encourages users to record daily gratitude, answer guided prompts, track moods, and revisit meaningful memories over time.',
      "Everything you write stays completely private on your own device.",
    ],
    privacySummary: [
      "Journal entries stored locally",
      "No account required",
      "No cloud sync",
      "No analytics",
      "No advertising",
      "Offline-first",
    ],
    informationWeCollect: {
      paragraphs: [
        "Gratitude does not collect personal information.",
        "Your journal entries, moods, reflections, prompts, and memories remain stored locally.",
      ],
    },
    howDataIsStored: {
      paragraphs: [
        "All gratitude entries are securely stored on your device.",
        "Nothing is uploaded to external servers.",
      ],
    },
    thirdPartyServices: {
      paragraphs: [
        "Gratitude does not use analytics, advertising, authentication providers, cloud databases, or AI services.",
      ],
    },
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

/** Apps in Daily series order (Day 1 → Day N) — used by the index page. */
export const appsInOrder: AppEntry[] = apps;
