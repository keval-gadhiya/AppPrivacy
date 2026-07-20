import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: `${site.url}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  };

  const policies = apps.map((app) => ({
    url: `${site.url}/privacy/${app.slug}/`,
    lastModified: new Date(`${app.content.lastUpdated}T00:00:00Z`),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [home, ...policies];
}
