import * as React from "react";
import { SectionHeader } from "@/components/site/section-header";
import { FaqList } from "@/components/site/faq";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-24 sm:py-28 md:py-32" aria-labelledby="faq-title">
      <div className="container">
        <SectionHeader
          eyebrow="Questions"
          title={<span id="faq-title">Good questions, clear answers.</span>}
          intro="Everything you might want to know before you start keeping a decision journal."
        />
        <div className="mt-14">
          <FaqList />
        </div>
      </div>
    </section>
  );
}
