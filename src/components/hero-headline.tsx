"use client";

import { useEffect, useState } from "react";

const practices = [
  "Arztpraxis",
  "Schönheitsklinik",
  "Zahnarztpraxis",
  "KFO-Praxis",
];

const LINE_HEIGHT = "1.15em";

export function HeroHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % practices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl md:text-6xl tracking-tight mb-2 text-[#1A2E35]">
      <span className="sr-only">
        Sie führen Ihre {practices[index]}.
      </span>
      <span aria-hidden>
        Sie führen Ihre{" "}
        <span
          className="inline-block relative align-bottom overflow-hidden"
          style={{ height: LINE_HEIGHT, minWidth: "12ch" }}
        >
          <span
            className="block transition-transform duration-500 ease-in-out italic"
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
      </span>
    </h1>
  );
}
