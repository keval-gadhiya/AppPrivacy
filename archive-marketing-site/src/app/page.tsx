import * as React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { WhyJournal } from "@/components/site/why-journal";
import { Features } from "@/components/site/features";
import { Screenshots } from "@/components/site/screenshots";
import { HowItWorks } from "@/components/site/how-it-works";
import { FaqSection } from "@/components/site/faq-section";
import { CTA } from "@/components/site/cta";
import { faqs } from "@/lib/faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: site.name,
      applicationCategory: "ProductivityApplication",
      operatingSystem: "iOS, Android",
      description: site.description,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      url: site.url,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <WhyJournal />
      <Features />
      <Screenshots />
      <HowItWorks />
      <FaqSection />
      <CTA />
    </>
  );
}
