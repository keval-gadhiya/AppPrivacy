import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

const path = "/support/dailytodo/";
const privacyPath = "/privacy/dailytodo/";
const contactEmail = site.defaultContactEmail;

export const metadata: Metadata = {
  title: "Daily Todo Support",
  description:
    "Get help with Daily Todo — offline weekly planning, local storage, and contact support.",
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Daily Todo Support",
    description:
      "Help for Daily Todo: offline use, local tasks, history, and how to contact support.",
    url: `${site.url}${path}`,
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: "Daily Todo Support",
    description:
      "Help for Daily Todo: offline use, local tasks, history, and how to contact support.",
  },
};

const faqs = [
  {
    question: "Does Daily Todo work offline?",
    answer:
      "Yes. Daily Todo is offline only. Your tasks and preferences stay on your device and do not require an internet connection.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. There is no account, login, or cloud sync. Open the app and start planning.",
  },
  {
    question: "Where are my tasks stored?",
    answer:
      "Tasks are stored locally on your iPhone. Completing a week or changing months does not erase earlier days — history remains available on device.",
  },
  {
    question: "Does Daily Todo track me or use analytics?",
    answer:
      "No. Daily Todo does not include analytics, advertising, or tracking SDKs, and it does not send your task data to external servers.",
  },
  {
    question: "How do I change light or dark mode?",
    answer:
      "Use the Modes control in the floating navigation bar to switch between light and dark appearance.",
  },
  {
    question: "How do I delete a task?",
    answer:
      "On Home, swipe a task to reveal delete, or clear its title while editing to remove it.",
  },
];

export default function DailyTodoSupportPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="Daily Todo Support"
      intro="Daily Todo is a calm, offline weekly planner. Answers below cover everyday use — plus a direct line when you need help."
      faqs={faqs}
      contactEmail={contactEmail}
      relatedLinks={[{ label: "Privacy Policy", href: privacyPath }]}
    />
  );
}
