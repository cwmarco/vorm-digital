import { MarcoJsonLd } from "@/components/marco/marco-json-ld";
import { MarcoPageContent } from "@/components/marco/marco-page-content";
import type { MarcoLocale } from "@/components/marco/marco-translations";

export function MarcoPageShell({ locale }: { locale: MarcoLocale }) {
  return (
    <>
      <MarcoJsonLd locale={locale} />
      <MarcoPageContent initialLocale={locale} />
    </>
  );
}
