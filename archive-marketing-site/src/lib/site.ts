export const site = {
  name: "Decision Journal",
  tagline: "Think Better. Decide Better.",
  description:
    "Capture important decisions, reflect on outcomes, and improve your judgment over time.",
  url: "https://decisionjournal.app",
  email: "kevalgadhiya2011@gmail.com",
  version: "1.0.0",
  platforms: "iOS & Android",
  appStoreUrl: "#",
  googlePlayUrl: "#",
  lastUpdated: "July 20, 2026",
  copyrightYear: 2026,
} as const;

export const nav = [
  { label: "Overview", href: "/#overview" },
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Support", href: "/support" },
] as const;

export type NavItem = (typeof nav)[number];
