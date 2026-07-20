/**
 * Site-wide constants. Update these once and every page follows.
 */
export const site = {
  /** Display name for the policy hub (used on the index page + metadata). */
  name: "App Privacy Policies",
  /** Short, neutral description of what this site is. */
  description:
    "Privacy policies for the mobile apps I build. Every app is offline-first and collects no personal data.",
  /** Production URL where this static site is hosted. Update before deploying. */
  url: "https://privacy.decisionjournal.app",
  /** The publisher / developer name shown in copyright lines by default. */
  publisher: "DecisionJournal",
  /** Default contact address; individual apps can override per policy. */
  defaultContactEmail: "privacy@decisionjournal.app",
} as const;
