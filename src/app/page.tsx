import { LiquidGradient } from "@/components/ui/liquid-gradient";
import { SiteFooter } from "@/components/site-footer";
import { HeroHeadline } from "@/components/hero-headline";
import Image from "next/image";
import Link from "next/link";

const CAL_URL = "https://cal.com/marco-ennmyq/site-intro";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9F2] font-[family-name:var(--font-outfit)]">
      <LiquidGradient className="min-h-screen w-full">
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center">
          <div className="flex items-center gap-2 mb-10">
            <Image
              src="/logo.svg"
              alt="vorm.digital"
              width={44}
              height={44}
              className="-translate-y-[3px]"
            />
            <span className="font-[family-name:var(--font-fraunces)] text-[36px] tracking-[-0.01em] text-[#1A2E35]">
              Vorm
            </span>
          </div>

          <HeroHeadline />

          <p className="text-sm md:text-base text-[#3D5A56] mb-12 max-w-xl leading-relaxed">
            15 Jahre Marketing-Erfahrung in erfolgreichen Start-ups, 10 Jahre in Medical
            &amp; Beauty, zu einem System gebündelt, <em className="italic">unterstützt</em>{" "}
            durch KI.
          </p>

          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-[#1A2E35] text-[#F8F9F2] rounded-full text-sm font-medium hover:bg-[#2C4A52] transition-colors"
          >
            Erstgespräch vereinbaren
          </a>

          <Link
            href="/marco"
            className="mt-8 text-sm text-[#3D5A56] underline underline-offset-4 decoration-[#3D5A56]/30 hover:decoration-[#3D5A56]/60 hover:text-[#1A2E35] transition-colors"
          >
            Mehr über mich
          </Link>
        </div>
      </LiquidGradient>

      <SiteFooter />
    </main>
  );
}
