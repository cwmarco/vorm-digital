"use client";

import { useEffect, useRef, useState } from "react";

type SegmentId = "smb" | "startup" | "established";

type Segment = {
  id: SegmentId;
  navLabel: string;
  contentLabel: string;
  headline: string;
  body: string[];
  tags: string[];
};

const segments: Segment[] = [
  {
    id: "smb",
    navLabel: "Medium Small Business",
    contentLabel: "Small Medium Businesses",
    headline: "All channels, one partner.",
    body: [
      "I help define your brand, offer, and positioning. I support strategic decisions (e.g. Should I get on Instagram?). I handle every marketing channel and will even sort out your website and reviews. From strategy through execution, with very little input needed from your side.",
      "I stay hands-on because I love the craft.",
    ],
    tags: [
      "Healthcare",
      "Spa & Beauty",
      "Aesthetic Surgery",
      "Orthodontics",
      "Longevity",
      "Premium Services",
      "Offer & Positioning",
      "Google & Meta Ads",
      "SEO & AI Search",
      "Web Design",
    ],
  },
  {
    id: "startup",
    navLabel: "Start-Up",
    contentLabel: "Start-Up",
    headline: "Launch fast & learn fast.",
    body: [
      "I build lean marketing systems that test, measure, and scale what works. I plug into your tech stack and team seamlessly. Project-based or ongoing, from setting up channels to leading launches.",
      "I love seeing direct impact at scale.",
      "I've managed teams of up to 15 people across various different markets.",
    ],
    tags: [
      "Leadership of multidisciplinary teams",
      "Marketplaces | Services | Travel | Medical",
      "B2B & B2C",
      "EU, US & UK markets",
    ],
  },
  {
    id: "established",
    navLabel: "Established",
    contentLabel: "Established",
    headline: "Strategic projects with implementation.",
    body: [
      "Solo projects like channel builds and product launches, or embedded with your teams for growth initiatives and efficiency drives.",
      "Never just slides: always strategy plus execution.",
    ],
    tags: [
      "Leadership of multidisciplinary teams",
      "Marketplaces | Services | Travel | Medical",
      "B2B & B2C",
      "EU, US & UK markets",
    ],
  },
];

function SegmentDetail({ segment, large }: { segment: Segment; large?: boolean }) {
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
      <div
        className={`space-y-6 text-[#3B3B3B]/80 mb-10 ${
          large ? "text-xl md:text-2xl leading-9" : "text-base leading-relaxed"
        }`}
      >
        {segment.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {segment.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm px-3 py-2 rounded-full border border-[#E8E8E8] text-[#555] bg-[#FAFAFA]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function FitInTabs() {
  const [active, setActive] = useState<SegmentId>("smb");
  const sectionRefs = useRef<Record<SegmentId, HTMLElement | null>>({
    smb: null,
    startup: null,
    established: null,
  });
  const isClickScrolling = useRef(false);

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
  }, []);

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
        Here&apos;s How I Fit In
      </h2>

      {/* Mobile */}
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
        <SegmentDetail segment={activeSegment} />
      </div>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-[minmax(220px,300px)_1fr] md:gap-20 lg:gap-28">
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
          <h2 className="marco-serif text-4xl text-[#3B3B3B] mb-16">
            Here&apos;s How I Fit In
          </h2>

          {segments.map((segment, index) => (
            <article
              key={segment.id}
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
