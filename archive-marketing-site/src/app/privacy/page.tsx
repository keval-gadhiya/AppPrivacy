import * as React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { LegalBody, LegalSection, LegalList } from "@/components/site/legal";
import { Reveal } from "@/components/motion/reveal";
import { ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Decision Journal collects no personal information. No account, no cloud, no analytics, no tracking. Everything stays on your device.",
  alternates: { canonical: "/privacy" },
};

const pillars = [
  "No account required",
  "No cloud storage",
  "No analytics",
  "No advertising",
  "No personal information collected",
  "Data stored locally on your device",
];

export default function PrivacyPage() {
  return (
    <article className="pb-24 sm:pb-28">
      <PageHeader
        eyebrow="Privacy Policy"
        title={
          <>
            Your decisions
            <br />
            never leave your device.
          </>
        }
        intro="We built Decision Journal so that privacy isn't a setting you have to find — it's the default, and the only option."
        meta={`Last updated ${site.lastUpdated}`}
      />

      <div className="container">
        <Reveal className="mx-auto mt-14 max-w-2xl">
          <div className="rounded-card border border-line/70 bg-white p-7 shadow-card sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-white">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h2 className="text-[1.1rem] font-semibold tracking-tight text-ink">Privacy at a glance</h2>
            </div>
            <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {pillars.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-[0.98rem] text-ink-soft">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <LegalBody>
        <LegalSection index={1} title="Our approach to privacy">
          <p>
            Decision Journal is a private, on-device journal for recording the decisions you make.
            This Privacy Policy explains what information the app does and does not handle. The short
            version: we designed the app so that we never see, collect or store your data.
          </p>
          <p>
            Because there is no account and no server component, there is remarkably little to say —
            which is exactly the point.
          </p>
        </LegalSection>

        <LegalSection index={2} title="No account required">
          <p>
            You can use Decision Journal without creating an account, signing in, or providing an
            email address, name or any other identifier. There is no registration step, and we do not
            issue user IDs or maintain user profiles of any kind.
          </p>
        </LegalSection>

        <LegalSection index={3} title="Information we collect">
          <p>
            We collect no personal information. To be specific, the app does not collect or transmit:
          </p>
          <LegalList
            items={[
              "Your name, email address, phone number or contacts",
              "Your location or device identifiers",
              "The content of your journal entries or decisions",
              "Usage analytics, behavioral data or crash reports tied to you",
              "Advertising identifiers or marketing data",
            ]}
          />
          <p>
            The decisions, notes, options and outcomes you write are stored only on your device and
            are never sent to us or to any third party.
          </p>
        </LegalSection>

        <LegalSection index={4} title="Where your data is stored">
          <p>
            All of your entries are stored locally on your device using the operating system&apos;s
            standard app storage. There is no cloud database, no remote backup and no synchronization
            service operated by us. If your device is backed up through your own iCloud or Google
            account, that backup is governed by Apple&apos;s or Google&apos;s policies, not ours.
          </p>
        </LegalSection>

        <LegalSection index={5} title="No analytics, tracking or advertising">
          <p>
            Decision Journal contains no third-party analytics SDKs, no advertising networks and no
            tracking technologies. We do not use cookies, pixels or fingerprinting, and we do not
            build a profile of you or your behavior. Nothing you do in the app is measured or reported
            back to us.
          </p>
        </LegalSection>

        <LegalSection index={6} title="Exporting your data">
          <p>
            You can export a copy of your journal at any time. Exports are always initiated by you,
            from within the app, and the resulting file is handled entirely by you — for example, by
            saving it to your device or sharing it through your own apps. We never receive a copy of
            your export.
          </p>
        </LegalSection>

        <LegalSection index={7} title="Children's privacy">
          <p>
            Decision Journal does not knowingly collect any information from anyone, including
            children. Because no personal information is collected at all, the app does not build
            profiles of users of any age.
          </p>
        </LegalSection>

        <LegalSection index={8} title="Changes to this policy">
          <p>
            If we ever update this Privacy Policy, we will revise the &ldquo;last updated&rdquo; date
            above and publish the new version on this page. Because the app&apos;s privacy model is
            fundamental to how it works, any material change would be communicated clearly.
          </p>
        </LegalSection>

        <LegalSection index={9} id="contact" title="Contact us">
          <p>
            If you have any questions about this Privacy Policy or how Decision Journal handles data,
            we&apos;d be glad to help. Reach us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </LegalSection>
      </LegalBody>
    </article>
  );
}
