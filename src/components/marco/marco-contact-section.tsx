"use client";

import { motion } from "framer-motion";
import { useMarcoLocale } from "@/components/marco/marco-locale-provider";
import { fadeUp, MarcoStaggerReveal, stagger } from "@/components/marco/marco-motion";

const CAL_URL = "https://cal.com/marco-ennmyq/site-intro";
const LINKEDIN_URL = "https://www.linkedin.com/in/marcoeggens/";

export function MarcoContactSection() {
  const { t, locale } = useMarcoLocale();

  const links = [
    { href: CAL_URL, label: t.contact.bookMeeting, external: true },
    { href: LINKEDIN_URL, label: "LinkedIn", external: true },
    { href: "mailto:hallo@vorm.digital", label: "hallo@vorm.digital", external: false },
  ];

  return (
    <section id="contact" className="px-6 py-20 md:py-28 border-t border-[#F0F0F0] scroll-mt-24">
      <MarcoStaggerReveal locale={locale} className="max-w-2xl mx-auto text-left">
        <motion.h2
          className="marco-serif text-3xl md:text-4xl text-[#3B3B3B] mb-10"
          variants={fadeUp}
        >
          {t.contact.title}
        </motion.h2>
        <motion.div className="flex flex-wrap gap-6 text-sm" variants={stagger}>
          {links.map((link, index) => (
            <motion.a
              key={`contact-${index}`}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[#3B3B3B] underline underline-offset-4 hover:opacity-70 transition-opacity"
              variants={fadeUp}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </MarcoStaggerReveal>
    </section>
  );
}
