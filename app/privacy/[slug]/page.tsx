import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyTemplate } from "@/components/privacy-template";
import { allSlugs, getApp } from "@/lib/apps";
import { site } from "@/lib/site";

type Params = { slug: string };

/** Only the slugs in the registry are built; anything else 404s. */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};

  const title = `${app.name} Privacy Policy`;
  const path = `/privacy/${app.slug}/`;
  const description = app.description;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
    },
    twitter: { card: "summary", title, description },
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  return <PrivacyTemplate {...app.content} />;
}
