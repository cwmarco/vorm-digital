"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMarcoLocale } from "@/components/marco/marco-locale-provider";
import { fadeUp, MarcoStaggerReveal, stagger } from "@/components/marco/marco-motion";

export function MarcoStorySection() {
  const reduceMotion = useReducedMotion();
  const { t, locale } = useMarcoLocale();
  const { story } = t;

  return (
    <section id="story" className="px-6 md:px-12 pt-8 pb-24 md:pt-12 md:pb-32 scroll-mt-24">
      <motion.div
        className="flex justify-center mb-14 md:mb-20"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <Link href="/" className="inline-block">
          <Image src="/logo.svg" alt="Vorm" width={28} height={28} />
        </Link>
      </motion.div>

      <motion.div
        className="max-w-xl mx-auto text-left"
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={stagger}
      >
        <motion.p
          className="text-[1.625rem] leading-[1.5] text-[#3B3B3B] mb-8 md:mb-10"
          variants={fadeUp}
        >
          Marco Günder
        </motion.p>

        <motion.h1
          className="marco-serif text-[2.75rem] md:text-6xl lg:text-[5.125rem] text-[#3B3B3B] leading-[1.02] tracking-tight mb-10 md:mb-14"
          variants={fadeUp}
        >
          {story.headline}
        </motion.h1>

        <motion.div
          className="space-y-6 text-[#3B3B3B]/80 text-lg md:text-xl leading-relaxed mb-20 md:mb-28"
          variants={stagger}
        >
          {story.intro.map((paragraph, index) => (
            <motion.p key={`intro-${index}`} variants={fadeUp}>
              {paragraph}
            </motion.p>
          ))}
          <motion.ul className="space-y-2 pl-0 list-none" variants={stagger}>
            {story.questions.map((question, index) => (
              <motion.li key={`question-${index}`} variants={fadeUp}>
                {question}
              </motion.li>
            ))}
          </motion.ul>
          <motion.p variants={fadeUp}>{story.execution}</motion.p>
          <motion.p variants={fadeUp}>{story.tagline}</motion.p>
        </motion.div>

        <MarcoStaggerReveal
          locale={locale}
          className="space-y-8 marco-serif text-xl md:text-2xl leading-[1.5] text-[#3B3B3B]/85"
        >
          <motion.h2
            className="marco-serif text-3xl md:text-4xl text-[#3B3B3B] leading-tight"
            variants={fadeUp}
          >
            {story.myStoryTitle}
          </motion.h2>
          {story.myStory.slice(0, 3).map((paragraph, index) => (
            <motion.p key={`mystory-${index}`} variants={fadeUp}>
              {paragraph}
            </motion.p>
          ))}
          <motion.p variants={fadeUp}>
            {story.vormLinkBefore}
            <Link
              href="/"
              className="underline underline-offset-4 decoration-[#3B3B3B]/30 hover:decoration-[#3B3B3B]/60"
            >
              Vorm.Digital
            </Link>
            {story.vormLinkAfter}
          </motion.p>
          <motion.p variants={fadeUp}>{story.myStory[3]}</motion.p>
        </MarcoStaggerReveal>
      </motion.div>
    </section>
  );
}
