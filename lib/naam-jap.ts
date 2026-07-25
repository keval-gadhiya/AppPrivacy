import type { PrivacySection } from "./types";

/** Canonical paths for Naam Jap legal pages on AppPrivacy. */
export const naamJapPaths = {
  privacy: "/privacy/naam-jap/",
  support: "/privacy/naam-jap/support/",
  terms: "/privacy/naam-jap/terms/",
} as const;

export const naamJapMeta = {
  name: "Naam Jap",
  email: "support@naamjap.app",
  lastUpdated: "2026-07-25",
  description:
    "Naam Jap is an offline mantra and mala counter that helps users maintain their daily spiritual practice.",
} as const;

export type FaqItem = {
  question: string;
  answer: string;
};

export const naamJapSupportFaqs: FaqItem[] = [
  {
    question: "How do I reset my progress?",
    answer:
      "Open Profile in Naam Jap and use Erase everything. This permanently deletes local practice data on this device. Uninstalling the app also removes its on-device data.",
  },
  {
    question: "How do reminders work?",
    answer:
      "If you enable Daily reminder in Profile, your device schedules a local notification at the time you choose. Reminders work offline and never send data to external servers. If a reminder does not fire, allow notifications for Naam Jap in system Settings and confirm the reminder is enabled in Profile.",
  },
  {
    question: "Counts disappeared after reinstall",
    answer:
      "Practice data lives only on this device. Reinstalling clears it unless a full device backup restored the app sandbox.",
  },
  {
    question: "Wrong naam selected",
    answer: "Tap the naam bar on Home, or open Profile → Manage naams.",
  },
  {
    question: "Does Naam Jap need the internet?",
    answer: "No. Naam Jap is designed to work completely offline.",
  },
  {
    question: "How do I restore purchases?",
    answer:
      "N/A. Naam Jap does not currently offer in-app purchases or subscriptions, so there is nothing to restore.",
  },
];

export const naamJapTermsSections: PrivacySection[] = [
  {
    id: "agreement",
    heading: "Agreement",
    paragraphs: [
      'These Terms of Service (“Terms”) govern your use of the Naam Jap mobile application (“the App”) provided by Keval Gadhiya (“we”, “us”, or “our”). By downloading or using the App, you agree to these Terms.',
      "If you do not agree, do not use the App.",
    ],
  },
  {
    id: "the-app",
    heading: "The App",
    paragraphs: [
      "Naam Jap is an offline mantra and mala counter that helps you maintain a daily spiritual practice. Features may include counting, history, insights, goals, and optional local reminders. The App is provided for personal, non-commercial use.",
    ],
  },
  {
    id: "eligibility",
    heading: "Eligibility",
    paragraphs: [
      "You must be able to form a binding agreement under applicable law to use the App. If you use the App on behalf of someone else, you confirm you have authority to accept these Terms for them.",
    ],
  },
  {
    id: "license",
    heading: "License",
    paragraphs: [
      "We grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, in accordance with these Terms and the rules of the App Store or Google Play (as applicable).",
      "You may not copy, modify, distribute, reverse engineer, or create derivative works of the App, except to the extent such restriction is prohibited by law.",
    ],
  },
  {
    id: "your-data",
    heading: "Your content and data",
    paragraphs: [
      "Practice data you enter remains on your device. You are responsible for maintaining appropriate device backups if you wish to preserve that data. We do not operate a cloud sync service for practice data.",
    ],
  },
  {
    id: "no-advice",
    heading: "No medical or spiritual advice",
    paragraphs: [
      "Naam Jap is a personal practice tool. It does not provide medical, mental-health, religious, or professional advice. Use of the App is at your own discretion.",
    ],
  },
  {
    id: "purchases",
    heading: "Purchases",
    paragraphs: [
      "The App does not currently offer in-app purchases or subscriptions. If paid features are introduced later, additional terms may apply and will be disclosed in the store listing and within the App.",
    ],
  },
  {
    id: "disclaimer",
    heading: "Disclaimer of warranties",
    paragraphs: [
      'The App is provided “as is” and “as available,” without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, and non-infringement, to the fullest extent permitted by law.',
    ],
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, or goodwill, arising from your use of (or inability to use) the App.",
      "Our total liability for any claim relating to the App shall not exceed the amount you paid us for the App in the twelve months before the claim (or zero if the App was free).",
    ],
  },
  {
    id: "termination",
    heading: "Termination",
    paragraphs: [
      "You may stop using the App at any time by uninstalling it. We may stop providing or update the App at any time. Provisions that by their nature should survive (including disclaimers and limitations of liability) will survive termination.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to these Terms",
    paragraphs: [
      'We may update these Terms from time to time. The revised “Last updated” date will appear at the top of this page. Continued use of the App after changes take effect constitutes acceptance of the updated Terms.',
    ],
  },
  {
    id: "governing-law",
    heading: "Governing law",
    paragraphs: [
      "These Terms are governed by the laws applicable in your place of residence, without regard to conflict-of-law principles, except where mandatory consumer protections apply.",
    ],
  },
];
