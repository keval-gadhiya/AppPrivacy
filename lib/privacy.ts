import type { AppEntry, PrivacyContent, PrivacySection } from "./types";
import { site } from "./site";

export type ThirdParty = {
  name: string;
  purpose: string;
  url?: string;
};

export type DefinePrivacyInput = {
  /** URL slug, e.g. "decision-journal" → /privacy/decision-journal/ */
  slug: string;
  /** App name, e.g. "Decision Journal". */
  name: string;
  /** ISO date the policy was last updated (YYYY-MM-DD). */
  lastUpdated: string;
  /** One neutral line for the index list + SEO description. */
  description: string;
  /**
   * A clause describing what the user creates in the app, used in the
   * "Information We Collect" and "Data Storage" sections. Written to slot in
   * after "everything you create in the app — …". Example:
   * "the decisions you record, along with your notes, options and outcomes".
   */
  dataDescription: string;
  /** Contact email; falls back to the site-wide default. */
  contactEmail?: string;
  /** Override the "Privacy at a Glance" checklist. */
  privacySummary?: string[];
  /** An extra introduction paragraph, if the app needs one. */
  introExtra?: string;
  /**
   * Third-party services the app relies on. Defaults to none, which produces
   * the "no third parties" wording. Supplying any switches to a listed form.
   */
  thirdParties?: ThirdParty[];
  /** Additional sections appended after the standard ones (before Contact). */
  extraSections?: PrivacySection[];
};

/** The default privacy promises — matches an offline-first, no-data app. */
export const DEFAULT_SUMMARY: string[] = [
  "No account required",
  "No analytics",
  "No advertising",
  "No personal information collected",
  "Offline-first",
  "Data stored locally on device",
];

function thirdPartySection(name: string, thirdParties: ThirdParty[]): PrivacySection {
  if (thirdParties.length === 0) {
    return {
      id: "third-party-services",
      heading: "Third-Party Services",
      paragraphs: [
        `${name} does not integrate any third-party services that collect, process, or transmit your personal data. There are no third-party SDKs for analytics, advertising, crash reporting, or tracking embedded in the app.`,
        `This means there are no external companies receiving information about you through ${name}.`,
      ],
    };
  }
  return {
    id: "third-party-services",
    heading: "Third-Party Services",
    paragraphs: [
      `${name} relies on a small number of third-party services strictly to provide its core functionality. We share only the minimum necessary for each to work, and never for advertising or profiling.`,
    ],
    bulletsIntro: "The services used are:",
    bullets: thirdParties.map((tp) =>
      tp.url ? `${tp.name} — ${tp.purpose} (${tp.url})` : `${tp.name} — ${tp.purpose}`
    ),
    note: "Each of these services is governed by its own privacy policy. We encourage you to review them if you would like to understand their practices in detail.",
  };
}

/**
 * Build a complete, App Store / Google Play–ready policy from a compact config.
 * This is the single place policy wording lives — every app reuses it.
 */
export function definePrivacy(input: DefinePrivacyInput): AppEntry {
  const {
    slug,
    name,
    lastUpdated,
    description,
    dataDescription,
    contactEmail = site.defaultContactEmail,
    privacySummary = DEFAULT_SUMMARY,
    introExtra,
    thirdParties = [],
    extraSections = [],
  } = input;

  const introduction: PrivacySection = {
    id: "introduction",
    heading: "Introduction",
    paragraphs: [
      `This Privacy Policy explains how ${name} ("the app", "we", "us", or "our") handles information when you use it. We have deliberately built ${name} to run entirely on your device — without accounts, without servers, and without tracking.`,
      `We believe the most private app is one that never collects your data in the first place. This document describes, in plain language, exactly what that means for you.`,
      ...(introExtra ? [introExtra] : []),
    ],
  };

  const sections: PrivacySection[] = [
    introduction,
    {
      id: "information-we-collect",
      heading: "Information We Collect",
      paragraphs: [
        `We do not collect any personal information. ${name} does not require you to create an account or sign in, and we never ask for your name, email address, phone number, location, or any other identifying details.`,
        `Everything you create in the app — ${dataDescription} — is saved only on your device. This content is never transmitted to us, and we have no ability to access, read, or retrieve it.`,
      ],
      bulletsIntro: "To be explicit, we do not collect any of the following:",
      bullets: [
        "Personal identifiers such as your name, email address, or phone number",
        "Your location, contacts, or device identifiers used for tracking",
        "The contents of your entries, notes, or any files you create",
        "Usage analytics, behavioral data, or advertising identifiers",
      ],
    },
    {
      id: "data-storage",
      heading: "Data Storage",
      paragraphs: [
        `All of your data is stored locally on your device using the operating system's standard, sandboxed app storage. There is no cloud database and no remote server operated by us, which means your information stays with you.`,
        `If you have enabled system backups (such as iCloud Backup or Google's backup service), your app data may be included in those encrypted backups, which are governed by Apple's or Google's privacy policies rather than ours. Deleting the app removes its data from your device.`,
      ],
    },
    {
      id: "analytics",
      heading: "Analytics",
      paragraphs: [
        `${name} contains no analytics or telemetry of any kind. We do not measure sessions, screens, taps, or events, and we do not use third-party analytics tools such as Google Analytics, Firebase, or similar services.`,
        `Because nothing is measured or reported, there is simply no usage data for us — or anyone else — to see.`,
      ],
    },
    {
      id: "advertising",
      heading: "Advertising",
      paragraphs: [
        `${name} contains no advertising. We do not display ads, we do not use advertising identifiers (such as Apple's IDFA or Google's Advertising ID), and we do not share any information with advertising networks, data brokers, or marketing partners.`,
      ],
    },
    thirdPartySection(name, thirdParties),
    {
      id: "childrens-privacy",
      heading: "Children's Privacy",
      paragraphs: [
        `${name} is suitable for a general audience and does not knowingly collect personal information from anyone, including children under the age of 13 (or the minimum age required in your country or region).`,
        `Because the app collects no personal information at all, it does not build profiles of its users, regardless of age. No information entered into the app is ever transmitted to or stored by us.`,
      ],
    },
    ...extraSections,
    {
      id: "changes",
      heading: "Changes to this Policy",
      paragraphs: [
        `We may update this Privacy Policy from time to time — for example, to reflect new features or changes in legal requirements. When we do, we will revise the "Last updated" date shown at the top of this page.`,
        `We encourage you to review this page periodically. Your continued use of ${name} after an update takes effect constitutes your acceptance of the revised policy.`,
      ],
    },
  ];

  const content: PrivacyContent = {
    title: name,
    lastUpdated,
    contactEmail,
    privacySummary,
    sections,
  };

  return { slug, name, description, content };
}
