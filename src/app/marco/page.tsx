import Image from "next/image";
import Link from "next/link";
import { FitInTabs } from "@/components/marco/fit-in-tabs";
import { MarcoNav } from "@/components/marco/marco-nav";

const CAL_URL = "https://cal.com/marco-ennmyq/site-intro";
const LINKEDIN_URL = "https://www.linkedin.com/in/marcoeggens/";

export default function MarcoPage() {
  return (
    <>
      <div className="marco-glow fixed inset-x-0 top-0 h-[480px] pointer-events-none z-0" />
      <MarcoNav />

      <main className="relative z-10">
        {/* Story */}
        <section id="story" className="px-6 md:px-12 pt-8 pb-24 md:pt-12 md:pb-32">
          <div className="flex justify-center mb-14 md:mb-20">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Vorm"
                width={28}
                height={28}
              />
            </Link>
          </div>

          <div className="max-w-xl mx-auto text-left">
            <p className="text-[1.625rem] leading-[1.5] text-[#3B3B3B] mb-8 md:mb-10">
              Marco Günder
            </p>

            <h1 className="marco-serif text-[2.75rem] md:text-6xl lg:text-[5.125rem] text-[#3B3B3B] leading-[1.02] tracking-tight mb-10 md:mb-14">
              Your Growth &amp; Operations Partner
            </h1>

            <div className="space-y-6 text-[#3B3B3B]/80 text-lg md:text-xl leading-relaxed mb-20 md:mb-28">
              <p>
                I help build systems that drive growth. I support you in understanding your
                business and who you&apos;re speaking to, so you can deliver a better
                customer experience.
              </p>
              <p>
                Strategy through execution: marketing channels and CRM processes.
              </p>
            </div>

            <div className="space-y-8 marco-serif text-xl md:text-2xl leading-[1.5] text-[#3B3B3B]/85">
              <h2 className="marco-serif text-3xl md:text-4xl text-[#3B3B3B] leading-tight">
                My Story
              </h2>
              <p>
                I&apos;ve worked in marketing and customer relationship management for 15
                years, always for products and services built on trust. Over that time
                I&apos;ve built broad, deep experience across both digital and offline
                marketing.
              </p>
              <p>
                I look for the complete picture: collecting the data and staying close to
                sales and other customer-facing teams.
              </p>
              <p>
                Today I run a small marketing agency called{" "}
                <Link
                  href="/"
                  className="underline underline-offset-4 decoration-[#3B3B3B]/30 hover:decoration-[#3B3B3B]/60"
                >
                  Vorm.Digital
                </Link>{" "}
                for Health &amp; Beauty clinics, and I take on freelance consultancy work on
                a project basis.
              </p>
              <p>
                My sweet spot? Strategic projects, company launches, and efficient marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-[#F0F0F0]">
          <FitInTabs />
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-20 md:py-28 border-t border-[#F0F0F0]">
          <div className="max-w-2xl mx-auto text-left">
            <h2 className="marco-serif text-3xl md:text-4xl text-[#3B3B3B] mb-10">
              Contact
            </h2>
            <div className="flex flex-wrap gap-6 text-sm">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B3B3B] underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Book Meeting
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B3B3B] underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hallo@vorm.digital"
              className="text-[#3B3B3B] underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              hallo@vorm.digital
            </a>
          </div>
          </div>
        </section>
      </main>
    </>
  );
}
