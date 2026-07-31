/**
 * Site-wide constants. Update these once and every page follows.
 */
export const site = {
  /** Display name for the policy hub (used on the index page + metadata). */
  name: "App Privacy Policies",
  /** Short, neutral description of what this site is. */
  description:
    "Privacy policies for the mobile apps I build. Every app is offline-first and collects no personal data.",
  /** Production URL where this static site is hosted (GitHub Pages). */
  url: "https://keval-gadhiya.github.io/AppPrivacy",
  /** The publisher / developer name shown in copyright and contact. */
  publisher: "Keval Gadhiya",
  /** Default contact address; individual apps can override per policy. */
  defaultContactEmail: "kevalgadhiya2011@gmail.com",
} as const;
