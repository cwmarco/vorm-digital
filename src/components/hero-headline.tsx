"use client";

import { useEffect, useState } from "react";

const practices = [
  "Arztpraxis",
  "Schönheitsklinik",
  "Zahnarztpraxis",
  "KFO-Praxis",
];

const LINE_HEIGHT = "1.2em";

export function HeroHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % practices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-[family-name:var(--font-outfit)] font-medium text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] text-[#1A2E35] mb-8 max-w-4xl">
      <span className="sr-only">
        Sie führen Ihre {practices[index]}. Marketing übernehmen wir.
      </span>
      <span aria-hidden className="block">Sie führen Ihre</span>
      <span aria-hidden className="block relative overflow-hidden" style={{ height: LINE_HEIGHT }}>
        <span
          className="block transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(calc(-${index} * ${LINE_HEIGHT}))` }}
        >
          {practices.map((practice) => (
            <span
              key={practice}
              className="block whitespace-nowrap"
              style={{ height: LINE_HEIGHT, lineHeight: LINE_HEIGHT }}
            >
              {practice}.
            </span>
          ))}
        </span>
      </span>
      <span aria-hidden className="block mt-1 md:mt-2 font-normal italic text-[#1A2E35]/85">
        Marketing übernehmen wir.
      </span>
    </h1>
  );
}
