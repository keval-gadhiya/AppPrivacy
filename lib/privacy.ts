import type { AppEntry, PrivacyContent, PrivacySection } from "./types";
import { site } from "./site";

export type SectionCopy = {
  paragraphs?: string[];
  bullets?: string[];
};

export type DefinePrivacyInput = {
  /** URL slug, e.g. "promptvault" → /privacy/promptvault/ */
  slug: string;
  /** App name, e.g. "PromptVault". */
  name: string;
  /** Short tagline, e.g. "Offline AI Prompt Library". */
  tagline: string;
  /** ISO date the policy was last updated (YYYY-MM-DD). */
  lastUpdated: string;
  /** One-line description for the index list + SEO. */
  description: string;
  /** Introduction paragraphs (shown under Introduction). */
  introduction: string[];
  /** "Privacy at a Glance" checklist. */
  privacySummary: string[];
  /** Information We Collect. */
  informationWeCollect: SectionCopy;
  /** How Your Data Is Stored. */
  howDataIsStored: SectionCopy;
  /** Third-Party Services. */
  thirdPartyServices: SectionCopy;
  /** Optional sections inserted before Children's Privacy (e.g. Notifications). */
  extraSections?: PrivacySection[];
  /** Contact email; falls back to the site-wide default. */
  contactEmail?: string;
  /** Optional related links shown in the privacy footer (Support, Terms). */
  relatedLinks?: { label: string; href: string }[];
};

/** Shared Children's Privacy — reused on every policy page. */
export const CHILDRENS_PRIVACY: PrivacySection = {
  id: "childrens-privacy",
  heading: "Children's Privacy",
  paragraphs: [
    "These applications are intended for a general audience and do not knowingly collect personal information from children. Since no personal data is collected or transmitted, parents and guardians can be confident that children's information is not gathered by the app.",
  ],
};

/** Shared Changes section — reused on every policy page. */
export const CHANGES_TO_POLICY: PrivacySection = {
  id: "changes",
  heading: "Changes to This Policy",
  paragraphs: [
    'This Privacy Policy may be updated from time to time to reflect improvements or changes to the application. Any updates will be published on this page along with the revised "Last Updated" date.',
  ],
};

/**
 * Build a complete, App Store–ready policy from production copy.
 * Every app uses the same section structure; only the wording differs.
 *
 * Structure:
 * Privacy Policy · Last Updated · Introduction · Privacy at a Glance ·
 * Information We Collect · How Your Data Is Stored · Third-Party Services ·
 * Children's Privacy · Changes to This Policy · Contact
 */
export function definePrivacy(input: DefinePrivacyInput): AppEntry {
  const {
    slug,
    name,
    tagline,
    lastUpdated,
    description,
    introduction,
    privacySummary,
    informationWeCollect,
    howDataIsStored,
    thirdPartyServices,
    extraSections = [],
    contactEmail = site.defaultContactEmail,
    relatedLinks,
  } = input;

  const sections: PrivacySection[] = [
    {
      id: "introduction",
      heading: "Introduction",
      paragraphs: introduction,
    },
    {
      id: "information-we-collect",
      heading: "Information We Collect",
      paragraphs: informationWeCollect.paragraphs,
      bullets: informationWeCollect.bullets,
    },
    {
      id: "how-your-data-is-stored",
      heading: "How Your Data Is Stored",
      paragraphs: howDataIsStored.paragraphs,
      bullets: howDataIsStored.bullets,
    },
    {
      id: "third-party-services",
      heading: "Third-Party Services",
      paragraphs: thirdPartyServices.paragraphs,
      bullets: thirdPartyServices.bullets,
    },
    ...extraSections,
    CHILDRENS_PRIVACY,
    CHANGES_TO_POLICY,
  ];

  const content: PrivacyContent = {
    title: name,
    lastUpdated,
    contactEmail,
    privacySummary,
    sections,
    relatedLinks,
  };

  return { slug, name, tagline, description, content };
}
