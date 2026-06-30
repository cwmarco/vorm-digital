"use client";

import { useEffect, useRef, useState } from "react";
import { useMarcoLocale } from "@/components/marco/marco-locale-provider";
import type { MarcoSegmentCopy } from "@/components/marco/marco-translations";

type SegmentId = MarcoSegmentCopy["id"];

function SegmentDetail({ segment, large }: { segment: MarcoSegmentCopy; large?: boolean }) {
  const bodyClass = large
    ? "text-xl md:text-2xl leading-9 text-[#3B3B3B]/80"
    : "text-base leading-relaxed text-[#3B3B3B]/80";

  return (
    <div>
      <p
        className={`mb-8 text-[#3B3B3B] ${
          large ? "text-xl md:text-2xl leading-9" : "text-lg leading-relaxed"
        }`}
      >
        <span className="text-[#3B3B3B]/55 font-medium">{segment.contentLabel}:</span>{" "}
        <strong className="font-semibold">{segment.headline}</strong>
      </p>
      <div className="space-y-6">
        {segment.body.map((paragraph) => (
          <p key={paragraph} className={bodyClass}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export function FitInTabs() {
  const { t, locale } = useMarcoLocale();
  const segments = t.experience.segments;
  const [active, setActive] = useState<SegmentId>("smb");
  const sectionRefs = useRef<Record<SegmentId, HTMLElement | null>>({
    smb: null,
    startup: null,
    established: null,
  });
  const isClickScrolling = useRef(false);

  useEffect(() => {
    setActive("smb");
  }, [locale]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    if (!media.matches) return;

    const updateActive = () => {
      if (isClickScrolling.current) return;

      const center = window.innerHeight * 0.42;
      let closest: SegmentId = "smb";
      let minDistance = Infinity;

      segments.forEach((segment) => {
        const el = sectionRefs.current[segment.id];
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - center);

        if (distance < minDistance) {
          minDistance = distance;
          closest = segment.id;
        }
      });

      setActive(closest);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, [segments]);

  const scrollToSegment = (id: SegmentId) => {
    const el = sectionRefs.current[id];
    if (!el) return;

    isClickScrolling.current = true;
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "center" });

    window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  };

  const activeSegment = segments.find((s) => s.id === active)!;

  return (
    <div>
      <h2 className="marco-serif text-3xl md:text-4xl text-[#3B3B3B] mb-10 md:hidden">
        {t.experience.title}
      </h2>

      <div className="md:hidden">
        <div className="flex flex-wrap gap-2 mb-10">
          {segments.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                active === item.id
                  ? "bg-[#3B3B3B]/8 text-[#3B3B3B] border border-[#3B3B3B]/15"
                  : "bg-transparent text-[#3B3B3B]/55 border border-[#E8E8E8] hover:text-[#3B3B3B]/80"
              }`}
            >
              {item.navLabel}
            </button>
          ))}
        </div>
        <SegmentDetail key={`${locale}-${activeSegment.id}`} segment={activeSegment} />
      </div>

      <div className="hidden md:grid md:grid-cols-[minmax(260px,340px)_1fr] md:gap-20 lg:gap-28">
        <div className="relative">
          <div className="sticky top-[10.5rem] pt-8 border-t border-[#E8E8E8] space-y-5">
            {segments.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSegment(item.id)}
                className={`block w-full text-left text-[28px] leading-tight transition-colors duration-300 ${
                  active === item.id
                    ? "text-[#3B3B3B]"
                    : "text-[#3B3B3B]/35 hover:text-[#3B3B3B]/55"
                }`}
              >
                {item.navLabel}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="marco-serif text-4xl text-[#3B3B3B] mb-16">{t.experience.title}</h2>

          {segments.map((segment, index) => (
            <article
              key={`${locale}-${segment.id}`}
              id={`segment-${segment.id}`}
              ref={(el) => {
                sectionRefs.current[segment.id] = el;
              }}
              className={`max-w-2xl scroll-mt-32 ${
                index < segments.length - 1 ? "min-h-[92vh] pb-28" : "pb-16"
              }`}
            >
              <SegmentDetail segment={segment} large />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
