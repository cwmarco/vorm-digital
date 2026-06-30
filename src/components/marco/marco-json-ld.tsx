"use client";

import type { MarcoLocale } from "@/components/marco/marco-translations";
import { marcoPersonJsonLd } from "@/lib/marco-seo";

export function MarcoJsonLd({ locale }: { locale: MarcoLocale }) {
  const data = marcoPersonJsonLd(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
