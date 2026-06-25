"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function NavOrganicMark({ isActive }: { isActive: boolean }) {
  const [enterKey, setEnterKey] = useState(0);
  const wasActive = useRef(false);

  useEffect(() => {
    if (isActive && !wasActive.current) {
      setEnterKey((key) => key + 1);
    }
    wasActive.current = isActive;
  }, [isActive]);

  return (
    <span className="nav-mark-slot" aria-hidden>
      <span
        key={enterKey}
        className={`nav-mark-shell ${isActive ? "nav-mark-shell--active" : ""}`}
      >
        <span className={`nav-mark-spin ${isActive ? "nav-mark-spin--on" : ""}`}>
          <Image
            src="/logo.svg"
            alt=""
            width={11}
            height={11}
            className="nav-mark-glyph"
          />
        </span>
      </span>
    </span>
  );
}
