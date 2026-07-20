/**
 * A single numbered section of a privacy policy.
 * `paragraphs` render as body copy; optional `bullets` render as a list.
 */
export type PrivacySection = {
  /** Stable anchor id, e.g. "information-we-collect". */
  id: string;
  heading: string;
  paragraphs?: string[];
  /** Optional lead-in sentence shown above the bullet list. */
  bulletsIntro?: string;
  bullets?: string[];
  /** Optional closing note shown after the bullets. */
  note?: string;
};

/**
 * The exact props the reusable PrivacyTemplate renders.
 * Every app supplies one of these (built by `definePrivacy`).
 */
export type PrivacyContent = {
  /** App name — rendered as the H1. */
  title: string;
  /** ISO date (YYYY-MM-DD). */
  lastUpdated: string;
  contactEmail: string;
  /** The "Privacy at a Glance" checklist. */
  privacySummary: string[];
  /**
   * Ordered policy sections. By convention the first section is the
   * Introduction (rendered as a lead), and the rest are numbered.
   */
  sections: PrivacySection[];
};

/** A registered app: routing/index metadata plus its policy content. */
export type AppEntry = {
  slug: string;
  name: string;
  /** One line used for the index list and the SEO description. */
  description: string;
  content: PrivacyContent;
};
