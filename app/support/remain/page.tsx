import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

const path = "/support/remain/";
const privacyPath = "/privacy/remain/";
const contactEmail = site.defaultContactEmail;

export const metadata: Metadata = {
  title: "Time Remaining Support",
  description:
    "Privacy policy and support documentation for the Time Remaining app.",
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Time Remaining Support",
    description:
      "Privacy policy and support documentation for the Time Remaining app.",
    url: `${site.url}${path}`,
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: "Time Remaining Support",
    description:
      "Privacy policy and support documentation for the Time Remaining app.",
  },
};

const faqs = [
  {
    question: "What is Time Remaining?",
    answer:
      "Time Remaining is a calm, offline reflection app that visualizes the remaining time in your day, week, month, year, and life. It is not a productivity app — it makes what is left visible.",
  },
  {
    question: "How does it work?",
    answer:
      "The app shows remaining hours today and remaining time in the week, month, and year. You can view life as grids, save important future moments, and customize assumed lifespan, appearance, week start, and time format — all on your device.",
  },
  {
    question: "Is it a life prediction app?",
    answer:
      "No. The lifespan value is only an assumption for visualization. It is never a prediction.",
  },
  {
    question: "Does it work offline?",
    answer: "Yes. Time Remaining is designed to work completely offline.",
  },
  {
    question: "Is internet required?",
    answer: "No. No internet connection is required.",
  },
  {
    question: "Does it collect my data?",
    answer:
      "No. Time Remaining does not collect your personal information and does not send your data to external servers.",
  },
  {
    question: "Where is my data stored?",
    answer: "Locally on your device.",
  },
  {
    question: "Can I edit my birthday?",
    answer: "Yes. You can update your date of birth in the app at any time.",
  },
  {
    question: "Can I change the assumed lifespan?",
    answer:
      "Yes. The assumed lifespan is a visualization preference you can customize.",
  },
  {
    question: "What are Moments?",
    answer:
      "Moments are personal future dates that remain visible in the app — for example a birthday, vacation, wedding, interview, or exam.",
  },
  {
    question: "Can I delete all my data?",
    answer:
      "Delete the application. Everything stored locally for Time Remaining is removed from your device.",
  },
];

export default function TimeRemainingSupportPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="Time Remaining Support"
      intro="Frequently Asked Questions"
      faqs={faqs}
      contactEmail={contactEmail}
      relatedLinks={[{ label: "Privacy Policy", href: privacyPath }]}
    />
  );
}
