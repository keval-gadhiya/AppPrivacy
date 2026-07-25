import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import {
  naamJapMeta,
  naamJapPaths,
  naamJapSupportFaqs,
} from "@/lib/naam-jap";
import { site } from "@/lib/site";

const path = naamJapPaths.support;

export const metadata: Metadata = {
  title: "Naam Jap Support",
  description:
    "Get help with Naam Jap — FAQ, reminders, reset progress, and contact support@naamjap.app.",
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    title: "Naam Jap Support",
    description:
      "FAQ, reminders, reset progress, and how to contact Naam Jap support.",
    url: `${site.url}${path}`,
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: "Naam Jap Support",
    description:
      "FAQ, reminders, reset progress, and how to contact Naam Jap support.",
  },
};

export default function NaamJapSupportPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="Naam Jap Support"
      intro="Answers for everyday questions — plus a direct line when you need help."
      faqs={naamJapSupportFaqs}
      contactEmail={naamJapMeta.email}
      relatedLinks={[
        { label: "Privacy Policy", href: naamJapPaths.privacy },
        { label: "Terms of Service", href: naamJapPaths.terms },
      ]}
    />
  );
}
