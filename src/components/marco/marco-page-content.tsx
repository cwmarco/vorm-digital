"use client";

import { FitInTabs } from "@/components/marco/fit-in-tabs";
import { MarcoContactSection } from "@/components/marco/marco-contact-section";
import {
  MarcoLocaleProvider,
} from "@/components/marco/marco-locale-provider";
import { MarcoNav } from "@/components/marco/marco-nav";
import { MarcoStorySection } from "@/components/marco/marco-story-section";
import type { MarcoLocale } from "@/components/marco/marco-translations";

export function MarcoPageContent({ initialLocale }: { initialLocale: MarcoLocale }) {
  return (
    <MarcoLocaleProvider initialLocale={initialLocale}>
      <div className="marco-glow fixed inset-x-0 top-0 h-[480px] pointer-events-none z-0" />
      <MarcoNav />

      <main className="relative z-10">
        <MarcoStorySection />

        <section
          id="experience"
          className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-[#F0F0F0] scroll-mt-24"
        >
          <FitInTabs />
        </section>

        <MarcoContactSection />
      </main>
    </MarcoLocaleProvider>
  );
}
