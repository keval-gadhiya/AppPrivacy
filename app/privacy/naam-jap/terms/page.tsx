import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import {
  naamJapMeta,
  naamJapPaths,
  naamJapTermsSections,
} from "@/lib/naam-jap";
import { site } from "@/lib/site";

const path = naamJapPaths.terms;

export const metadata: Metadata = {
  title: "Naam Jap Terms of Service",
  description:
    "Terms of Service for Naam Jap — the offline mantra and mala counter by Keval Gadhiya.",
  alternates: { canonical: path },
  openGraph: {
    type: "article",
    title: "Naam Jap Terms of Service",
    description:
      "Standard mobile application terms of use for Naam Jap.",
    url: `${site.url}${path}`,
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: "Naam Jap Terms of Service",
    description: "Standard mobile application terms of use for Naam Jap.",
  },
};

export default function NaamJapTermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="Naam Jap"
      lastUpdated={naamJapMeta.lastUpdated}
      intro="Standard terms of use for the Naam Jap mobile application."
      sections={naamJapTermsSections}
      contactEmail={naamJapMeta.email}
      relatedLinks={[
        { label: "Privacy Policy", href: naamJapPaths.privacy },
        { label: "Support", href: naamJapPaths.support },
      ]}
    />
  );
}
