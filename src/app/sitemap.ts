import type { MetadataRoute } from "next";
import { marcoAbsoluteUrl } from "@/lib/marco-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://vorm.digital",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: marcoAbsoluteUrl("en"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: marcoAbsoluteUrl("de"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: marcoAbsoluteUrl("nl"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vorm.digital/datenschutz",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
