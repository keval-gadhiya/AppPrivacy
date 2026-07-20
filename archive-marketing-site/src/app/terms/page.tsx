import * as React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { LegalBody, LegalSection, LegalList } from "@/components/site/legal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Decision Journal app: usage, disclaimers, limitation of liability, and copyright.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="pb-24 sm:pb-28">
      <PageHeader
        eyebrow="Terms of Service"
        title={
          <>
            The simple terms
            <br />
            of using the app.
          </>
        }
        intro="Please read these terms carefully. By downloading or using Decision Journal, you agree to them."
        meta={`Last updated ${site.lastUpdated}`}
      />

      <LegalBody>
        <LegalSection index={1} title="Acceptance of these terms">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Decision
            Journal mobile application (the &ldquo;App&rdquo;). By downloading, installing or using the
            App, you agree to be bound by these Terms. If you do not agree, please do not use the App.
          </p>
        </LegalSection>

        <LegalSection index={2} title="Use of the app">
          <p>
            Decision Journal is provided for your personal use as a tool to record and reflect on your
            own decisions. You may use the App only in a lawful manner and in accordance with these
            Terms. In particular, you agree that you will not:
          </p>
          <LegalList
            items={[
              "Use the App in any way that violates applicable laws or regulations",
              "Attempt to reverse engineer, decompile or interfere with the App except as permitted by law",
              "Use the App to store or process content you are not legally permitted to handle",
            ]}
          />
          <p>
            Because your entries are stored locally on your device, you are responsible for maintaining
            your own device security and for keeping your own backups if you wish to preserve your data.
          </p>
        </LegalSection>

        <LegalSection index={3} title="Your content">
          <p>
            You retain full ownership of everything you write in the App. We claim no rights over your
            journal entries, decisions or reflections. Since your content never leaves your device
            unless you export it yourself, you alone are responsible for how it is stored, backed up
            and shared.
          </p>
        </LegalSection>

        <LegalSection index={4} title="Not professional advice">
          <p>
            Decision Journal is a reflection and note-taking tool. It does not provide financial,
            legal, medical, psychological or other professional advice, and it should not be relied
            upon as a substitute for the judgment of a qualified professional. Any decisions you make
            remain entirely your own.
          </p>
        </LegalSection>

        <LegalSection index={5} title="Disclaimer of warranties">
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties
            of any kind, whether express or implied, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose and non-infringement. We do not warrant
            that the App will be uninterrupted, error-free, or free of harmful components, or that any
            defects will be corrected.
          </p>
        </LegalSection>

        <LegalSection index={6} title="Limitation of liability">
          <p>
            To the fullest extent permitted by law, {site.name} and its creators shall not be liable
            for any indirect, incidental, special, consequential or punitive damages, or for any loss
            of data, profits or goodwill, arising out of or related to your use of, or inability to use,
            the App. Because your data is stored only on your device, we are not responsible for any
            loss of entries resulting from device failure, deletion, or loss of your device.
          </p>
        </LegalSection>

        <LegalSection index={7} title="Changes to the app and terms">
          <p>
            We may update the App and these Terms from time to time. When we make material changes to
            these Terms, we will update the &ldquo;last updated&rdquo; date above. Your continued use of
            the App after changes take effect constitutes acceptance of the revised Terms.
          </p>
        </LegalSection>

        <LegalSection index={8} title="Copyright">
          <p>
            The App, including its design, code, branding and content (excluding your own entries), is
            the property of {site.name} and is protected by copyright and other intellectual property
            laws. © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
        </LegalSection>

        <LegalSection index={9} id="contact" title="Contact">
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </LegalSection>
      </LegalBody>
    </article>
  );
}
