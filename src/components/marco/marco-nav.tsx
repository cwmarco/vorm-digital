"use client";

import { useEffect, useState } from "react";
import { NavOrganicMark } from "@/components/marco/nav-organic-mark";

const CAL_URL = "https://cal.com/marco-ennmyq/site-intro";

const navLinks = [
  { href: "#story", id: "story", label: "Story" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof navLinks)[number]["id"];

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.56 1 1 0 01-.24 1L6.6 10.8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MarcoNav() {
  const [active, setActive] = useState<SectionId>("story");

  useEffect(() => {
    const updateActive = () => {
      const story = document.getElementById("story");
      const experience = document.getElementById("experience");
      const contact = document.getElementById("contact");
      if (!story || !experience || !contact) return;

      const scrollBottom = window.scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight;
      const atPageBottom = scrollBottom >= pageBottom - 96;

      if (atPageBottom) {
        setActive("contact");
        return;
      }

      const marker = window.innerHeight * 0.35;
      const experienceTop = experience.getBoundingClientRect().top;

      if (experienceTop <= marker) {
        setActive("experience");
      } else {
        setActive("story");
      }
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <>
      <nav
        aria-label="Page sections"
        className="hidden md:flex fixed left-8 top-9 z-50 flex-col gap-3"
      >
        {navLinks.map((link) => {
          const isActive = active === link.id;
          return (
            <a
              key={link.id}
              href={link.href}
              className={`flex items-center gap-2 text-xs transition-colors ${
                isActive ? "text-[#3B3B3B]" : "text-[#3B3B3B]/55 hover:text-[#3B3B3B]/80"
              }`}
            >
              <NavOrganicMark isActive={isActive} />
              {link.label}
            </a>
          );
        })}
      </nav>

      <a
        href={CAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-8 top-9 z-50 hidden md:flex items-center gap-2 text-xs text-[#3B3B3B] hover:opacity-70 transition-opacity"
      >
        Book a Call
        <PhoneIcon />
      </a>

      <div className="md:hidden fixed top-0 inset-x-0 z-50 flex justify-end px-6 py-4 bg-white/70 backdrop-blur-sm">
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-[#3B3B3B]"
        >
          Book a Call
          <PhoneIcon />
        </a>
      </div>
    </>
  );
}
