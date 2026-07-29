import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = profile.siteUrl.replace(/\/$/, "");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects
    .filter((project) => project.links.caseStudy)
    .map((project) => ({
      url: `${siteUrl}${project.links.caseStudy}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...projectRoutes];
}
