import type { Metadata } from "next";
import type { MarcoLocale } from "@/components/marco/marco-translations";
import { marcoTranslations } from "@/components/marco/marco-translations";

export const MARCO_SITE_URL = "https://vorm.digital";

export const marcoLocalePaths: Record<MarcoLocale, string> = {
  en: "/marco",
  de: "/marco/de",
  nl: "/marco/nl",
};

export function marcoLocalePath(locale: MarcoLocale): string {
  return marcoLocalePaths[locale];
}

export function marcoAbsoluteUrl(locale: MarcoLocale): string {
  return `${MARCO_SITE_URL}${marcoLocalePath(locale)}`;
}

const marcoMeta: Record<
  MarcoLocale,
  { title: string; description: string; ogLocale: string }
> = {
  en: {
    title: "Marco Günder | Growth & Operations Partner",
    description:
      "Marketing and CRM from strategy through execution. 15 years across brand, paid media, SEO, websites, CRM, and team leadership for health, beauty, and premium services.",
    ogLocale: "en_GB",
  },
  de: {
    title: "Marco Günder | Partner für Wachstum und Operations",
    description:
      "Marketing und CRM von Strategie bis Umsetzung. 15 Jahre Erfahrung in Brand, Paid Media, SEO, Websites, CRM und Teamführung für Health, Beauty und Premium-Dienstleister.",
    ogLocale: "de_DE",
  },
  nl: {
    title: "Marco Eggens | Partner voor groei en operations",
    description:
      "Marketing en CRM van strategie tot uitvoering. 15 jaar ervaring in merk, paid media, SEO, websites, CRM en teamleiderschap voor health, beauty en premium dienstverleners.",
    ogLocale: "nl_NL",
  },
};

export function marcoMetadata(locale: MarcoLocale): Metadata {
  const meta = marcoMeta[locale];
  const url = marcoAbsoluteUrl(locale);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: {
        en: marcoAbsoluteUrl("en"),
        de: marcoAbsoluteUrl("de"),
        nl: marcoAbsoluteUrl("nl"),
        "x-default": marcoAbsoluteUrl("en"),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: "Vorm.Digital",
      locale: meta.ogLocale,
      type: "profile",
    },
  };
}

export function marcoPersonJsonLd(locale: MarcoLocale): object {
  const t = marcoTranslations[locale];
  const url = marcoAbsoluteUrl(locale);
  const isNl = locale === "nl";

  const primaryName = isNl ? "Marco Eggens" : "Marco Günder";
  const alternateNames = ["Marco Günder", "Marco Eggens"].filter(
    (name) => name !== primaryName,
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: primaryName,
    alternateName: alternateNames,
    givenName: "Marco",
    familyName: "Günder",
    additionalName: "Eggens",
    jobTitle: t.story.headline,
    description: t.story.intro.join(" "),
    url,
    email: "hallo@vorm.digital",
    image: `${MARCO_SITE_URL}/logo.svg`,
    sameAs: ["https://www.linkedin.com/in/marcoeggens/", "https://cal.com/marco-ennmyq/site-intro"],
    worksFor: {
      "@type": "Organization",
      name: "Vorm.Digital",
      url: MARCO_SITE_URL,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    knowsLanguage: ["English", "German", "Dutch"],
    knowsAbout: [
      "Marketing",
      "CRM",
      "SEO",
      "Paid media",
      "Websites",
      "Sales enablement",
      "Team leadership",
      "Health marketing",
      "Beauty marketing",
    ],
  };
}

export function resolveMarcoLocaleFromPath(pathname: string): MarcoLocale | null {
  if (pathname === "/marco" || pathname === "/marco/") return "en";
  if (pathname.startsWith("/marco/de")) return "de";
  if (pathname.startsWith("/marco/nl")) return "nl";
  return null;
}
