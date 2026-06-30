"use client";

import Image from "next/image";
import Link from "next/link";
import { useMarcoLocale } from "@/components/marco/marco-locale-provider";

export function MarcoStorySection() {
  const { t } = useMarcoLocale();
  const { story } = t;

  return (
    <section id="story" className="px-6 md:px-12 pt-8 pb-24 md:pt-12 md:pb-32 scroll-mt-24">
      <div className="flex justify-center mb-14 md:mb-20">
        <Link href="/" className="inline-block">
          <Image src="/logo.svg" alt="Vorm" width={28} height={28} />
        </Link>
      </div>

      <div className="max-w-xl mx-auto text-left">
        <p className="text-[1.625rem] leading-[1.5] text-[#3B3B3B] mb-8 md:mb-10">
          {story.name}
        </p>

        <h1 className="marco-serif text-[2.75rem] md:text-6xl lg:text-[5.125rem] text-[#3B3B3B] leading-[1.02] tracking-tight mb-10 md:mb-14">
          {story.headline}
        </h1>

        <div className="space-y-6 text-[#3B3B3B]/80 text-lg md:text-xl leading-relaxed mb-20 md:mb-28">
          {story.intro.map((paragraph, index) => (
            <p key={`intro-${index}`}>{paragraph}</p>
          ))}
          <ul className="space-y-2 pl-0 list-none">
            {story.questions.map((question, index) => (
              <li key={`question-${index}`}>{question}</li>
            ))}
          </ul>
          <p>{story.execution}</p>
          <p>{story.tagline}</p>
        </div>

        <div className="space-y-8 marco-serif text-xl md:text-2xl leading-[1.5] text-[#3B3B3B]/85">
          <h2 className="marco-serif text-3xl md:text-4xl text-[#3B3B3B] leading-tight">
            {story.myStoryTitle}
          </h2>
          {story.myStory.slice(0, 3).map((paragraph, index) => (
            <p key={`mystory-${index}`}>{paragraph}</p>
          ))}
          <p>
            {story.vormLinkBefore}
            <Link
              href="/"
              className="underline underline-offset-4 decoration-[#3B3B3B]/30 hover:decoration-[#3B3B3B]/60"
            >
              Vorm.Digital
            </Link>
            {story.vormLinkAfter}
          </p>
          <p>{story.myStory[3]}</p>
        </div>
      </div>
    </section>
  );
}
