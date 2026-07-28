import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { naamJapMeta, naamJapPaths } from "@/lib/naam-jap";
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

  const naamJapExtra = [
    {
      url: `${site.url}${naamJapPaths.support}`,
      lastModified: new Date(`${naamJapMeta.lastUpdated}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: `${site.url}${naamJapPaths.terms}`,
      lastModified: new Date(`${naamJapMeta.lastUpdated}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
    {
      url: `${site.url}/naam-jap/`,
      lastModified: new Date(`${naamJapMeta.lastUpdated}T00:00:00Z`),
      changeFrequency: "yearly" as const,
      priority: 0.75,
    },
  ];

  const dailyTodoSupport = {
    url: `${site.url}/support/dailytodo/`,
    lastModified: new Date("2026-07-28T00:00:00Z"),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  };

  return [home, ...policies, ...naamJapExtra, dailyTodoSupport];
}
